import { userEvent, screen } from "@storybook/testing-library";
import { graphql } from "msw";
import TeamName from "./TeamName.vue";
import ToastContainer from "./ToastContainer.vue";
import type { Meta, Story } from "@storybook/vue3";
import { useTeam, useTrainer } from "@/stores";

const csf: Meta = {
  component: TeamName,
  args: {
    authTimeout: 0.5,
  },
  argTypes: {
    teamRenamed: { action: "@team-renamed" },
  },
  decorators: [
    (story) => {
      const trainer = useTrainer();
      trainer.id = "TRA123";
      const team = useTeam();
      team.id = "1";
      team.name = "A team name!";
      team.createdBy = { id: "TRA123", username: "Some user" };
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

const Template: Story = ({ teamRenamed, ...args }) => ({
  components: { TeamName },
  setup() {
    return { args, teamRenamed };
  },
  template:
    '<h1 class="text-3xl font-bold"><TeamName v-bind="args" @team-renamed="teamRenamed" /></h1>',
});

export const DefaultBehaviour = Template.bind({});
DefaultBehaviour.parameters = {
  msw: {
    handlers: [
      graphql.mutation("UpdateTeam", (req, res, ctx) => {
        return res(
          ctx.data({
            updateTeam: {
              __typename: "Team",
              id: req.variables.input.id,
              name: req.variables.input.name,
              createdAt: new Date(Date.now()).toISOString(),
              updatedAt: new Date(Date.now()).toISOString(),
              members: {
                edges: [],
              },
              createdBy: {
                __typename: "Trainer",
                id: "TRA123",
                username: "A user",
                picture: "https://placey.bekapod.codes/g/120/120/ffffff/000000",
              },
            },
          })
        );
      }),
    ],
  },
};
DefaultBehaviour.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: /a team name/i }));
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    " (updated)",
    { delay: 100 }
  );
  await userEvent.click(screen.getByRole("button", { name: "Update" }));
};

export const InvalidState = Template.bind({});
InvalidState.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: /a team name/i }));
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}",
    { delay: 100 }
  );
  await userEvent.click(screen.getByRole("button", { name: "Update" }));
};

export const LoadingState = Template.bind({});
LoadingState.parameters = {
  msw: {
    handlers: [
      graphql.mutation("UpdateTeam", (_req, res, ctx) => {
        return res(ctx.delay("infinite"));
      }),
    ],
  },
};
LoadingState.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: /a team name/i }));
  await userEvent.click(screen.getByRole("button", { name: "Update" }));
};

export const ErrorState = Template.bind({});
ErrorState.parameters = {
  msw: {
    handlers: [
      graphql.mutation("UpdateTeam", (_req, res, ctx) => {
        return res(
          ctx.errors([
            {
              message: "error updating the team",
              path: ["updateTeam"],
            },
          ])
        );
      }),
    ],
  },
};
ErrorState.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: /a team name/i }));
  await userEvent.click(screen.getByRole("button", { name: "Update" }));
};

export default csf;
