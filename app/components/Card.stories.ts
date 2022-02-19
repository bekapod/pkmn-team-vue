import { Story } from "@storybook/vue3";
import Card from "./Card.vue";

const csf = {
  title: "components/Card",
  component: Card,
  args: {
    to: "#",
    types: ["electric", "electric", "ghost", "psychic"],
  },
};

export const card: Story = args => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: `
    <Card v-bind="args" class="w-[500px]">
      <template #heading>Card Heading</template>
      <p>
        Jelly jelly-o fruitcake jujubes muffin cotton candy bonbon jelly-o
        danish. Bonbon sugar plum candy gummi bears lemon drops dragée.
        Chocolate bar tootsie roll bonbon gummi bears cotton candy halvah
        soufflé tart. Jelly beans jelly tart lemon drops. Fruitcake candy
        cookie croissant pie. Lollipop liquorice chocolate bar chupa chups
        chupa chups. Jelly-o ice cream marzipan cheesecake sweet sweet cake
        danish. Soufflé chocolate bar cupcake sesame snaps chocolate cotton
        candy icing brownie. Ice cream danish muffin biscuit cotton candy
        cheesecake oat cake cookie chocolate cake. Bonbon brownie marzipan
        sugar plum cheesecake gummi bears icing icing. Marshmallow dessert
        lollipop chocolate cake cupcake. Danish liquorice muffin lemon drops
        cake chupa chups marshmallow sweet roll jelly.
      </p>
    </Card>
  `,
});

export default csf;
