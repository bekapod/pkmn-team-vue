import * as Sentry from "@sentry/vue";
import cuid from "cuid";
import { defineStore } from "pinia";
import { useToasts } from "./toasts";
import { useTrainer } from "./trainer";
import type { Team, TeamMember } from "@/data";
import { parseTeam } from "@/data";
import { getSdk, type UpdateTeamMutationVariables } from "@/graphql";
import { client } from "@/lib";

type Member = TeamMember & { isNew?: boolean };

type TeamState = Partial<Omit<Team, "members">> & {
  deletedMembers: string[];
  dirty: boolean;
  isFindingMember: boolean;
  members: Member[];
};

export const useTeam = defineStore("team", {
  state: (): TeamState => {
    return {
      id: undefined,
      name: undefined,
      members: [],
      createdAt: undefined,
      createdBy: undefined,
      deletedMembers: [],
      dirty: false,
      isFindingMember: false,
    };
  },
  getters: {
    canEdit: (state) => {
      const me = useTrainer();
      return me.id ? state.createdBy?.id === me.id : false;
    },
  },
  actions: {
    async get(id: string) {
      if (this.id === id) return { error: null, data: this.$state };

      try {
        this.$reset();
        const data = await getSdk(client).TeamById({
          id,
        });
        const parsed = parseTeam(data.team);
        this.$state = {
          ...parsed,
          dirty: false,
          deletedMembers: [],
          isFindingMember: false,
        };

        return { error: null, data: parsed };
      } catch (error) {
        Sentry.captureException(error, {
          level: "error",
          extra: {
            id,
          },
        });
        return { error, data: null };
      }
    },
    async setName(name: string) {
      const toasts = useToasts();

      const errorToast = {
        type: "error",
        title: "Error",
        content: "An error happened while updating your team name.",
      } as const;
      const successToast = {
        type: "success",
        title: "Team name updated!",
        content: "Your team has been successfully renamed.",
      } as const;

      toasts.removeToast(errorToast);
      toasts.removeToast(successToast);

      if (this.id) {
        try {
          const token = await this.auth.getAccessTokenSilently();
          const data = await getSdk(client).UpdateTeam(
            {
              input: {
                id: this.id,
                name: name,
              },
              removedIds: [],
            },
            { token }
          );
          const parsed = parseTeam(data.updateTeam);
          this.name = parsed.name;
          toasts.addToast(successToast);
          return { error: null, data: parsed.name };
        } catch (error) {
          Sentry.captureException(error, {
            level: "error",
            extra: {
              id: this.id,
              name,
            },
          });
          toasts.addToast(errorToast);
          return { error, data: null };
        }
      } else {
        Sentry.captureMessage("Tried to set team name without team being set", {
          level: "error",
          extra: {
            name,
          },
        });
        toasts.addToast(errorToast);
        return { error: "Team has not been set", data: null };
      }
    },
    async create(name: string) {
      const toasts = useToasts();

      const errorToast = {
        type: "error",
        title: "Error",
        content: "An error happened while creating your team.",
      } as const;
      const successToast = {
        type: "success",
        title: "Team created!",
        content: "Your team has been successfully created.",
      } as const;

      toasts.removeToast(errorToast);
      toasts.removeToast(successToast);

      try {
        const token = await this.auth.getAccessTokenSilently();
        const data = await getSdk(client).CreateTeam(
          {
            input: {
              name: name,
              members: [],
            },
          },
          { token }
        );
        const parsed = parseTeam(data.createTeam);
        this.$state = {
          ...parsed,
          dirty: false,
          deletedMembers: [],
          isFindingMember: false,
        };
        toasts.addToast(successToast);
        return { error: null, data: parsed };
      } catch (error) {
        Sentry.captureException(error, {
          level: "error",
          extra: {
            name,
          },
        });
        toasts.addToast(errorToast);
        return { error, data: null };
      }
    },
    async remove() {
      const toasts = useToasts();

      const errorToast = {
        type: "error",
        title: "Error",
        content: "An error happened while deleting your team.",
      } as const;
      const successToast = {
        type: "success",
        title: "Team deleted!",
        content: "Your team has been successfully deleted.",
      } as const;

      toasts.removeToast(errorToast);
      toasts.removeToast(successToast);

      if (this.id) {
        const token = await this.auth.getAccessTokenSilently();
        try {
          const data = await getSdk(client).RemoveTeam(
            {
              id: this.id,
            },
            { token }
          );
          const parsed = parseTeam(data.removeTeam);
          this.$state = {
            ...parsed,
            dirty: false,
            deletedMembers: [],
            isFindingMember: false,
          };
          toasts.addToast(successToast);
          return { error: null, data: parsed };
        } catch (error) {
          Sentry.captureException(error, {
            level: "error",
            extra: {
              id: this.id,
            },
          });
          toasts.addToast(errorToast);
          return { error, data: null };
        }
      } else {
        Sentry.captureMessage("Tried to set team name without team being set", {
          level: "error",
        });
        toasts.addToast(errorToast);
        return { error: "Team has not been set", data: null };
      }
    },
    removeMember(id: string) {
      const member = this.members.find(
        (currentMember) => currentMember.id === id
      );
      this.members = this.members.filter(
        (currentMember) => currentMember.id !== id
      );
      if (!member?.isNew) {
        this.deletedMembers.push(id);
        this.dirty = true;
        this.saveMembers();
      }
      return [this.members, this.deletedMembers];
    },
    addMember(member: Omit<TeamMember, "id" | "slot">) {
      this.members.push({
        ...member,
        id: cuid(),
        slot: this.members.length,
        isNew: true,
      });
      this.dirty = true;
      this.saveMembers();
      return this.members;
    },
    async saveMembers() {
      const toasts = useToasts();

      const errorToast = {
        type: "error",
        title: "Error",
        content: "An error happened while saving your team.",
      } as const;
      const successToast = {
        type: "success",
        title: "Team saved!",
        content: "Your team has been successfully saved.",
      } as const;

      if (!this.id) {
        Sentry.captureMessage("Tried to save team without team being set", {
          level: "error",
        });
        toasts.addToast(errorToast);
        return { error: "Team has not been set", data: null };
      }

      if (this.dirty) {
        try {
          const token = await this.auth.getAccessTokenSilently();
          const membersToDelete: UpdateTeamMutationVariables["removedIds"] =
            this.deletedMembers;

          const membersToUpdate: UpdateTeamMutationVariables["input"]["members"] =
            this.members.map((member) => ({
              id: member.isNew ? undefined : member.id,
              slot: member.slot,
              pokemonId: member.pokemon.id,
            }));

          const data = await getSdk(client).UpdateTeam(
            {
              input: {
                id: this.id,
                name: this.name,
                members: membersToUpdate,
              },
              removedIds: membersToDelete,
            },
            { token }
          );
          const parsed = parseTeam(data.updateTeam);
          this.members = parsed.members;
          this.dirty = false;
          this.deletedMembers = [];
          toasts.addToast(successToast);
          return parsed.members;
        } catch (error) {
          Sentry.captureException(error, {
            level: "error",
            extra: {
              id: this.id,
            },
          });
          toasts.addToast(errorToast);
        }
      } else {
        return this.members;
      }
    },
  },
  debounce: {
    saveMembers: 3000,
  },
});
