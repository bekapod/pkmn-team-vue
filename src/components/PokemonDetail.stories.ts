import PokemonDetail from "./PokemonDetail.vue";
import type { Meta, Story } from "@storybook/vue3";
import { haunter, hoOh, jirachi, pichu } from "@/data/mocks";

const csf: Meta = {
  component: PokemonDetail,
  args: {},
};

const Template: Story = (args) => ({
  components: { PokemonDetail },
  setup() {
    return { args };
  },
  template: `
    <PokemonDetail v-bind="args" />
  `,
});

export const Haunter = Template.bind({});
Haunter.args = {
  ...haunter,
  pokedexId: haunter.species.pokedexId,
  name: haunter.defaultForm.name,
  sprite: haunter.defaultSprite,
  description: haunter.species.description,
  genus: haunter.species.genus,
  isBaby: haunter.species.isBaby,
  isLegendary: haunter.species.isLegendary,
  isMythical: haunter.species.isMythical,
};

export const HoOh = Template.bind({});
HoOh.args = {
  ...hoOh,
  pokedexId: hoOh.species.pokedexId,
  name: hoOh.defaultForm.name,
  sprite: hoOh.defaultSprite,
  description: hoOh.species.description,
  genus: hoOh.species.genus,
  isBaby: hoOh.species.isBaby,
  isLegendary: hoOh.species.isLegendary,
  isMythical: hoOh.species.isMythical,
};

export const Jirachi = Template.bind({});
Jirachi.args = {
  ...jirachi,
  pokedexId: jirachi.species.pokedexId,
  name: jirachi.defaultForm.name,
  sprite: jirachi.defaultSprite,
  description: jirachi.species.description,
  genus: jirachi.species.genus,
  isBaby: jirachi.species.isBaby,
  isLegendary: jirachi.species.isLegendary,
  isMythical: jirachi.species.isMythical,
};

export const Pichu = Template.bind({});
Pichu.args = {
  ...pichu,
  pokedexId: pichu.species.pokedexId,
  name: pichu.defaultForm.name,
  sprite: pichu.defaultSprite,
  description: pichu.species.description,
  genus: pichu.species.genus,
  isBaby: pichu.species.isBaby,
  isLegendary: pichu.species.isLegendary,
  isMythical: pichu.species.isMythical,
};

export default csf;
