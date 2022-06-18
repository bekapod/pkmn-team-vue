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
      "Obviously prefers\nhot places. When\nit rains, steam\fis said to spout\nfrom the tip of\nits tail.\n\nObviously prefers\nhot places. When\nit rains, steam\fis said to spout\nfrom the tip of\nits tail.\n\nThe flame at the\ntip of its tail\nmakes a sound as\fit burns. You can\nonly hear it in\nquiet places.\n\nThe flame on its\ntail shows the\nstrength of its\flife force. If it\nis weak, the flame\nalso burns weakly.\n\nThe flame on its\ntail indicates\nCHARMANDER's life\fforce. If it is\nhealthy, the flame\nburns brightly.\n\nIf it's healthy,\nthe flame on the\ntip of its tail\fwill burn vigor­\nously, even if it\ngets a bit wet.\n\nThe flame that burns at the tip of its\ntail is an indication of its emotions.\nThe flame wavers when CHARMANDER is\fenjoying itself. If the POKéMON becomes\nenraged, the flame burns fiercely.\n\nThe flame that burns at the tip of its\ntail is an indication of its emotions.\nThe flame wavers when CHARMANDER is\fenjoying itself. If the POKéMON becomes\nenraged, the flame burns fiercely.\n\nThe flame that burns at the tip of its\ntail is an indication of its emotions.\nThe flame wavers when CHARMANDER is\nhappy, and blazes when it is enraged.\n\nFrom the time it is born, a flame burns\nat the tip of its tail. Its life would end\nif the flame were to go out.\n\nIt has a preference for hot things.\nWhen it rains, steam is said to spout from\nthe tip of its tail.\n\nThe fire on the tip of its tail is a\nmeasure of its life. If healthy,\nits tail burns intensely.\n\nThe fire on the tip of its tail is a\nmeasure of its life. If healthy,\nits tail burns intensely.\n\nThe fire on the tip of its tail is a\nmeasure of its life. If healthy,\nits tail burns intensely.\n\nThe flame on its tail shows the\nstrength of its life force. If it is weak,\nthe flame also burns weakly.\n\nThe flame on its tail indicates\nCHARMANDER’s life force. If it is\nhealthy, the flame burns brightly.\n\nThe fire on the tip of its tail is a\nmeasure of its life. If healthy,\nits tail burns intensely.\n\nThe fire on the tip of its tail is a\nmeasure of its life. If healthy,\nits tail burns intensely.\n\nThe fire on the tip of its tail is a\nmeasure of its life. If healthy,\nits tail burns intensely.\n\nThe fire on the tip of its tail is a\nmeasure of its life. If healthy,\nits tail burns intensely.\n\nThe flame on its tail indicates Charmander’s life\nforce. If it is healthy, the flame burns brightly.\n\nFrom the time it is born, a flame burns at the tip of\nits tail. Its life would end if the flame were to\ngo out.\n\nThe flame that burns at the tip of its tail is an indication\nof its emotions. The flame wavers when Charmander\nis enjoying itself. If the Pokémon becomes enraged,\nthe flame burns fiercely.\n\nThe flame that burns at the tip of its tail is an indication\nof its emotions. The flame wavers when Charmander\nis enjoying itself. If the Pokémon becomes enraged,\nthe flame burns fiercely.\n\nThe flame at the tip of its tail makes a sound as\nit burns. You can only hear it in quiet places.\n\nThe flame at the tip of its tail makes a sound as\nit burns. You can only hear it in quiet places.\n\nIt has a preference for hot things. When it rains,\nsteam is said to spout from the tip of its tail.\n\nFrom the time it is born, a flame burns at the tip\nof its tail. Its life would end if the flame were to\ngo out.",
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
      "When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.\n\nWhen several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.\n\nIt keeps its tail\nraised to monitor\nits surroundings.\fIf you yank its\ntail, it will try\nto bite you.\n\nThis intelligent\nPOKéMON roasts\nhard BERRIES with\felectricity to\nmake them tender\nenough to eat.\n\nIt raises its tail\nto check its sur­\nroundings. The\ftail is sometimes\nstruck by light­\nning in this pose.\n\nWhen it is anger­\ned, it immediately\ndischarges the\fenergy stored in\nthe pouches in its\ncheeks.\n\nWhenever PIKACHU comes across\nsomething new, it blasts it with a jolt\nof electricity.\fIf you come across a blackened berry,\nit’s evidence that this POKéMON\nmistook the intensity of its charge.\n\nThis POKéMON has electricity-storing\npouches on its cheeks. These appear to\nbecome electrically charged during the\fnight while PIKACHU sleeps.\nIt occasionally discharges electricity\nwhen it is dozy after waking up.\n\nIt stores electricity in the electric sacs\non its cheeks. When it releases pent-up\nenergy in a burst, the electric power is\nequal to a lightning bolt.\n\nIt has small electric sacs on both its\ncheeks. If threatened, it looses electric\ncharges from the sacs.\n\nWhen several of these POKéMON gather,\ntheir electricity can build and cause\nlightning storms.\n\nIt lives in forests with others.\nIt stores electricity in the\npouches on its cheeks.\n\nIf it looses crackling power from\nthe electric pouches on its\ncheeks, it is being wary.\n\nIt occasionally uses an electric\nshock to recharge a fellow PIKACHU\nthat is in a weakened state.\n\nThis intelligent Pokémon roasts\nhard berries with electricity to\nmake them tender enough to eat.\n\nIt raises its tail to check its\nsurroundings. The tail is sometimes\nstruck by lightning in this pose.\n\nIt occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.\n\nIt occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.\n\nIt occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.\n\nIt occasionally uses an electric\nshock to recharge a fellow Pikachu\nthat is in a weakened state.\n\nIt raises its tail to check its surroundings.\nThe tail is sometimes struck by lightning\nin this pose.\n\nIt has small electric sacs on both its cheeks.\nIf threatened, it looses electric charges from\nthe sacs.\n\nWhenever Pikachu comes across something new,\nit blasts it with a jolt of electricity. If you come across a\nblackened berry, it’s evidence that this Pokémon mistook the\nintensity of its charge.\n\nThis Pokémon has electricity-storing pouches on its cheeks.\nThese appear to become electrically charged during the night\nwhile Pikachu sleeps. It occasionally discharges electricity\nwhen it is dozy after waking up.\n\nA plan was recently announced to gather\nmany Pikachu and make an electric power plant.\n\nIt’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.\n\nIts nature is to store up electricity. Forests\nwhere nests of Pikachu live are dangerous,\nsince the trees are so often struck by lightning.\n\nWhile sleeping, it generates electricity in the\nsacs in its cheeks. If it’s not getting enough\nsleep, it will be able to use only weak electricity.\n\nThis forest-dwelling Pokémon stores electricity\nin its cheeks, so you’ll feel a tingly shock\nif you touch it.\n\nThis forest-dwelling Pokémon stores electricity\nin its cheeks, so you’ll feel a tingly shock\nif you touch it.\n\nPikachu that can generate powerful electricity\nhave cheek sacs that are extra soft and\nsuper stretchy.\n\nWhen Pikachu meet, they’ll touch their tails\ntogether and exchange electricity through them\nas a form of greeting.",
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
      "Because of its\nability to slip\nthrough block\fwalls, it is said\nto be from an­\nother dimension.\n\nBecause of its\nability to slip\nthrough block\fwalls, it is said\nto be from an­\nother dimension.\n\nBy licking, it\nsaps the victim's\nlife. It causes\fshaking that won't\nstop until the\nvictim's demise.\n\nIn total darkness,\nwhere nothing is\nvisible, HAUNTER\flurks, silently\nstalking its next\nvictim.\n\nIts tongue is made\nof gas. If licked,\nits victim starts\fshaking constantly\nuntil death even­\ntually comes.\n\nIt hides in the\ndark, planning to\ntake the life of\fthe next living\nthing that wanders\nclose by.\n\nHAUNTER is a dangerous POKéMON.\nIf one beckons you while floating in\ndarkness, you must never approach it.\fThis POKéMON will try to lick you with its\ntongue and steal your life away.\n\nHAUNTER is a dangerous POKéMON.\nIf one beckons you while floating in\ndarkness, you must never approach it.\fThis POKéMON will try to lick you with its\ntongue and steal your life away.\n\nIf a HAUNTER beckons you while it is\nfloating in darkness, don’t approach it.\nThis POKéMON will try to lick you with its\ntongue and steal your life away.\n\nIf you get the feeling of being watched\nin darkness when nobody is around,\nHAUNTER is there.\n\nBecause of its ability to slip through\nblock walls, it is said to be from another\ndimension.\n\nIt can slip through any obstacle.\nIt lurks inside walls to keep an\neye on its foes.\n\nIt licks with its gaseous tongue\nto steal the victim’s life force.\nIt lurks in darkness for prey.\n\nIt likes to lurk in the dark and tap\nshoulders with a gaseous hand. Its\ntouch causes endless shuddering.\n\nIn total darkness, where nothing is\nvisible, HAUNTER lurks, silently\nstalking its next victim.\n\nIts tongue is made of gas. If licked,\nits victim starts shaking constantly\nuntil death eventually comes.\n\nIt likes to lurk in the dark and tap\nshoulders with a gaseous hand. Its\ntouch causes endless shuddering.\n\nIt likes to lurk in the dark and tap\nshoulders with a gaseous hand. Its\ntouch causes endless shuddering.\n\nIt likes to lurk in the dark and tap\nshoulders with a gaseous hand. Its\ntouch causes endless shuddering.\n\nIt likes to lurk in the dark and tap\nshoulders with a gaseous hand. Its\ntouch causes endless shuddering.\n\nIf you get the feeling of being watched in darkness\nwhen nobody is around, Haunter is there.\n\nIt licks with its gaseous tongue to steal the victim’s\nlife force. It lurks in darkness for prey.\n\nHaunter is a dangerous Pokémon. If one beckons you while\nfloating in darkness, you must never approach it. This Pokémon\nwill try to lick you with its tongue and steal your life away.\n\nHaunter is a dangerous Pokémon. If one beckons you while\nfloating in darkness, you must never approach it. This Pokémon\nwill try to lick you with its tongue and steal your life away.\n\nIt strikes at humans from total darkness.\nThose licked by its cold tongue grow weaker\nwith each passing day until they die.\n\nIt fears the light and revels in the dark. It may\nbe on the verge of extinction in cities that stay\nbrightly lit at night.\n\nOn moonless nights, Haunter searches for\nsomeone to curse, so it’s best not to go out\nwalking around.\n\nIt’s dangerous to go outside alone on nights\nwhen you’re feeling sad. Haunter will catch you,\nand you won’t be able to go back home.\n\nBy licking, it saps the victim’s life. It causes\nshaking that won’t stop until the victim’s demise.\n\nBy licking, it saps the victim’s life. It causes\nshaking that won’t stop until the victim’s demise.\n\nIts tongue is made of gas. If licked, its victim\nstarts shaking constantly until death\neventually comes.\n\nIf you get the feeling of being watched in darkness\nwhen nobody is around, Haunter is there.",
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
