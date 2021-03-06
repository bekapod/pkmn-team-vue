import { userEvent, screen } from "@storybook/testing-library";
import { graphql } from "msw";
import TeamCreator from "./TeamCreator.vue";
import ToastContainer from "./ToastContainer.vue";
import type { Meta, Story } from "@storybook/vue3";
import { useTrainer } from "@/stores";

const csf: Meta = {
  component: TeamCreator,
  argTypes: {
    teamCreated: { action: "@team-created" },
  },
  decorators: [
    (story) => {
      const trainer = useTrainer();
      trainer.id = "TRA123";
      return story();
    },
    (story) => ({
      components: { ToastContainer, story },
      template: `
        <story />
        <Teleport to="#toast-teleport-target">
          <ToastContainer />
        </Teleport>
      `,
    }),
  ],
};

const Template: Story = ({ teamCreated, ...args }) => ({
  components: { TeamCreator },
  setup() {
    return { args, teamCreated };
  },
  template: `
    <TeamCreator v-bind="args" @team-created="teamCreated" />
  `,
});

export const DefaultBehaviour = Template.bind({});
DefaultBehaviour.parameters = {
  msw: {
    handlers: {
      createTeam: [
        graphql.mutation("CreateTeam", (req, res, ctx) => {
          return res(
            ctx.data({
              createTeam: {
                __typename: "Team",
                id: "ckzomjy5z00004kvg5ux6fy0c",
                name: req.variables.name,
                createdAt: new Date(Date.now()).toISOString(),
                updatedAt: new Date(Date.now()).toISOString(),
                members: {
                  edges: [],
                },
                createdBy: {
                  __typename: "Trainer",
                  id: "TRA123",
                  username: "A user",
                  picture:
                    "https://placey.bekapod.codes/g/120/120/ffffff/000000",
                },
              },
            })
          );
        }),
      ],
    },
  },
};
DefaultBehaviour.play = async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    "A team name!",
    { delay: 100 }
  );
  await userEvent.click(screen.getByRole("button", { name: "Create team" }));
  await screen.findByText("Team created!");
};

export const InvalidState = Template.bind({});
InvalidState.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: "Create team" }));
};

export const LoadingState = Template.bind({});
LoadingState.parameters = {
  msw: {
    handlers: {
      createTeam: [
        graphql.mutation("CreateTeam", (_req, res, ctx) => {
          return res(ctx.delay("infinite"));
        }),
      ],
    },
  },
};
LoadingState.play = async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    "A team name!",
    { delay: 100 }
  );
  await userEvent.click(screen.getByRole("button", { name: "Create team" }));
};

export const ErrorState = Template.bind({});
ErrorState.parameters = {
  msw: {
    handlers: {
      createTeam: [
        graphql.mutation("CreateTeam", (_req, res, ctx) => {
          return res(
            ctx.errors([
              {
                message: "error creating team members",
                path: ["createTeam"],
              },
            ])
          );
        }),
      ],
    },
  },
};
ErrorState.play = async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    "A team name!",
    { delay: 100 }
  );
  await userEvent.click(screen.getByRole("button", { name: "Create team" }));
  await screen.findByText("Error");
};

export default csf;
