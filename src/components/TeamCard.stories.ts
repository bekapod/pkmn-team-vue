import TeamCard from "./TeamCard.vue";
import type { Meta, Story } from "@storybook/vue3";
import { charmander, haunter, pikachu } from "@/data/mocks";

const csf: Meta = {
  component: TeamCard,
  args: {
    id: "123",
    createdAt: "2020-12-12T19:17:37Z",
    name: "My Super Team!",
    members: [
      {
        id: "1",
        pokemon: charmander,
      },
      {
        id: "2",
        pokemon: pikachu,
      },
      {
        id: "3",
        pokemon: haunter,
      },
    ],
  },
};

export const Default: Story = (args: unknown) => ({
  components: { TeamCard },
  setup() {
    return { args };
  },
  template: `
    <TeamCard class="w-[500px]" v-bind="args" />
  `,
});

export default csf;
