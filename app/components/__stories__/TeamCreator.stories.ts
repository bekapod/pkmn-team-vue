import TeamCreator from "../TeamCreator.vue";

export default {
  title: "components/Team Creator",
  component: TeamCreator,
};

export const teamCreator = (args: unknown) => ({
  components: { TeamCreator },
  setup() {
    return { args };
  },
  template: `
    <TeamCreator v-bind="args" />
  `,
});
