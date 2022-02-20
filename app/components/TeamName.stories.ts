import { Meta, Story } from "@storybook/vue3";
import { graphql } from "msw";
import { userEvent, screen } from "@storybook/testing-library";
import { worker } from "@/mocks/browser";
import TeamName from "./TeamName.vue";
import ToastContainer from "./ToastContainer.vue";

const csf: Meta = {
  title: "components/Team Name",
  component: TeamName,
  args: {
    name: "A team name!",
  },
  argTypes: {
    teamRenamed: { action: "@team-renamed" },
  },
  decorators: [
    story => ({
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

export const defaultBehaviour = Template.bind({});
defaultBehaviour.decorators = [
  story => {
    worker && worker.resetHandlers();
    return story();
  },
];
defaultBehaviour.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: /a team name/i }));
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    " (updated)",
    { delay: 100 },
  );
  await userEvent.click(screen.getByRole("button", { name: "Update" }));
};

export const invalidState = Template.bind({});
invalidState.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: /a team name/i }));
  await userEvent.type(
    screen.getByRole("textbox", { name: "Team name" }),
    "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}",
    { delay: 100 },
  );
  await userEvent.click(screen.getByRole("button", { name: "Update" }));
};

export const loadingState = Template.bind({});
loadingState.decorators = [
  story => {
    worker &&
      worker.use(
        graphql.mutation("CreateTeam", (_req, res, ctx) => {
          return res(ctx.delay("infinite"));
        }),
      );

    return story();
  },
];
loadingState.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: /a team name/i }));
  await userEvent.click(screen.getByRole("button", { name: "Update" }));
};

export const errorState = Template.bind({});
errorState.decorators = [
  story => {
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

    return story();
  },
];
errorState.play = async () => {
  await userEvent.click(screen.getByRole("button", { name: /a team name/i }));
  await userEvent.click(screen.getByRole("button", { name: "Update" }));
};

export default csf;
