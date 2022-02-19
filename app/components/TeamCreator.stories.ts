import { Meta, Story } from "@storybook/vue3";
import { graphql } from "msw";
import { userEvent, screen } from "@storybook/testing-library";
import { worker } from "@/mocks/browser";
import TeamCreator from "./TeamCreator.vue";

const csf: Meta = {
  title: "components/Team Creator",
  component: TeamCreator,
  argTypes: {
    teamCreated: { action: "@team-created" },
  },
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

export const defaultBehaviour = Template.bind({});
defaultBehaviour.play = async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    "A team name!",
    { delay: 100 },
  );
  await userEvent.click(screen.getByRole("button", { name: "Create team" }));
};

export const invalidState = Template.bind({});
invalidState.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: "Create team" }));
};

export const loadingState = Template.bind({});
loadingState.decorators = [
  Story => {
    worker &&
      worker.use(
        graphql.mutation("CreateTeam", (_req, res, ctx) => {
          return res(ctx.delay("infinite"));
        }),
      );

    return Story();
  },
];
loadingState.play = async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    "A team name!",
    { delay: 100 },
  );
  await userEvent.click(screen.getByRole("button", { name: "Create team" }));
};

export const errorState = Template.bind({});
errorState.decorators = [
  Story => {
    worker &&
      worker.use(
        graphql.mutation("CreateTeam", (_req, res, ctx) => {
          return res(
            ctx.errors([
              {
                message: "error creating team members",
                path: ["createTeam"],
              },
            ]),
          );
        }),
      );

    return Story();
  },
];
errorState.play = async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    "A team name!",
    { delay: 100 },
  );
  await userEvent.click(screen.getByRole("button", { name: "Create team" }));
};

export default csf;
