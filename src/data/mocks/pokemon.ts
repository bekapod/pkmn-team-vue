import { parsePokemon, type Pokemon } from "../pokemon";
import { parsePokemonSpecies, type PokemonSpecies } from "../pokemon-species";
import { Color, Habitat, Shape, type PokemonFieldsFragment } from "@/graphql";
import { parsePokemonForm, type PokemonForm } from "../pokemon-form";

export const charmanderFields: PokemonFieldsFragment = {
  id: "POKcl2hi363o0ve322xf1k8a38zo",
  attack: 52,
  defense: 43,
  hp: 39,
  isDefault: true,
  slug: "charmander",
  specialAttack: 60,
  specialDefense: 50,
  speed: 65,
  sprites: {
    frontDefault: {
      path: "pokemon/4.png",
    },
  },
  abilities: {
    edges: [
      {
        slot: 3,
        isHidden: true,
        node: {
          id: "ABIcl2hhlrmr002n22xfe5pld5vv",
          name: "Solar Power",
          slug: "solar-power",
          effect:
            "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight.",
        },
      },
      {
        slot: 1,
        isHidden: false,
        node: {
          id: "ABIcl2hhlqih001v22xf4kcph43t",
          name: "Blaze",
          slug: "blaze",
          effect:
            "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
        },
      },
    ],
  },
  forms: {
    edges: [
      {
        node: {
          id: "PKFcl2hi367o0vg222xf6bou7cj6",
          formName: null,
          isBattleOnly: false,
          isDefault: true,
          name: "Charmander",
          slug: "charmander",
        },
      },
    ],
  },
  species: {
    id: "PKScl2hi363k0ve022xfavup78rc",
    color: Color.Red,
    description:
      "It has a preference for hot things. When it rains,\nsteam is said to spout from the tip of its tail.\n\nFrom the time it is born, a flame burns at the tip\nof its tail. Its life would end if the flame were to\ngo out.",
    genus: "Lizard Pokémon",
    habitat: Habitat.Mountain,
    isBaby: false,
    isLegendary: false,
    isMythical: false,
    name: "Charmander",
    pokedexId: 4,
    shape: Shape.Upright,
    slug: "charmander",
  },
  types: {
    edges: [
      {
        slot: 1,
        node: {
          id: "TYPcl2hhnjm001gs22xf5d5ycl44",
          name: "Fire",
          slug: "fire",
        },
      },
    ],
  },
};

export const charmanderSpecies: PokemonSpecies = parsePokemonSpecies(
  charmanderFields.species
);

export const charmanderForm: PokemonForm = parsePokemonForm(
  charmanderFields.forms.edges?.[0].node
);

export const charmander: Pokemon = parsePokemon(charmanderFields);

export const pikachuFields: PokemonFieldsFragment = {
  id: "POKcl2hhxwwx0jbt22xfc5bddggu",
  attack: 55,
  defense: 40,
  hp: 35,
  isDefault: true,
  slug: "pikachu",
  specialAttack: 50,
  specialDefense: 50,
  speed: 90,
  sprites: {
    frontDefault: {
      path: "pokemon/25.png",
    },
  },
  abilities: {
    edges: [
      {
        slot: 1,
        isHidden: false,
        node: {
          id: "ABIcl2hhlndr000a22xfh70908vn",
          name: "Static",
          slug: "static",
          effect:
            "Has a 30% chance of paralyzing attacking Pokémon on contact.",
        },
      },
      {
        slot: 3,
        isHidden: true,
        node: {
          id: "ABIcl2hhlola000w22xfht5g6of2",
          name: "Lightning Rod",
          slug: "lightning-rod",
          effect:
            "Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
        },
      },
    ],
  },
  forms: {
    edges: [
      {
        node: {
          id: "PKFcl2hhxvv00izw22xf6brr40al",
          formName: null,
          isBattleOnly: false,
          isDefault: true,
          name: "Pikachu",
          slug: "pikachu",
        },
      },
    ],
  },
  species: {
    id: "PKScl2hhxvqg0ixs22xf5265ebnd",
    color: Color.Yellow,
    description:
      "Pikachu that can generate powerful electricity\nhave cheek sacs that are extra soft and\nsuper stretchy.\n\nWhen Pikachu meet, they’ll touch their tails\ntogether and exchange electricity through them\nas a form of greeting.",
    genus: "Mouse Pokémon",
    habitat: Habitat.Forest,
    isBaby: false,
    isLegendary: false,
    isMythical: false,
    name: "Pikachu",
    pokedexId: 25,
    shape: Shape.Quadruped,
    slug: "pikachu",
  },
  types: {
    edges: [
      {
        slot: 1,
        node: {
          id: "TYPcl2hhnjm101gv22xf61mxhpiu",
          name: "Electric",
          slug: "electric",
        },
      },
    ],
  },
};

export const pikachuSpecies: PokemonSpecies = parsePokemonSpecies(
  pikachuFields.species
);

export const pikachuForm: PokemonForm = parsePokemonForm(
  pikachuFields.forms.edges?.[0].node
);

export const pikachu: Pokemon = parsePokemon(pikachuFields);

export const haunterFields: PokemonFieldsFragment = {
  id: "POKcl2hhw1ia0ffr22xf28wl6lik",
  attack: 50,
  defense: 45,
  hp: 45,
  isDefault: true,
  slug: "haunter",
  specialAttack: 115,
  specialDefense: 55,
  speed: 95,
  sprites: {
    frontDefault: {
      path: "pokemon/93.png",
    },
  },
  abilities: {
    edges: [
      {
        slot: 1,
        isHidden: false,
        node: {
          id: "ABIcl2hhlobs000r22xfh1nn7539",
          name: "Levitate",
          slug: "levitate",
          effect: "Evades ground moves.",
        },
      },
    ],
  },
  forms: {
    edges: [
      {
        node: {
          id: "PKFcl2hhw1n60fhn22xf9prxd1rp",
          formName: null,
          isBattleOnly: false,
          isDefault: true,
          name: "Haunter",
          slug: "haunter",
        },
      },
    ],
  },
  species: {
    id: "PKScl2hhw1i60ffo22xf4i691ngr",
    color: Color.Purple,
    description:
      "Its tongue is made of gas. If licked, its victim\nstarts shaking constantly until death\neventually comes.\n\nIf you get the feeling of being watched in darkness\nwhen nobody is around, Haunter is there.",
    genus: "Gas Pokémon",
    habitat: Habitat.Cave,
    isBaby: false,
    isLegendary: false,
    isMythical: false,
    name: "Haunter",
    pokedexId: 93,
    shape: Shape.Arms,
    slug: "haunter",
  },
  types: {
    edges: [
      {
        slot: 1,
        node: {
          id: "TYPcl2hhnjlz01gq22xf3a2eh33i",
          name: "Ghost",
          slug: "ghost",
        },
      },
      {
        slot: 2,
        node: {
          id: "TYPcl2hhnjlc01gm22xf18mj5i7v",
          name: "Poison",
          slug: "poison",
        },
      },
    ],
  },
};

export const haunterSpecies: PokemonSpecies = parsePokemonSpecies(
  haunterFields.species
);

export const haunterForm: PokemonForm = parsePokemonForm(
  haunterFields.forms.edges?.[0].node
);

export const haunter: Pokemon = parsePokemon(haunterFields);

export const jirachiFields: PokemonFieldsFragment = {
  id: "POKcl2hhquo7043122xfhyfg6nr3",
  attack: 100,
  defense: 100,
  hp: 100,
  isDefault: true,
  slug: "jirachi",
  specialAttack: 100,
  specialDefense: 100,
  speed: 100,
  sprites: {
    frontDefault: {
      path: "pokemon/385.png",
    },
  },
  abilities: {
    edges: [
      {
        isHidden: false,
        slot: 1,
        node: {
          id: "ABIcl2hhlola000x22xff9bbc5mb",
          effect: "Doubles the chance of moves' extra effects occurring.",
          name: "Serene Grace",
          slug: "serene-grace",
        },
      },
    ],
  },
  forms: {
    edges: [
      {
        node: {
          id: "PKFcl2hhquv3045e22xfcwxt83dw",
          formName: null,
          isBattleOnly: false,
          isDefault: true,
          name: "Jirachi",
          slug: "jirachi",
        },
      },
    ],
  },
  species: {
    id: "PKScl2hhquo3042y22xfbjw4ej2k",
    color: Color.Yellow,
    description:
      "Once every 1,000 years, the singing of a pure\nvoice will rouse this Pokémon from its near-\nperpetual slumber. It wakes for only seven days.\n\nIt’s believed that when this Pokémon wakes from\nits 1,000-year slumber, it will grant any wishes\nwritten on the notes attached to its head.",
    genus: "Wish Pokémon",
    habitat: Habitat.Mountain,
    isBaby: false,
    isLegendary: false,
    isMythical: true,
    name: "Jirachi",
    pokedexId: 385,
    shape: Shape.Humanoid,
    slug: "jirachi",
  },
  types: {
    edges: [
      {
        slot: 1,
        node: {
          id: "TYPcl2hhnjm001gr22xf5yx63ucl",
          name: "Steel",
          slug: "steel",
        },
      },
      {
        slot: 2,
        node: {
          id: "TYPcl2hhnjm101gw22xfdmev7gbg",
          name: "Psychic",
          slug: "psychic",
        },
      },
    ],
  },
};

export const jirachiSpecies: PokemonSpecies = parsePokemonSpecies(
  jirachiFields.species
);

export const jirachiForm: PokemonForm = parsePokemonForm(
  jirachiFields.forms.edges?.[0].node
);

export const jirachi: Pokemon = parsePokemon(jirachiFields);

export const hoOhFields: PokemonFieldsFragment = {
  id: "POKcl2hhq6f4032c22xf9o2w4dhh",
  attack: 130,
  defense: 90,
  hp: 106,
  isDefault: true,
  slug: "ho-oh",
  specialAttack: 110,
  specialDefense: 154,
  speed: 90,
  sprites: {
    frontDefault: {
      path: "pokemon/250.png",
    },
  },
  abilities: {
    edges: [
      {
        isHidden: false,
        slot: 1,
        node: {
          id: "ABIcl2hhlp84001b22xf4hsdhhan",
          effect:
            "Increases the PP cost of moves targetting the Pokémon by one.",
          name: "Pressure",
          slug: "pressure",
        },
      },
      {
        isHidden: true,
        slot: 3,
        node: {
          id: "ABIcl2hhludo004122xf4o1a0bdj",
          effect: "Heals for 1/3 max HP upon switching out.",
          name: "Regenerator",
          slug: "regenerator",
        },
      },
    ],
  },
  forms: {
    edges: [
      {
        node: {
          id: "PKFcl2hhq6km034b22xfdy74ggzz",
          formName: null,
          isBattleOnly: false,
          isDefault: true,
          name: "Ho-Oh",
          slug: "ho-oh",
        },
      },
    ],
  },
  species: {
    id: "PKScl2hhq6ew032922xf6v9igrc1",
    color: Color.Red,
    description: "",
    genus: "Rainbow Pokémon",
    habitat: Habitat.Rare,
    isBaby: false,
    isLegendary: true,
    isMythical: false,
    name: "Ho-Oh",
    pokedexId: 250,
    shape: Shape.Wings,
    slug: "ho-oh",
  },
  types: {
    edges: [
      {
        slot: 1,
        node: {
          id: "TYPcl2hhnjm001gs22xf5d5ycl44",
          name: "Fire",
          slug: "fire",
        },
      },
      {
        slot: 2,
        node: {
          id: "TYPcl2hhnjlc01gl22xf22w3af7i",
          name: "Flying",
          slug: "flying",
        },
      },
    ],
  },
};

export const hoOhSpecies: PokemonSpecies = parsePokemonSpecies(
  hoOhFields.species
);

export const hoOhForm: PokemonForm = parsePokemonForm(
  hoOhFields.forms.edges?.[0].node
);

export const hoOh: Pokemon = parsePokemon(hoOhFields);

export const pichuFields: PokemonFieldsFragment = {
  id: "POKcl2hhxmly0iw522xfdqsbfb2g",
  attack: 40,
  defense: 15,
  hp: 20,
  isDefault: true,
  slug: "pichu",
  specialAttack: 35,
  specialDefense: 35,
  speed: 60,
  sprites: {
    frontDefault: {
      path: "pokemon/172.png",
    },
  },
  abilities: {
    edges: [
      {
        isHidden: false,
        slot: 1,
        node: {
          id: "ABIcl2hhlndr000a22xfh70908vn",
          effect:
            "Has a 30% chance of paralyzing attacking Pokémon on contact.",
          name: "Static",
          slug: "static",
        },
      },
      {
        isHidden: true,
        slot: 3,
        node: {
          id: "ABIcl2hhlola000w22xfht5g6of2",
          effect:
            "Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
          name: "Lightning Rod",
          slug: "lightning-rod",
        },
      },
    ],
  },
  forms: {
    edges: [
      {
        node: {
          id: "PKFcl2hhxmpa0ixo22xf2bqk9yf8",
          formName: null,
          isBattleOnly: false,
          isDefault: true,
          name: "Pichu",
          slug: "pichu",
        },
      },
      {
        node: {
          id: "PKFcl2hhxmqo0ixq22xfeir219au",
          formName: "Spiky-eared",
          isBattleOnly: false,
          isDefault: false,
          name: "Spiky-eared Pichu",
          slug: "pichu-spiky-eared",
        },
      },
    ],
  },
  species: {
    id: "PKScl2hhxmlt0iw222xf2jsj81u1",
    color: Color.Yellow,
    description:
      "Despite its small size, it can zap even adult\nhumans. However, if it does so, it also\nsurprises itself.\n\nThe electric sacs in its cheeks are small. If even a\nlittle electricity leaks, it becomes shocked.",
    genus: "Tiny Mouse Pokémon",
    habitat: Habitat.Forest,
    isBaby: true,
    isLegendary: false,
    isMythical: false,
    name: "Pichu",
    pokedexId: 172,
    shape: Shape.Quadruped,
    slug: "pichu",
  },
  types: {
    edges: [
      {
        slot: 1,
        node: {
          id: "TYPcl2hhnjm101gv22xf61mxhpiu",
          name: "Electric",
          slug: "electric",
        },
      },
    ],
  },
};

export const pichuSpecies: PokemonSpecies = parsePokemonSpecies(
  pichuFields.species
);

export const pichuForm: PokemonForm = parsePokemonForm(
  pichuFields.forms.edges?.[0].node
);

export const pichu: Pokemon = parsePokemon(pichuFields);
