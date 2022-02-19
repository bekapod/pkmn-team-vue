import { DocumentNode } from "graphql";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Ability = Node & {
  __typename?: "Ability";
  effect?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  pokemon: PokemonWithAbilityConnection;
  slug: Scalars["String"];
};

export type AbilityConnection = {
  __typename?: "AbilityConnection";
  edges?: Maybe<Array<Maybe<AbilityEdge>>>;
  pageInfo: PageInfo;
};

export type AbilityEdge = {
  __typename?: "AbilityEdge";
  cursor: Scalars["String"];
  node?: Maybe<Ability>;
};

export enum Color {
  Black = "BLACK",
  Blue = "BLUE",
  Brown = "BROWN",
  Gray = "GRAY",
  Green = "GREEN",
  Pink = "PINK",
  Purple = "PURPLE",
  Red = "RED",
  White = "WHITE",
  Yellow = "YELLOW",
}

export type CreateOrUpdateTeamMemberInput = {
  id?: InputMaybe<Scalars["ID"]>;
  pokemonId?: InputMaybe<Scalars["ID"]>;
  slot?: InputMaybe<Scalars["Int"]>;
};

export type CreateOrUpdateTeamMemberMoveInput = {
  id?: InputMaybe<Scalars["ID"]>;
  pokemonMoveId?: InputMaybe<Scalars["ID"]>;
  slot?: InputMaybe<Scalars["Int"]>;
};

export type CreateTeamInput = {
  members?: InputMaybe<Array<CreateTeamMemberInput>>;
  name: Scalars["String"];
};

export type CreateTeamMemberInput = {
  pokemonId: Scalars["ID"];
  slot: Scalars["Int"];
};

export enum DamageClass {
  Physical = "PHYSICAL",
  Special = "SPECIAL",
  Status = "STATUS",
}

export type EggGroup = Node & {
  __typename?: "EggGroup";
  id: Scalars["ID"];
  name: Scalars["String"];
  slug: Scalars["String"];
};

export type EggGroupConnection = {
  __typename?: "EggGroupConnection";
  edges?: Maybe<Array<Maybe<EggGroupEdge>>>;
  pageInfo: PageInfo;
};

export type EggGroupEdge = {
  __typename?: "EggGroupEdge";
  cursor: Scalars["String"];
  node?: Maybe<EggGroup>;
};

export enum EvolutionTrigger {
  LevelUp = "LEVEL_UP",
  Other = "OTHER",
  Shed = "SHED",
  Trade = "TRADE",
  UseItem = "USE_ITEM",
}

export enum Gender {
  Any = "ANY",
  Female = "FEMALE",
  Male = "MALE",
}

export enum Habitat {
  Cave = "CAVE",
  Forest = "FOREST",
  Grassland = "GRASSLAND",
  Mountain = "MOUNTAIN",
  Rare = "RARE",
  RoughTerrain = "ROUGH_TERRAIN",
  Sea = "SEA",
  Urban = "URBAN",
  WatersEdge = "WATERS_EDGE",
}

export type Item = Node & {
  __typename?: "Item";
  attributes: Array<ItemAttribute>;
  category: ItemCategory;
  cost?: Maybe<Scalars["Int"]>;
  effect?: Maybe<Scalars["String"]>;
  flingEffect?: Maybe<Scalars["String"]>;
  flingPower?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  slug: Scalars["String"];
  sprite?: Maybe<Scalars["String"]>;
};

export enum ItemAttribute {
  Consumable = "CONSUMABLE",
  Countable = "COUNTABLE",
  Holdable = "HOLDABLE",
  HoldableActive = "HOLDABLE_ACTIVE",
  HoldablePassive = "HOLDABLE_PASSIVE",
  Underground = "UNDERGROUND",
  UsableInBattle = "USABLE_IN_BATTLE",
  UsableOverworld = "USABLE_OVERWORLD",
}

export enum ItemCategory {
  AllMachines = "ALL_MACHINES",
  AllMail = "ALL_MAIL",
  ApricornBalls = "APRICORN_BALLS",
  ApricornBox = "APRICORN_BOX",
  BadHeldItems = "BAD_HELD_ITEMS",
  BakingOnly = "BAKING_ONLY",
  Choice = "CHOICE",
  Collectibles = "COLLECTIBLES",
  DataCards = "DATA_CARDS",
  DexCompletion = "DEX_COMPLETION",
  EffortDrop = "EFFORT_DROP",
  EffortTraining = "EFFORT_TRAINING",
  EventItems = "EVENT_ITEMS",
  Evolution = "EVOLUTION",
  Flutes = "FLUTES",
  Gameplay = "GAMEPLAY",
  Healing = "HEALING",
  HeldItems = "HELD_ITEMS",
  InAPinch = "IN_A_PINCH",
  Jewels = "JEWELS",
  Loot = "LOOT",
  Medicine = "MEDICINE",
  MegaStones = "MEGA_STONES",
  Memories = "MEMORIES",
  MiracleShooter = "MIRACLE_SHOOTER",
  Mulch = "MULCH",
  Other = "OTHER",
  PickyHealing = "PICKY_HEALING",
  Plates = "PLATES",
  PlotAdvancement = "PLOT_ADVANCEMENT",
  PpRecovery = "PP_RECOVERY",
  Revival = "REVIVAL",
  Scarves = "SCARVES",
  SpecialBalls = "SPECIAL_BALLS",
  SpeciesSpecific = "SPECIES_SPECIFIC",
  Spelunking = "SPELUNKING",
  StandardBalls = "STANDARD_BALLS",
  StatusCures = "STATUS_CURES",
  StatBoosts = "STAT_BOOSTS",
  Training = "TRAINING",
  TypeEnhancement = "TYPE_ENHANCEMENT",
  TypeProtection = "TYPE_PROTECTION",
  Unused = "UNUSED",
  Vitamins = "VITAMINS",
  ZCrystals = "Z_CRYSTALS",
}

export type ItemConnection = {
  __typename?: "ItemConnection";
  edges?: Maybe<Array<Maybe<ItemEdge>>>;
  pageInfo: PageInfo;
};

export type ItemEdge = {
  __typename?: "ItemEdge";
  cursor: Scalars["String"];
  node?: Maybe<Item>;
};

export type Move = Node & {
  __typename?: "Move";
  accuracy?: Maybe<Scalars["Int"]>;
  damageClass: DamageClass;
  effect?: Maybe<Scalars["String"]>;
  effectChance?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  pokemon: PokemonWithMoveConnection;
  power?: Maybe<Scalars["Int"]>;
  pp?: Maybe<Scalars["Int"]>;
  slug: Scalars["String"];
  target: MoveTarget;
  type: Type;
};

export type MoveConnection = {
  __typename?: "MoveConnection";
  edges?: Maybe<Array<Maybe<MoveEdge>>>;
  pageInfo: PageInfo;
};

export type MoveEdge = {
  __typename?: "MoveEdge";
  cursor: Scalars["String"];
  node?: Maybe<Move>;
};

export enum MoveLearnMethod {
  ColosseumPurification = "COLOSSEUM_PURIFICATION",
  Egg = "EGG",
  FormChange = "FORM_CHANGE",
  LevelUp = "LEVEL_UP",
  LightBallEgg = "LIGHT_BALL_EGG",
  Machine = "MACHINE",
  Record = "RECORD",
  StadiumSurfingPikachu = "STADIUM_SURFING_PIKACHU",
  Transfer = "TRANSFER",
  Tutor = "TUTOR",
  XdPurification = "XD_PURIFICATION",
  XdShadow = "XD_SHADOW",
}

export enum MoveTarget {
  Ally = "ALLY",
  AllAllies = "ALL_ALLIES",
  AllOpponents = "ALL_OPPONENTS",
  AllOtherPokemon = "ALL_OTHER_POKEMON",
  AllPokemon = "ALL_POKEMON",
  EntireField = "ENTIRE_FIELD",
  OpponentsField = "OPPONENTS_FIELD",
  RandomOpponent = "RANDOM_OPPONENT",
  SelectedPokemon = "SELECTED_POKEMON",
  SelectedPokemonMeFirst = "SELECTED_POKEMON_ME_FIRST",
  SpecificMove = "SPECIFIC_MOVE",
  User = "USER",
  UsersField = "USERS_FIELD",
  UserAndAllies = "USER_AND_ALLIES",
  UserOrAlly = "USER_OR_ALLY",
}

export type Mutation = {
  __typename?: "Mutation";
  createTeam: Team;
  deleteTeamMemberMoves: Array<Move>;
  deleteTeamMembers: Array<TeamMember>;
  deleteTeams: Array<Team>;
  updateTeam: Team;
  updateTeamMember: TeamMember;
};

export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};

export type MutationDeleteTeamMemberMovesArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationDeleteTeamMembersArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationDeleteTeamsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};

export type MutationUpdateTeamMemberArgs = {
  input: UpdateTeamMemberInput;
};

export type Node = {
  id: Scalars["ID"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

export type Pokemon = Node & {
  __typename?: "Pokemon";
  abilities: PokemonAbilityConnection;
  attack: Scalars["Int"];
  color: Color;
  defense: Scalars["Int"];
  description?: Maybe<Scalars["String"]>;
  eggGroups: EggGroupConnection;
  evolvesFrom: PokemonEvolutionConnection;
  evolvesTo: PokemonEvolutionConnection;
  genus: Scalars["String"];
  habitat?: Maybe<Habitat>;
  height: Scalars["Int"];
  hp: Scalars["Int"];
  id: Scalars["ID"];
  isBaby: Scalars["Boolean"];
  isDefaultVariant: Scalars["Boolean"];
  isLegendary: Scalars["Boolean"];
  isMythical: Scalars["Boolean"];
  moves: PokemonMoveConnection;
  name: Scalars["String"];
  pokedexId: Scalars["Int"];
  shape: Shape;
  slug: Scalars["String"];
  specialAttack: Scalars["Int"];
  specialDefense: Scalars["Int"];
  speed: Scalars["Int"];
  sprite: Scalars["String"];
  types: PokemonTypeConnection;
  weight: Scalars["Int"];
};

export type PokemonAbilityConnection = {
  __typename?: "PokemonAbilityConnection";
  edges?: Maybe<Array<Maybe<PokemonAbilityEdge>>>;
  pageInfo: PageInfo;
};

export type PokemonAbilityEdge = {
  __typename?: "PokemonAbilityEdge";
  cursor: Scalars["String"];
  isHidden?: Maybe<Scalars["Boolean"]>;
  node?: Maybe<Ability>;
  slot?: Maybe<Scalars["Int"]>;
};

export type PokemonConnection = {
  __typename?: "PokemonConnection";
  edges?: Maybe<Array<Maybe<PokemonEdge>>>;
  pageInfo: PageInfo;
};

export type PokemonEdge = {
  __typename?: "PokemonEdge";
  cursor: Scalars["String"];
  node?: Maybe<Pokemon>;
};

export type PokemonEvolution = Node & {
  __typename?: "PokemonEvolution";
  criticalHits?: Maybe<Scalars["Int"]>;
  gender: Gender;
  heldItem?: Maybe<Item>;
  id: Scalars["ID"];
  item?: Maybe<Item>;
  knownMove?: Maybe<Move>;
  knownMoveType?: Maybe<Type>;
  minAffection?: Maybe<Scalars["Int"]>;
  minBeauty?: Maybe<Scalars["Int"]>;
  minHappiness?: Maybe<Scalars["Int"]>;
  minLevel?: Maybe<Scalars["Int"]>;
  needsOverworldRain: Scalars["Boolean"];
  partyPokemon?: Maybe<Pokemon>;
  partyPokemonType?: Maybe<Type>;
  pokemon: Pokemon;
  relativePhysicalStats?: Maybe<Scalars["Int"]>;
  spin: Scalars["Boolean"];
  takeDamage?: Maybe<Scalars["Int"]>;
  timeOfDay: TimeOfDay;
  tradeWithPokemon?: Maybe<Pokemon>;
  trigger: EvolutionTrigger;
  turnUpsideDown: Scalars["Boolean"];
};

export type PokemonEvolutionConnection = {
  __typename?: "PokemonEvolutionConnection";
  edges?: Maybe<Array<Maybe<PokemonEvolutionEdge>>>;
  pageInfo: PageInfo;
};

export type PokemonEvolutionEdge = {
  __typename?: "PokemonEvolutionEdge";
  cursor: Scalars["String"];
  node?: Maybe<PokemonEvolution>;
};

export type PokemonMoveConnection = {
  __typename?: "PokemonMoveConnection";
  edges?: Maybe<Array<Maybe<PokemonMoveEdge>>>;
  pageInfo: PageInfo;
};

export type PokemonMoveEdge = {
  __typename?: "PokemonMoveEdge";
  cursor: Scalars["String"];
  learnMethod?: Maybe<MoveLearnMethod>;
  levelLearnedAt?: Maybe<Scalars["Int"]>;
  node?: Maybe<Move>;
};

export type PokemonTypeConnection = {
  __typename?: "PokemonTypeConnection";
  edges?: Maybe<Array<Maybe<PokemonTypeEdge>>>;
  pageInfo: PageInfo;
};

export type PokemonTypeEdge = {
  __typename?: "PokemonTypeEdge";
  cursor: Scalars["String"];
  node?: Maybe<Type>;
  slot?: Maybe<Scalars["Int"]>;
};

export type PokemonWithAbilityConnection = {
  __typename?: "PokemonWithAbilityConnection";
  edges?: Maybe<Array<Maybe<PokemonWithAbilityEdge>>>;
  pageInfo: PageInfo;
};

export type PokemonWithAbilityEdge = {
  __typename?: "PokemonWithAbilityEdge";
  cursor: Scalars["String"];
  isHidden?: Maybe<Scalars["Boolean"]>;
  node?: Maybe<Pokemon>;
  slot?: Maybe<Scalars["Int"]>;
};

export type PokemonWithMoveConnection = {
  __typename?: "PokemonWithMoveConnection";
  edges?: Maybe<Array<Maybe<PokemonWithMoveEdge>>>;
  pageInfo: PageInfo;
};

export type PokemonWithMoveEdge = {
  __typename?: "PokemonWithMoveEdge";
  cursor: Scalars["String"];
  learnMethod?: Maybe<MoveLearnMethod>;
  levelLearnedAt?: Maybe<Scalars["Int"]>;
  node?: Maybe<Pokemon>;
};

export type PokemonWithTypeConnection = {
  __typename?: "PokemonWithTypeConnection";
  edges?: Maybe<Array<Maybe<PokemonWithTypeEdge>>>;
  pageInfo: PageInfo;
};

export type PokemonWithTypeEdge = {
  __typename?: "PokemonWithTypeEdge";
  cursor: Scalars["String"];
  node?: Maybe<Pokemon>;
  slot?: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  abilities: AbilityConnection;
  abilityById?: Maybe<Ability>;
  itemById?: Maybe<Item>;
  items: ItemConnection;
  moveById?: Maybe<Move>;
  moves: MoveConnection;
  pokemon: PokemonConnection;
  pokemonById?: Maybe<Pokemon>;
  teamById?: Maybe<Team>;
  teams: TeamConnection;
  typeById?: Maybe<Type>;
  types: TypeConnection;
};

export type QueryAbilityByIdArgs = {
  id: Scalars["ID"];
};

export type QueryItemByIdArgs = {
  id: Scalars["ID"];
};

export type QueryMoveByIdArgs = {
  id: Scalars["ID"];
};

export type QueryPokemonByIdArgs = {
  id: Scalars["ID"];
};

export type QueryTeamByIdArgs = {
  id: Scalars["ID"];
};

export type QueryTypeByIdArgs = {
  id: Scalars["ID"];
};

export enum Shape {
  Armor = "ARMOR",
  Arms = "ARMS",
  Ball = "BALL",
  Blob = "BLOB",
  BugWings = "BUG_WINGS",
  Fish = "FISH",
  Heads = "HEADS",
  Humanoid = "HUMANOID",
  Legs = "LEGS",
  Quadruped = "QUADRUPED",
  Squiggle = "SQUIGGLE",
  Tentacles = "TENTACLES",
  Upright = "UPRIGHT",
  Wings = "WINGS",
}

export type Team = Node & {
  __typename?: "Team";
  createdAt: Scalars["Time"];
  id: Scalars["ID"];
  members: TeamMemberConnection;
  name: Scalars["String"];
  updatedAt: Scalars["Time"];
};

export type TeamConnection = {
  __typename?: "TeamConnection";
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  pageInfo: PageInfo;
};

export type TeamEdge = {
  __typename?: "TeamEdge";
  cursor: Scalars["String"];
  node?: Maybe<Team>;
};

export type TeamMember = Node & {
  __typename?: "TeamMember";
  id: Scalars["ID"];
  moves: TeamMemberMoveConnection;
  pokemon: Pokemon;
};

export type TeamMemberConnection = {
  __typename?: "TeamMemberConnection";
  edges?: Maybe<Array<Maybe<TeamMemberEdge>>>;
  pageInfo: PageInfo;
};

export type TeamMemberEdge = {
  __typename?: "TeamMemberEdge";
  cursor: Scalars["String"];
  node?: Maybe<TeamMember>;
  slot?: Maybe<Scalars["Int"]>;
};

export type TeamMemberMoveConnection = {
  __typename?: "TeamMemberMoveConnection";
  edges?: Maybe<Array<Maybe<TeamMemberMoveEdge>>>;
  pageInfo: PageInfo;
};

export type TeamMemberMoveEdge = {
  __typename?: "TeamMemberMoveEdge";
  cursor: Scalars["String"];
  learnMethod?: Maybe<MoveLearnMethod>;
  levelLearnedAt?: Maybe<Scalars["Int"]>;
  node?: Maybe<Move>;
  slot?: Maybe<Scalars["Int"]>;
};

export enum TimeOfDay {
  Any = "ANY",
  Day = "DAY",
  Night = "NIGHT",
}

export type Type = Node & {
  __typename?: "Type";
  doubleDamageFrom: TypeConnection;
  doubleDamageTo: TypeConnection;
  halfDamageFrom: TypeConnection;
  halfDamageTo: TypeConnection;
  id: Scalars["ID"];
  moves: MoveConnection;
  name: Scalars["String"];
  noDamageFrom: TypeConnection;
  noDamageTo: TypeConnection;
  pokemon: PokemonWithTypeConnection;
  slug: Scalars["String"];
};

export type TypeConnection = {
  __typename?: "TypeConnection";
  edges?: Maybe<Array<Maybe<TypeEdge>>>;
  pageInfo: PageInfo;
};

export type TypeEdge = {
  __typename?: "TypeEdge";
  cursor: Scalars["String"];
  node?: Maybe<Type>;
};

export type UpdateTeamInput = {
  id: Scalars["ID"];
  members?: InputMaybe<Array<CreateOrUpdateTeamMemberInput>>;
  name?: InputMaybe<Scalars["String"]>;
};

export type UpdateTeamMemberInput = {
  id: Scalars["ID"];
  moves?: InputMaybe<Array<CreateOrUpdateTeamMemberMoveInput>>;
  pokemonId?: InputMaybe<Scalars["ID"]>;
  slot?: InputMaybe<Scalars["Int"]>;
};

export type AbilityFieldsFragment = {
  __typename?: "Ability";
  id: string;
  slug: string;
  name: string;
  effect?: string | null;
};

export type ItemFieldsFragment = {
  __typename?: "Item";
  id: string;
  slug: string;
  name: string;
  cost?: number | null;
  flingPower?: number | null;
  flingEffect?: string | null;
  effect?: string | null;
  sprite?: string | null;
  category: ItemCategory;
  attributes: Array<ItemAttribute>;
};

export type MoveFieldsFragment = {
  __typename?: "Move";
  id: string;
  slug: string;
  name: string;
  accuracy?: number | null;
  pp?: number | null;
  power?: number | null;
  damageClass: DamageClass;
  effect?: string | null;
  effectChance?: number | null;
  target: MoveTarget;
  type: {
    __typename?: "Type";
    id: string;
    name: string;
    slug: string;
    noDamageTo: {
      __typename?: "TypeConnection";
      edges?: Array<{
        __typename?: "TypeEdge";
        node?: {
          __typename?: "Type";
          id: string;
          name: string;
          slug: string;
        } | null;
      } | null> | null;
    };
    halfDamageTo: {
      __typename?: "TypeConnection";
      edges?: Array<{
        __typename?: "TypeEdge";
        node?: {
          __typename?: "Type";
          id: string;
          name: string;
          slug: string;
        } | null;
      } | null> | null;
    };
    doubleDamageTo: {
      __typename?: "TypeConnection";
      edges?: Array<{
        __typename?: "TypeEdge";
        node?: {
          __typename?: "Type";
          id: string;
          name: string;
          slug: string;
        } | null;
      } | null> | null;
    };
  };
};

export type PokemonMoveFieldsFragment = {
  __typename?: "PokemonMoveEdge";
  learnMethod?: MoveLearnMethod | null;
  levelLearnedAt?: number | null;
  id: string;
  node?: {
    __typename?: "Move";
    id: string;
    slug: string;
    name: string;
    accuracy?: number | null;
    pp?: number | null;
    power?: number | null;
    damageClass: DamageClass;
    effect?: string | null;
    effectChance?: number | null;
    target: MoveTarget;
    type: {
      __typename?: "Type";
      id: string;
      name: string;
      slug: string;
      noDamageTo: {
        __typename?: "TypeConnection";
        edges?: Array<{
          __typename?: "TypeEdge";
          node?: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
          } | null;
        } | null> | null;
      };
      halfDamageTo: {
        __typename?: "TypeConnection";
        edges?: Array<{
          __typename?: "TypeEdge";
          node?: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
          } | null;
        } | null> | null;
      };
      doubleDamageTo: {
        __typename?: "TypeConnection";
        edges?: Array<{
          __typename?: "TypeEdge";
          node?: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
          } | null;
        } | null> | null;
      };
    };
  } | null;
};

export type TeamMemberMoveFieldsFragment = {
  __typename?: "TeamMemberMoveEdge";
  learnMethod?: MoveLearnMethod | null;
  levelLearnedAt?: number | null;
  slot?: number | null;
  id: string;
  node?: {
    __typename?: "Move";
    id: string;
    slug: string;
    name: string;
    accuracy?: number | null;
    pp?: number | null;
    power?: number | null;
    damageClass: DamageClass;
    effect?: string | null;
    effectChance?: number | null;
    target: MoveTarget;
    type: {
      __typename?: "Type";
      id: string;
      name: string;
      slug: string;
      noDamageTo: {
        __typename?: "TypeConnection";
        edges?: Array<{
          __typename?: "TypeEdge";
          node?: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
          } | null;
        } | null> | null;
      };
      halfDamageTo: {
        __typename?: "TypeConnection";
        edges?: Array<{
          __typename?: "TypeEdge";
          node?: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
          } | null;
        } | null> | null;
      };
      doubleDamageTo: {
        __typename?: "TypeConnection";
        edges?: Array<{
          __typename?: "TypeEdge";
          node?: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
          } | null;
        } | null> | null;
      };
    };
  } | null;
};

export type PokemonFieldsFragment = {
  __typename?: "Pokemon";
  id: string;
  name: string;
  slug: string;
  pokedexId: number;
  sprite: string;
  color: Color;
  shape: Shape;
  habitat?: Habitat | null;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  height: number;
  weight: number;
  isDefaultVariant: boolean;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  description?: string | null;
  abilities: {
    __typename?: "PokemonAbilityConnection";
    edges?: Array<{
      __typename?: "PokemonAbilityEdge";
      slot?: number | null;
      isHidden?: boolean | null;
      node?: {
        __typename?: "Ability";
        id: string;
        slug: string;
        name: string;
        effect?: string | null;
      } | null;
    } | null> | null;
  };
  eggGroups: {
    __typename?: "EggGroupConnection";
    edges?: Array<{
      __typename?: "EggGroupEdge";
      node?: {
        __typename?: "EggGroup";
        id: string;
        name: string;
        slug: string;
      } | null;
    } | null> | null;
  };
  evolvesTo: {
    __typename?: "PokemonEvolutionConnection";
    edges?: Array<{
      __typename?: "PokemonEvolutionEdge";
      node?: {
        __typename?: "PokemonEvolution";
        id: string;
        trigger: EvolutionTrigger;
        gender: Gender;
        minLevel?: number | null;
        minHappiness?: number | null;
        minBeauty?: number | null;
        minAffection?: number | null;
        needsOverworldRain: boolean;
        relativePhysicalStats?: number | null;
        timeOfDay: TimeOfDay;
        turnUpsideDown: boolean;
        spin: boolean;
        takeDamage?: number | null;
        criticalHits?: number | null;
        pokemon: { __typename?: "Pokemon"; id: string; name: string };
        item?: {
          __typename?: "Item";
          id: string;
          slug: string;
          name: string;
          cost?: number | null;
          flingPower?: number | null;
          flingEffect?: string | null;
          effect?: string | null;
          sprite?: string | null;
          category: ItemCategory;
          attributes: Array<ItemAttribute>;
        } | null;
        heldItem?: {
          __typename?: "Item";
          id: string;
          slug: string;
          name: string;
          cost?: number | null;
          flingPower?: number | null;
          flingEffect?: string | null;
          effect?: string | null;
          sprite?: string | null;
          category: ItemCategory;
          attributes: Array<ItemAttribute>;
        } | null;
        knownMove?: {
          __typename?: "Move";
          id: string;
          name: string;
          type: { __typename?: "Type"; id: string; name: string };
        } | null;
        knownMoveType?: { __typename?: "Type"; name: string } | null;
        partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
        partyPokemonType?: { __typename?: "Type"; name: string } | null;
        tradeWithPokemon?: { __typename?: "Pokemon"; name: string } | null;
      } | null;
    } | null> | null;
  };
  evolvesFrom: {
    __typename?: "PokemonEvolutionConnection";
    edges?: Array<{
      __typename?: "PokemonEvolutionEdge";
      node?: {
        __typename?: "PokemonEvolution";
        id: string;
        trigger: EvolutionTrigger;
        gender: Gender;
        minLevel?: number | null;
        minHappiness?: number | null;
        minBeauty?: number | null;
        minAffection?: number | null;
        needsOverworldRain: boolean;
        relativePhysicalStats?: number | null;
        timeOfDay: TimeOfDay;
        turnUpsideDown: boolean;
        spin: boolean;
        takeDamage?: number | null;
        criticalHits?: number | null;
        pokemon: { __typename?: "Pokemon"; id: string; name: string };
        item?: {
          __typename?: "Item";
          id: string;
          slug: string;
          name: string;
          cost?: number | null;
          flingPower?: number | null;
          flingEffect?: string | null;
          effect?: string | null;
          sprite?: string | null;
          category: ItemCategory;
          attributes: Array<ItemAttribute>;
        } | null;
        heldItem?: {
          __typename?: "Item";
          id: string;
          slug: string;
          name: string;
          cost?: number | null;
          flingPower?: number | null;
          flingEffect?: string | null;
          effect?: string | null;
          sprite?: string | null;
          category: ItemCategory;
          attributes: Array<ItemAttribute>;
        } | null;
        knownMove?: {
          __typename?: "Move";
          id: string;
          name: string;
          type: { __typename?: "Type"; id: string; name: string };
        } | null;
        knownMoveType?: { __typename?: "Type"; name: string } | null;
        partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
        partyPokemonType?: { __typename?: "Type"; name: string } | null;
        tradeWithPokemon?: { __typename?: "Pokemon"; name: string } | null;
      } | null;
    } | null> | null;
  };
  types: {
    __typename?: "PokemonTypeConnection";
    edges?: Array<{
      __typename?: "PokemonTypeEdge";
      slot?: number | null;
      node?: {
        __typename?: "Type";
        id: string;
        name: string;
        slug: string;
        noDamageFrom: {
          __typename?: "TypeConnection";
          edges?: Array<{
            __typename?: "TypeEdge";
            node?: {
              __typename?: "Type";
              id: string;
              name: string;
              slug: string;
            } | null;
          } | null> | null;
        };
        halfDamageFrom: {
          __typename?: "TypeConnection";
          edges?: Array<{
            __typename?: "TypeEdge";
            node?: {
              __typename?: "Type";
              id: string;
              name: string;
              slug: string;
            } | null;
          } | null> | null;
        };
        doubleDamageFrom: {
          __typename?: "TypeConnection";
          edges?: Array<{
            __typename?: "TypeEdge";
            node?: {
              __typename?: "Type";
              id: string;
              name: string;
              slug: string;
            } | null;
          } | null> | null;
        };
      } | null;
    } | null> | null;
  };
  moves: {
    __typename?: "PokemonMoveConnection";
    edges?: Array<{
      __typename?: "PokemonMoveEdge";
      learnMethod?: MoveLearnMethod | null;
      levelLearnedAt?: number | null;
      id: string;
      node?: {
        __typename?: "Move";
        id: string;
        slug: string;
        name: string;
        accuracy?: number | null;
        pp?: number | null;
        power?: number | null;
        damageClass: DamageClass;
        effect?: string | null;
        effectChance?: number | null;
        target: MoveTarget;
        type: {
          __typename?: "Type";
          id: string;
          name: string;
          slug: string;
          noDamageTo: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
          halfDamageTo: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
          doubleDamageTo: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
        };
      } | null;
    } | null> | null;
  };
};

export type PokemonEvolutionFieldsFragment = {
  __typename?: "PokemonEvolution";
  id: string;
  trigger: EvolutionTrigger;
  gender: Gender;
  minLevel?: number | null;
  minHappiness?: number | null;
  minBeauty?: number | null;
  minAffection?: number | null;
  needsOverworldRain: boolean;
  relativePhysicalStats?: number | null;
  timeOfDay: TimeOfDay;
  turnUpsideDown: boolean;
  spin: boolean;
  takeDamage?: number | null;
  criticalHits?: number | null;
  pokemon: { __typename?: "Pokemon"; id: string; name: string };
  item?: {
    __typename?: "Item";
    id: string;
    slug: string;
    name: string;
    cost?: number | null;
    flingPower?: number | null;
    flingEffect?: string | null;
    effect?: string | null;
    sprite?: string | null;
    category: ItemCategory;
    attributes: Array<ItemAttribute>;
  } | null;
  heldItem?: {
    __typename?: "Item";
    id: string;
    slug: string;
    name: string;
    cost?: number | null;
    flingPower?: number | null;
    flingEffect?: string | null;
    effect?: string | null;
    sprite?: string | null;
    category: ItemCategory;
    attributes: Array<ItemAttribute>;
  } | null;
  knownMove?: {
    __typename?: "Move";
    id: string;
    name: string;
    type: { __typename?: "Type"; id: string; name: string };
  } | null;
  knownMoveType?: { __typename?: "Type"; name: string } | null;
  partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
  partyPokemonType?: { __typename?: "Type"; name: string } | null;
  tradeWithPokemon?: { __typename?: "Pokemon"; name: string } | null;
};

export type TeamFieldsFragment = {
  __typename?: "Team";
  id: string;
  name: string;
  createdAt: any;
  members: {
    __typename?: "TeamMemberConnection";
    edges?: Array<{
      __typename?: "TeamMemberEdge";
      cursor: string;
      slot?: number | null;
      node?: {
        __typename?: "TeamMember";
        id: string;
        pokemon: {
          __typename?: "Pokemon";
          id: string;
          name: string;
          slug: string;
          pokedexId: number;
          sprite: string;
          color: Color;
          shape: Shape;
          habitat?: Habitat | null;
          hp: number;
          attack: number;
          defense: number;
          specialAttack: number;
          specialDefense: number;
          speed: number;
          height: number;
          weight: number;
          isDefaultVariant: boolean;
          isBaby: boolean;
          isLegendary: boolean;
          isMythical: boolean;
          description?: string | null;
          abilities: {
            __typename?: "PokemonAbilityConnection";
            edges?: Array<{
              __typename?: "PokemonAbilityEdge";
              slot?: number | null;
              isHidden?: boolean | null;
              node?: {
                __typename?: "Ability";
                id: string;
                slug: string;
                name: string;
                effect?: string | null;
              } | null;
            } | null> | null;
          };
          eggGroups: {
            __typename?: "EggGroupConnection";
            edges?: Array<{
              __typename?: "EggGroupEdge";
              node?: {
                __typename?: "EggGroup";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
          evolvesTo: {
            __typename?: "PokemonEvolutionConnection";
            edges?: Array<{
              __typename?: "PokemonEvolutionEdge";
              node?: {
                __typename?: "PokemonEvolution";
                id: string;
                trigger: EvolutionTrigger;
                gender: Gender;
                minLevel?: number | null;
                minHappiness?: number | null;
                minBeauty?: number | null;
                minAffection?: number | null;
                needsOverworldRain: boolean;
                relativePhysicalStats?: number | null;
                timeOfDay: TimeOfDay;
                turnUpsideDown: boolean;
                spin: boolean;
                takeDamage?: number | null;
                criticalHits?: number | null;
                pokemon: { __typename?: "Pokemon"; id: string; name: string };
                item?: {
                  __typename?: "Item";
                  id: string;
                  slug: string;
                  name: string;
                  cost?: number | null;
                  flingPower?: number | null;
                  flingEffect?: string | null;
                  effect?: string | null;
                  sprite?: string | null;
                  category: ItemCategory;
                  attributes: Array<ItemAttribute>;
                } | null;
                heldItem?: {
                  __typename?: "Item";
                  id: string;
                  slug: string;
                  name: string;
                  cost?: number | null;
                  flingPower?: number | null;
                  flingEffect?: string | null;
                  effect?: string | null;
                  sprite?: string | null;
                  category: ItemCategory;
                  attributes: Array<ItemAttribute>;
                } | null;
                knownMove?: {
                  __typename?: "Move";
                  id: string;
                  name: string;
                  type: { __typename?: "Type"; id: string; name: string };
                } | null;
                knownMoveType?: { __typename?: "Type"; name: string } | null;
                partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
                partyPokemonType?: { __typename?: "Type"; name: string } | null;
                tradeWithPokemon?: {
                  __typename?: "Pokemon";
                  name: string;
                } | null;
              } | null;
            } | null> | null;
          };
          evolvesFrom: {
            __typename?: "PokemonEvolutionConnection";
            edges?: Array<{
              __typename?: "PokemonEvolutionEdge";
              node?: {
                __typename?: "PokemonEvolution";
                id: string;
                trigger: EvolutionTrigger;
                gender: Gender;
                minLevel?: number | null;
                minHappiness?: number | null;
                minBeauty?: number | null;
                minAffection?: number | null;
                needsOverworldRain: boolean;
                relativePhysicalStats?: number | null;
                timeOfDay: TimeOfDay;
                turnUpsideDown: boolean;
                spin: boolean;
                takeDamage?: number | null;
                criticalHits?: number | null;
                pokemon: { __typename?: "Pokemon"; id: string; name: string };
                item?: {
                  __typename?: "Item";
                  id: string;
                  slug: string;
                  name: string;
                  cost?: number | null;
                  flingPower?: number | null;
                  flingEffect?: string | null;
                  effect?: string | null;
                  sprite?: string | null;
                  category: ItemCategory;
                  attributes: Array<ItemAttribute>;
                } | null;
                heldItem?: {
                  __typename?: "Item";
                  id: string;
                  slug: string;
                  name: string;
                  cost?: number | null;
                  flingPower?: number | null;
                  flingEffect?: string | null;
                  effect?: string | null;
                  sprite?: string | null;
                  category: ItemCategory;
                  attributes: Array<ItemAttribute>;
                } | null;
                knownMove?: {
                  __typename?: "Move";
                  id: string;
                  name: string;
                  type: { __typename?: "Type"; id: string; name: string };
                } | null;
                knownMoveType?: { __typename?: "Type"; name: string } | null;
                partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
                partyPokemonType?: { __typename?: "Type"; name: string } | null;
                tradeWithPokemon?: {
                  __typename?: "Pokemon";
                  name: string;
                } | null;
              } | null;
            } | null> | null;
          };
          types: {
            __typename?: "PokemonTypeConnection";
            edges?: Array<{
              __typename?: "PokemonTypeEdge";
              slot?: number | null;
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
                noDamageFrom: {
                  __typename?: "TypeConnection";
                  edges?: Array<{
                    __typename?: "TypeEdge";
                    node?: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                    } | null;
                  } | null> | null;
                };
                halfDamageFrom: {
                  __typename?: "TypeConnection";
                  edges?: Array<{
                    __typename?: "TypeEdge";
                    node?: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                    } | null;
                  } | null> | null;
                };
                doubleDamageFrom: {
                  __typename?: "TypeConnection";
                  edges?: Array<{
                    __typename?: "TypeEdge";
                    node?: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                    } | null;
                  } | null> | null;
                };
              } | null;
            } | null> | null;
          };
          moves: {
            __typename?: "PokemonMoveConnection";
            edges?: Array<{
              __typename?: "PokemonMoveEdge";
              learnMethod?: MoveLearnMethod | null;
              levelLearnedAt?: number | null;
              id: string;
              node?: {
                __typename?: "Move";
                id: string;
                slug: string;
                name: string;
                accuracy?: number | null;
                pp?: number | null;
                power?: number | null;
                damageClass: DamageClass;
                effect?: string | null;
                effectChance?: number | null;
                target: MoveTarget;
                type: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                  noDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  halfDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  doubleDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                };
              } | null;
            } | null> | null;
          };
        };
        moves: {
          __typename?: "TeamMemberMoveConnection";
          edges?: Array<{
            __typename?: "TeamMemberMoveEdge";
            learnMethod?: MoveLearnMethod | null;
            levelLearnedAt?: number | null;
            slot?: number | null;
            id: string;
            node?: {
              __typename?: "Move";
              id: string;
              slug: string;
              name: string;
              accuracy?: number | null;
              pp?: number | null;
              power?: number | null;
              damageClass: DamageClass;
              effect?: string | null;
              effectChance?: number | null;
              target: MoveTarget;
              type: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
                noDamageTo: {
                  __typename?: "TypeConnection";
                  edges?: Array<{
                    __typename?: "TypeEdge";
                    node?: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                    } | null;
                  } | null> | null;
                };
                halfDamageTo: {
                  __typename?: "TypeConnection";
                  edges?: Array<{
                    __typename?: "TypeEdge";
                    node?: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                    } | null;
                  } | null> | null;
                };
                doubleDamageTo: {
                  __typename?: "TypeConnection";
                  edges?: Array<{
                    __typename?: "TypeEdge";
                    node?: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                    } | null;
                  } | null> | null;
                };
              };
            } | null;
          } | null> | null;
        };
      } | null;
    } | null> | null;
  };
};

export type TeamMemberInTeamFieldsFragment = {
  __typename?: "TeamMemberEdge";
  slot?: number | null;
  node?: {
    __typename?: "TeamMember";
    id: string;
    pokemon: {
      __typename?: "Pokemon";
      id: string;
      name: string;
      slug: string;
      pokedexId: number;
      sprite: string;
      color: Color;
      shape: Shape;
      habitat?: Habitat | null;
      hp: number;
      attack: number;
      defense: number;
      specialAttack: number;
      specialDefense: number;
      speed: number;
      height: number;
      weight: number;
      isDefaultVariant: boolean;
      isBaby: boolean;
      isLegendary: boolean;
      isMythical: boolean;
      description?: string | null;
      abilities: {
        __typename?: "PokemonAbilityConnection";
        edges?: Array<{
          __typename?: "PokemonAbilityEdge";
          slot?: number | null;
          isHidden?: boolean | null;
          node?: {
            __typename?: "Ability";
            id: string;
            slug: string;
            name: string;
            effect?: string | null;
          } | null;
        } | null> | null;
      };
      eggGroups: {
        __typename?: "EggGroupConnection";
        edges?: Array<{
          __typename?: "EggGroupEdge";
          node?: {
            __typename?: "EggGroup";
            id: string;
            name: string;
            slug: string;
          } | null;
        } | null> | null;
      };
      evolvesTo: {
        __typename?: "PokemonEvolutionConnection";
        edges?: Array<{
          __typename?: "PokemonEvolutionEdge";
          node?: {
            __typename?: "PokemonEvolution";
            id: string;
            trigger: EvolutionTrigger;
            gender: Gender;
            minLevel?: number | null;
            minHappiness?: number | null;
            minBeauty?: number | null;
            minAffection?: number | null;
            needsOverworldRain: boolean;
            relativePhysicalStats?: number | null;
            timeOfDay: TimeOfDay;
            turnUpsideDown: boolean;
            spin: boolean;
            takeDamage?: number | null;
            criticalHits?: number | null;
            pokemon: { __typename?: "Pokemon"; id: string; name: string };
            item?: {
              __typename?: "Item";
              id: string;
              slug: string;
              name: string;
              cost?: number | null;
              flingPower?: number | null;
              flingEffect?: string | null;
              effect?: string | null;
              sprite?: string | null;
              category: ItemCategory;
              attributes: Array<ItemAttribute>;
            } | null;
            heldItem?: {
              __typename?: "Item";
              id: string;
              slug: string;
              name: string;
              cost?: number | null;
              flingPower?: number | null;
              flingEffect?: string | null;
              effect?: string | null;
              sprite?: string | null;
              category: ItemCategory;
              attributes: Array<ItemAttribute>;
            } | null;
            knownMove?: {
              __typename?: "Move";
              id: string;
              name: string;
              type: { __typename?: "Type"; id: string; name: string };
            } | null;
            knownMoveType?: { __typename?: "Type"; name: string } | null;
            partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
            partyPokemonType?: { __typename?: "Type"; name: string } | null;
            tradeWithPokemon?: { __typename?: "Pokemon"; name: string } | null;
          } | null;
        } | null> | null;
      };
      evolvesFrom: {
        __typename?: "PokemonEvolutionConnection";
        edges?: Array<{
          __typename?: "PokemonEvolutionEdge";
          node?: {
            __typename?: "PokemonEvolution";
            id: string;
            trigger: EvolutionTrigger;
            gender: Gender;
            minLevel?: number | null;
            minHappiness?: number | null;
            minBeauty?: number | null;
            minAffection?: number | null;
            needsOverworldRain: boolean;
            relativePhysicalStats?: number | null;
            timeOfDay: TimeOfDay;
            turnUpsideDown: boolean;
            spin: boolean;
            takeDamage?: number | null;
            criticalHits?: number | null;
            pokemon: { __typename?: "Pokemon"; id: string; name: string };
            item?: {
              __typename?: "Item";
              id: string;
              slug: string;
              name: string;
              cost?: number | null;
              flingPower?: number | null;
              flingEffect?: string | null;
              effect?: string | null;
              sprite?: string | null;
              category: ItemCategory;
              attributes: Array<ItemAttribute>;
            } | null;
            heldItem?: {
              __typename?: "Item";
              id: string;
              slug: string;
              name: string;
              cost?: number | null;
              flingPower?: number | null;
              flingEffect?: string | null;
              effect?: string | null;
              sprite?: string | null;
              category: ItemCategory;
              attributes: Array<ItemAttribute>;
            } | null;
            knownMove?: {
              __typename?: "Move";
              id: string;
              name: string;
              type: { __typename?: "Type"; id: string; name: string };
            } | null;
            knownMoveType?: { __typename?: "Type"; name: string } | null;
            partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
            partyPokemonType?: { __typename?: "Type"; name: string } | null;
            tradeWithPokemon?: { __typename?: "Pokemon"; name: string } | null;
          } | null;
        } | null> | null;
      };
      types: {
        __typename?: "PokemonTypeConnection";
        edges?: Array<{
          __typename?: "PokemonTypeEdge";
          slot?: number | null;
          node?: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
            noDamageFrom: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
            halfDamageFrom: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
            doubleDamageFrom: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
          } | null;
        } | null> | null;
      };
      moves: {
        __typename?: "PokemonMoveConnection";
        edges?: Array<{
          __typename?: "PokemonMoveEdge";
          learnMethod?: MoveLearnMethod | null;
          levelLearnedAt?: number | null;
          id: string;
          node?: {
            __typename?: "Move";
            id: string;
            slug: string;
            name: string;
            accuracy?: number | null;
            pp?: number | null;
            power?: number | null;
            damageClass: DamageClass;
            effect?: string | null;
            effectChance?: number | null;
            target: MoveTarget;
            type: {
              __typename?: "Type";
              id: string;
              name: string;
              slug: string;
              noDamageTo: {
                __typename?: "TypeConnection";
                edges?: Array<{
                  __typename?: "TypeEdge";
                  node?: {
                    __typename?: "Type";
                    id: string;
                    name: string;
                    slug: string;
                  } | null;
                } | null> | null;
              };
              halfDamageTo: {
                __typename?: "TypeConnection";
                edges?: Array<{
                  __typename?: "TypeEdge";
                  node?: {
                    __typename?: "Type";
                    id: string;
                    name: string;
                    slug: string;
                  } | null;
                } | null> | null;
              };
              doubleDamageTo: {
                __typename?: "TypeConnection";
                edges?: Array<{
                  __typename?: "TypeEdge";
                  node?: {
                    __typename?: "Type";
                    id: string;
                    name: string;
                    slug: string;
                  } | null;
                } | null> | null;
              };
            };
          } | null;
        } | null> | null;
      };
    };
    moves: {
      __typename?: "TeamMemberMoveConnection";
      edges?: Array<{
        __typename?: "TeamMemberMoveEdge";
        learnMethod?: MoveLearnMethod | null;
        levelLearnedAt?: number | null;
        slot?: number | null;
        id: string;
        node?: {
          __typename?: "Move";
          id: string;
          slug: string;
          name: string;
          accuracy?: number | null;
          pp?: number | null;
          power?: number | null;
          damageClass: DamageClass;
          effect?: string | null;
          effectChance?: number | null;
          target: MoveTarget;
          type: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
            noDamageTo: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
            halfDamageTo: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
            doubleDamageTo: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
          };
        } | null;
      } | null> | null;
    };
  } | null;
};

export type TeamMemberFieldsFragment = {
  __typename?: "TeamMember";
  id: string;
  pokemon: {
    __typename?: "Pokemon";
    id: string;
    name: string;
    slug: string;
    pokedexId: number;
    sprite: string;
    color: Color;
    shape: Shape;
    habitat?: Habitat | null;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    height: number;
    weight: number;
    isDefaultVariant: boolean;
    isBaby: boolean;
    isLegendary: boolean;
    isMythical: boolean;
    description?: string | null;
    abilities: {
      __typename?: "PokemonAbilityConnection";
      edges?: Array<{
        __typename?: "PokemonAbilityEdge";
        slot?: number | null;
        isHidden?: boolean | null;
        node?: {
          __typename?: "Ability";
          id: string;
          slug: string;
          name: string;
          effect?: string | null;
        } | null;
      } | null> | null;
    };
    eggGroups: {
      __typename?: "EggGroupConnection";
      edges?: Array<{
        __typename?: "EggGroupEdge";
        node?: {
          __typename?: "EggGroup";
          id: string;
          name: string;
          slug: string;
        } | null;
      } | null> | null;
    };
    evolvesTo: {
      __typename?: "PokemonEvolutionConnection";
      edges?: Array<{
        __typename?: "PokemonEvolutionEdge";
        node?: {
          __typename?: "PokemonEvolution";
          id: string;
          trigger: EvolutionTrigger;
          gender: Gender;
          minLevel?: number | null;
          minHappiness?: number | null;
          minBeauty?: number | null;
          minAffection?: number | null;
          needsOverworldRain: boolean;
          relativePhysicalStats?: number | null;
          timeOfDay: TimeOfDay;
          turnUpsideDown: boolean;
          spin: boolean;
          takeDamage?: number | null;
          criticalHits?: number | null;
          pokemon: { __typename?: "Pokemon"; id: string; name: string };
          item?: {
            __typename?: "Item";
            id: string;
            slug: string;
            name: string;
            cost?: number | null;
            flingPower?: number | null;
            flingEffect?: string | null;
            effect?: string | null;
            sprite?: string | null;
            category: ItemCategory;
            attributes: Array<ItemAttribute>;
          } | null;
          heldItem?: {
            __typename?: "Item";
            id: string;
            slug: string;
            name: string;
            cost?: number | null;
            flingPower?: number | null;
            flingEffect?: string | null;
            effect?: string | null;
            sprite?: string | null;
            category: ItemCategory;
            attributes: Array<ItemAttribute>;
          } | null;
          knownMove?: {
            __typename?: "Move";
            id: string;
            name: string;
            type: { __typename?: "Type"; id: string; name: string };
          } | null;
          knownMoveType?: { __typename?: "Type"; name: string } | null;
          partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
          partyPokemonType?: { __typename?: "Type"; name: string } | null;
          tradeWithPokemon?: { __typename?: "Pokemon"; name: string } | null;
        } | null;
      } | null> | null;
    };
    evolvesFrom: {
      __typename?: "PokemonEvolutionConnection";
      edges?: Array<{
        __typename?: "PokemonEvolutionEdge";
        node?: {
          __typename?: "PokemonEvolution";
          id: string;
          trigger: EvolutionTrigger;
          gender: Gender;
          minLevel?: number | null;
          minHappiness?: number | null;
          minBeauty?: number | null;
          minAffection?: number | null;
          needsOverworldRain: boolean;
          relativePhysicalStats?: number | null;
          timeOfDay: TimeOfDay;
          turnUpsideDown: boolean;
          spin: boolean;
          takeDamage?: number | null;
          criticalHits?: number | null;
          pokemon: { __typename?: "Pokemon"; id: string; name: string };
          item?: {
            __typename?: "Item";
            id: string;
            slug: string;
            name: string;
            cost?: number | null;
            flingPower?: number | null;
            flingEffect?: string | null;
            effect?: string | null;
            sprite?: string | null;
            category: ItemCategory;
            attributes: Array<ItemAttribute>;
          } | null;
          heldItem?: {
            __typename?: "Item";
            id: string;
            slug: string;
            name: string;
            cost?: number | null;
            flingPower?: number | null;
            flingEffect?: string | null;
            effect?: string | null;
            sprite?: string | null;
            category: ItemCategory;
            attributes: Array<ItemAttribute>;
          } | null;
          knownMove?: {
            __typename?: "Move";
            id: string;
            name: string;
            type: { __typename?: "Type"; id: string; name: string };
          } | null;
          knownMoveType?: { __typename?: "Type"; name: string } | null;
          partyPokemon?: { __typename?: "Pokemon"; name: string } | null;
          partyPokemonType?: { __typename?: "Type"; name: string } | null;
          tradeWithPokemon?: { __typename?: "Pokemon"; name: string } | null;
        } | null;
      } | null> | null;
    };
    types: {
      __typename?: "PokemonTypeConnection";
      edges?: Array<{
        __typename?: "PokemonTypeEdge";
        slot?: number | null;
        node?: {
          __typename?: "Type";
          id: string;
          name: string;
          slug: string;
          noDamageFrom: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
          halfDamageFrom: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
          doubleDamageFrom: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
        } | null;
      } | null> | null;
    };
    moves: {
      __typename?: "PokemonMoveConnection";
      edges?: Array<{
        __typename?: "PokemonMoveEdge";
        learnMethod?: MoveLearnMethod | null;
        levelLearnedAt?: number | null;
        id: string;
        node?: {
          __typename?: "Move";
          id: string;
          slug: string;
          name: string;
          accuracy?: number | null;
          pp?: number | null;
          power?: number | null;
          damageClass: DamageClass;
          effect?: string | null;
          effectChance?: number | null;
          target: MoveTarget;
          type: {
            __typename?: "Type";
            id: string;
            name: string;
            slug: string;
            noDamageTo: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
            halfDamageTo: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
            doubleDamageTo: {
              __typename?: "TypeConnection";
              edges?: Array<{
                __typename?: "TypeEdge";
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
          };
        } | null;
      } | null> | null;
    };
  };
  moves: {
    __typename?: "TeamMemberMoveConnection";
    edges?: Array<{
      __typename?: "TeamMemberMoveEdge";
      learnMethod?: MoveLearnMethod | null;
      levelLearnedAt?: number | null;
      slot?: number | null;
      id: string;
      node?: {
        __typename?: "Move";
        id: string;
        slug: string;
        name: string;
        accuracy?: number | null;
        pp?: number | null;
        power?: number | null;
        damageClass: DamageClass;
        effect?: string | null;
        effectChance?: number | null;
        target: MoveTarget;
        type: {
          __typename?: "Type";
          id: string;
          name: string;
          slug: string;
          noDamageTo: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
          halfDamageTo: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
          doubleDamageTo: {
            __typename?: "TypeConnection";
            edges?: Array<{
              __typename?: "TypeEdge";
              node?: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              } | null;
            } | null> | null;
          };
        };
      } | null;
    } | null> | null;
  };
};

export type TypeFieldsFragment = {
  __typename?: "Type";
  id: string;
  name: string;
  slug: string;
};

export type PokemonTypeFieldsFragment = {
  __typename?: "Type";
  id: string;
  name: string;
  slug: string;
  noDamageFrom: {
    __typename?: "TypeConnection";
    edges?: Array<{
      __typename?: "TypeEdge";
      node?: {
        __typename?: "Type";
        id: string;
        name: string;
        slug: string;
      } | null;
    } | null> | null;
  };
  halfDamageFrom: {
    __typename?: "TypeConnection";
    edges?: Array<{
      __typename?: "TypeEdge";
      node?: {
        __typename?: "Type";
        id: string;
        name: string;
        slug: string;
      } | null;
    } | null> | null;
  };
  doubleDamageFrom: {
    __typename?: "TypeConnection";
    edges?: Array<{
      __typename?: "TypeEdge";
      node?: {
        __typename?: "Type";
        id: string;
        name: string;
        slug: string;
      } | null;
    } | null> | null;
  };
};

export type MoveTypeFieldsFragment = {
  __typename?: "Type";
  id: string;
  name: string;
  slug: string;
  noDamageTo: {
    __typename?: "TypeConnection";
    edges?: Array<{
      __typename?: "TypeEdge";
      node?: {
        __typename?: "Type";
        id: string;
        name: string;
        slug: string;
      } | null;
    } | null> | null;
  };
  halfDamageTo: {
    __typename?: "TypeConnection";
    edges?: Array<{
      __typename?: "TypeEdge";
      node?: {
        __typename?: "Type";
        id: string;
        name: string;
        slug: string;
      } | null;
    } | null> | null;
  };
  doubleDamageTo: {
    __typename?: "TypeConnection";
    edges?: Array<{
      __typename?: "TypeEdge";
      node?: {
        __typename?: "Type";
        id: string;
        name: string;
        slug: string;
      } | null;
    } | null> | null;
  };
};

export type CreateTeamMutationVariables = Exact<{
  name: Scalars["String"];
}>;

export type CreateTeamMutation = {
  __typename?: "Mutation";
  createTeam: {
    __typename?: "Team";
    id: string;
    name: string;
    createdAt: any;
    members: {
      __typename?: "TeamMemberConnection";
      edges?: Array<{
        __typename?: "TeamMemberEdge";
        cursor: string;
        slot?: number | null;
        node?: {
          __typename?: "TeamMember";
          id: string;
          pokemon: {
            __typename?: "Pokemon";
            id: string;
            name: string;
            slug: string;
            pokedexId: number;
            sprite: string;
            color: Color;
            shape: Shape;
            habitat?: Habitat | null;
            hp: number;
            attack: number;
            defense: number;
            specialAttack: number;
            specialDefense: number;
            speed: number;
            height: number;
            weight: number;
            isDefaultVariant: boolean;
            isBaby: boolean;
            isLegendary: boolean;
            isMythical: boolean;
            description?: string | null;
            abilities: {
              __typename?: "PokemonAbilityConnection";
              edges?: Array<{
                __typename?: "PokemonAbilityEdge";
                slot?: number | null;
                isHidden?: boolean | null;
                node?: {
                  __typename?: "Ability";
                  id: string;
                  slug: string;
                  name: string;
                  effect?: string | null;
                } | null;
              } | null> | null;
            };
            eggGroups: {
              __typename?: "EggGroupConnection";
              edges?: Array<{
                __typename?: "EggGroupEdge";
                node?: {
                  __typename?: "EggGroup";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
            evolvesTo: {
              __typename?: "PokemonEvolutionConnection";
              edges?: Array<{
                __typename?: "PokemonEvolutionEdge";
                node?: {
                  __typename?: "PokemonEvolution";
                  id: string;
                  trigger: EvolutionTrigger;
                  gender: Gender;
                  minLevel?: number | null;
                  minHappiness?: number | null;
                  minBeauty?: number | null;
                  minAffection?: number | null;
                  needsOverworldRain: boolean;
                  relativePhysicalStats?: number | null;
                  timeOfDay: TimeOfDay;
                  turnUpsideDown: boolean;
                  spin: boolean;
                  takeDamage?: number | null;
                  criticalHits?: number | null;
                  pokemon: { __typename?: "Pokemon"; id: string; name: string };
                  item?: {
                    __typename?: "Item";
                    id: string;
                    slug: string;
                    name: string;
                    cost?: number | null;
                    flingPower?: number | null;
                    flingEffect?: string | null;
                    effect?: string | null;
                    sprite?: string | null;
                    category: ItemCategory;
                    attributes: Array<ItemAttribute>;
                  } | null;
                  heldItem?: {
                    __typename?: "Item";
                    id: string;
                    slug: string;
                    name: string;
                    cost?: number | null;
                    flingPower?: number | null;
                    flingEffect?: string | null;
                    effect?: string | null;
                    sprite?: string | null;
                    category: ItemCategory;
                    attributes: Array<ItemAttribute>;
                  } | null;
                  knownMove?: {
                    __typename?: "Move";
                    id: string;
                    name: string;
                    type: { __typename?: "Type"; id: string; name: string };
                  } | null;
                  knownMoveType?: { __typename?: "Type"; name: string } | null;
                  partyPokemon?: {
                    __typename?: "Pokemon";
                    name: string;
                  } | null;
                  partyPokemonType?: {
                    __typename?: "Type";
                    name: string;
                  } | null;
                  tradeWithPokemon?: {
                    __typename?: "Pokemon";
                    name: string;
                  } | null;
                } | null;
              } | null> | null;
            };
            evolvesFrom: {
              __typename?: "PokemonEvolutionConnection";
              edges?: Array<{
                __typename?: "PokemonEvolutionEdge";
                node?: {
                  __typename?: "PokemonEvolution";
                  id: string;
                  trigger: EvolutionTrigger;
                  gender: Gender;
                  minLevel?: number | null;
                  minHappiness?: number | null;
                  minBeauty?: number | null;
                  minAffection?: number | null;
                  needsOverworldRain: boolean;
                  relativePhysicalStats?: number | null;
                  timeOfDay: TimeOfDay;
                  turnUpsideDown: boolean;
                  spin: boolean;
                  takeDamage?: number | null;
                  criticalHits?: number | null;
                  pokemon: { __typename?: "Pokemon"; id: string; name: string };
                  item?: {
                    __typename?: "Item";
                    id: string;
                    slug: string;
                    name: string;
                    cost?: number | null;
                    flingPower?: number | null;
                    flingEffect?: string | null;
                    effect?: string | null;
                    sprite?: string | null;
                    category: ItemCategory;
                    attributes: Array<ItemAttribute>;
                  } | null;
                  heldItem?: {
                    __typename?: "Item";
                    id: string;
                    slug: string;
                    name: string;
                    cost?: number | null;
                    flingPower?: number | null;
                    flingEffect?: string | null;
                    effect?: string | null;
                    sprite?: string | null;
                    category: ItemCategory;
                    attributes: Array<ItemAttribute>;
                  } | null;
                  knownMove?: {
                    __typename?: "Move";
                    id: string;
                    name: string;
                    type: { __typename?: "Type"; id: string; name: string };
                  } | null;
                  knownMoveType?: { __typename?: "Type"; name: string } | null;
                  partyPokemon?: {
                    __typename?: "Pokemon";
                    name: string;
                  } | null;
                  partyPokemonType?: {
                    __typename?: "Type";
                    name: string;
                  } | null;
                  tradeWithPokemon?: {
                    __typename?: "Pokemon";
                    name: string;
                  } | null;
                } | null;
              } | null> | null;
            };
            types: {
              __typename?: "PokemonTypeConnection";
              edges?: Array<{
                __typename?: "PokemonTypeEdge";
                slot?: number | null;
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                  noDamageFrom: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  halfDamageFrom: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  doubleDamageFrom: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                } | null;
              } | null> | null;
            };
            moves: {
              __typename?: "PokemonMoveConnection";
              edges?: Array<{
                __typename?: "PokemonMoveEdge";
                learnMethod?: MoveLearnMethod | null;
                levelLearnedAt?: number | null;
                id: string;
                node?: {
                  __typename?: "Move";
                  id: string;
                  slug: string;
                  name: string;
                  accuracy?: number | null;
                  pp?: number | null;
                  power?: number | null;
                  damageClass: DamageClass;
                  effect?: string | null;
                  effectChance?: number | null;
                  target: MoveTarget;
                  type: {
                    __typename?: "Type";
                    id: string;
                    name: string;
                    slug: string;
                    noDamageTo: {
                      __typename?: "TypeConnection";
                      edges?: Array<{
                        __typename?: "TypeEdge";
                        node?: {
                          __typename?: "Type";
                          id: string;
                          name: string;
                          slug: string;
                        } | null;
                      } | null> | null;
                    };
                    halfDamageTo: {
                      __typename?: "TypeConnection";
                      edges?: Array<{
                        __typename?: "TypeEdge";
                        node?: {
                          __typename?: "Type";
                          id: string;
                          name: string;
                          slug: string;
                        } | null;
                      } | null> | null;
                    };
                    doubleDamageTo: {
                      __typename?: "TypeConnection";
                      edges?: Array<{
                        __typename?: "TypeEdge";
                        node?: {
                          __typename?: "Type";
                          id: string;
                          name: string;
                          slug: string;
                        } | null;
                      } | null> | null;
                    };
                  };
                } | null;
              } | null> | null;
            };
          };
          moves: {
            __typename?: "TeamMemberMoveConnection";
            edges?: Array<{
              __typename?: "TeamMemberMoveEdge";
              learnMethod?: MoveLearnMethod | null;
              levelLearnedAt?: number | null;
              slot?: number | null;
              id: string;
              node?: {
                __typename?: "Move";
                id: string;
                slug: string;
                name: string;
                accuracy?: number | null;
                pp?: number | null;
                power?: number | null;
                damageClass: DamageClass;
                effect?: string | null;
                effectChance?: number | null;
                target: MoveTarget;
                type: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                  noDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  halfDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  doubleDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                };
              } | null;
            } | null> | null;
          };
        } | null;
      } | null> | null;
    };
  };
};

export type AllTeamsQueryVariables = Exact<{ [key: string]: never }>;

export type AllTeamsQuery = {
  __typename?: "Query";
  teams: {
    __typename?: "TeamConnection";
    edges?: Array<{
      __typename?: "TeamEdge";
      node?: {
        __typename?: "Team";
        id: string;
        name: string;
        createdAt: any;
        members: {
          __typename?: "TeamMemberConnection";
          edges?: Array<{
            __typename?: "TeamMemberEdge";
            cursor: string;
            slot?: number | null;
            node?: {
              __typename?: "TeamMember";
              id: string;
              pokemon: {
                __typename?: "Pokemon";
                id: string;
                name: string;
                slug: string;
                pokedexId: number;
                sprite: string;
                color: Color;
                shape: Shape;
                habitat?: Habitat | null;
                hp: number;
                attack: number;
                defense: number;
                specialAttack: number;
                specialDefense: number;
                speed: number;
                height: number;
                weight: number;
                isDefaultVariant: boolean;
                isBaby: boolean;
                isLegendary: boolean;
                isMythical: boolean;
                description?: string | null;
                abilities: {
                  __typename?: "PokemonAbilityConnection";
                  edges?: Array<{
                    __typename?: "PokemonAbilityEdge";
                    slot?: number | null;
                    isHidden?: boolean | null;
                    node?: {
                      __typename?: "Ability";
                      id: string;
                      slug: string;
                      name: string;
                      effect?: string | null;
                    } | null;
                  } | null> | null;
                };
                eggGroups: {
                  __typename?: "EggGroupConnection";
                  edges?: Array<{
                    __typename?: "EggGroupEdge";
                    node?: {
                      __typename?: "EggGroup";
                      id: string;
                      name: string;
                      slug: string;
                    } | null;
                  } | null> | null;
                };
                evolvesTo: {
                  __typename?: "PokemonEvolutionConnection";
                  edges?: Array<{
                    __typename?: "PokemonEvolutionEdge";
                    node?: {
                      __typename?: "PokemonEvolution";
                      id: string;
                      trigger: EvolutionTrigger;
                      gender: Gender;
                      minLevel?: number | null;
                      minHappiness?: number | null;
                      minBeauty?: number | null;
                      minAffection?: number | null;
                      needsOverworldRain: boolean;
                      relativePhysicalStats?: number | null;
                      timeOfDay: TimeOfDay;
                      turnUpsideDown: boolean;
                      spin: boolean;
                      takeDamage?: number | null;
                      criticalHits?: number | null;
                      pokemon: {
                        __typename?: "Pokemon";
                        id: string;
                        name: string;
                      };
                      item?: {
                        __typename?: "Item";
                        id: string;
                        slug: string;
                        name: string;
                        cost?: number | null;
                        flingPower?: number | null;
                        flingEffect?: string | null;
                        effect?: string | null;
                        sprite?: string | null;
                        category: ItemCategory;
                        attributes: Array<ItemAttribute>;
                      } | null;
                      heldItem?: {
                        __typename?: "Item";
                        id: string;
                        slug: string;
                        name: string;
                        cost?: number | null;
                        flingPower?: number | null;
                        flingEffect?: string | null;
                        effect?: string | null;
                        sprite?: string | null;
                        category: ItemCategory;
                        attributes: Array<ItemAttribute>;
                      } | null;
                      knownMove?: {
                        __typename?: "Move";
                        id: string;
                        name: string;
                        type: { __typename?: "Type"; id: string; name: string };
                      } | null;
                      knownMoveType?: {
                        __typename?: "Type";
                        name: string;
                      } | null;
                      partyPokemon?: {
                        __typename?: "Pokemon";
                        name: string;
                      } | null;
                      partyPokemonType?: {
                        __typename?: "Type";
                        name: string;
                      } | null;
                      tradeWithPokemon?: {
                        __typename?: "Pokemon";
                        name: string;
                      } | null;
                    } | null;
                  } | null> | null;
                };
                evolvesFrom: {
                  __typename?: "PokemonEvolutionConnection";
                  edges?: Array<{
                    __typename?: "PokemonEvolutionEdge";
                    node?: {
                      __typename?: "PokemonEvolution";
                      id: string;
                      trigger: EvolutionTrigger;
                      gender: Gender;
                      minLevel?: number | null;
                      minHappiness?: number | null;
                      minBeauty?: number | null;
                      minAffection?: number | null;
                      needsOverworldRain: boolean;
                      relativePhysicalStats?: number | null;
                      timeOfDay: TimeOfDay;
                      turnUpsideDown: boolean;
                      spin: boolean;
                      takeDamage?: number | null;
                      criticalHits?: number | null;
                      pokemon: {
                        __typename?: "Pokemon";
                        id: string;
                        name: string;
                      };
                      item?: {
                        __typename?: "Item";
                        id: string;
                        slug: string;
                        name: string;
                        cost?: number | null;
                        flingPower?: number | null;
                        flingEffect?: string | null;
                        effect?: string | null;
                        sprite?: string | null;
                        category: ItemCategory;
                        attributes: Array<ItemAttribute>;
                      } | null;
                      heldItem?: {
                        __typename?: "Item";
                        id: string;
                        slug: string;
                        name: string;
                        cost?: number | null;
                        flingPower?: number | null;
                        flingEffect?: string | null;
                        effect?: string | null;
                        sprite?: string | null;
                        category: ItemCategory;
                        attributes: Array<ItemAttribute>;
                      } | null;
                      knownMove?: {
                        __typename?: "Move";
                        id: string;
                        name: string;
                        type: { __typename?: "Type"; id: string; name: string };
                      } | null;
                      knownMoveType?: {
                        __typename?: "Type";
                        name: string;
                      } | null;
                      partyPokemon?: {
                        __typename?: "Pokemon";
                        name: string;
                      } | null;
                      partyPokemonType?: {
                        __typename?: "Type";
                        name: string;
                      } | null;
                      tradeWithPokemon?: {
                        __typename?: "Pokemon";
                        name: string;
                      } | null;
                    } | null;
                  } | null> | null;
                };
                types: {
                  __typename?: "PokemonTypeConnection";
                  edges?: Array<{
                    __typename?: "PokemonTypeEdge";
                    slot?: number | null;
                    node?: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                      noDamageFrom: {
                        __typename?: "TypeConnection";
                        edges?: Array<{
                          __typename?: "TypeEdge";
                          node?: {
                            __typename?: "Type";
                            id: string;
                            name: string;
                            slug: string;
                          } | null;
                        } | null> | null;
                      };
                      halfDamageFrom: {
                        __typename?: "TypeConnection";
                        edges?: Array<{
                          __typename?: "TypeEdge";
                          node?: {
                            __typename?: "Type";
                            id: string;
                            name: string;
                            slug: string;
                          } | null;
                        } | null> | null;
                      };
                      doubleDamageFrom: {
                        __typename?: "TypeConnection";
                        edges?: Array<{
                          __typename?: "TypeEdge";
                          node?: {
                            __typename?: "Type";
                            id: string;
                            name: string;
                            slug: string;
                          } | null;
                        } | null> | null;
                      };
                    } | null;
                  } | null> | null;
                };
                moves: {
                  __typename?: "PokemonMoveConnection";
                  edges?: Array<{
                    __typename?: "PokemonMoveEdge";
                    learnMethod?: MoveLearnMethod | null;
                    levelLearnedAt?: number | null;
                    id: string;
                    node?: {
                      __typename?: "Move";
                      id: string;
                      slug: string;
                      name: string;
                      accuracy?: number | null;
                      pp?: number | null;
                      power?: number | null;
                      damageClass: DamageClass;
                      effect?: string | null;
                      effectChance?: number | null;
                      target: MoveTarget;
                      type: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                        noDamageTo: {
                          __typename?: "TypeConnection";
                          edges?: Array<{
                            __typename?: "TypeEdge";
                            node?: {
                              __typename?: "Type";
                              id: string;
                              name: string;
                              slug: string;
                            } | null;
                          } | null> | null;
                        };
                        halfDamageTo: {
                          __typename?: "TypeConnection";
                          edges?: Array<{
                            __typename?: "TypeEdge";
                            node?: {
                              __typename?: "Type";
                              id: string;
                              name: string;
                              slug: string;
                            } | null;
                          } | null> | null;
                        };
                        doubleDamageTo: {
                          __typename?: "TypeConnection";
                          edges?: Array<{
                            __typename?: "TypeEdge";
                            node?: {
                              __typename?: "Type";
                              id: string;
                              name: string;
                              slug: string;
                            } | null;
                          } | null> | null;
                        };
                      };
                    } | null;
                  } | null> | null;
                };
              };
              moves: {
                __typename?: "TeamMemberMoveConnection";
                edges?: Array<{
                  __typename?: "TeamMemberMoveEdge";
                  learnMethod?: MoveLearnMethod | null;
                  levelLearnedAt?: number | null;
                  slot?: number | null;
                  id: string;
                  node?: {
                    __typename?: "Move";
                    id: string;
                    slug: string;
                    name: string;
                    accuracy?: number | null;
                    pp?: number | null;
                    power?: number | null;
                    damageClass: DamageClass;
                    effect?: string | null;
                    effectChance?: number | null;
                    target: MoveTarget;
                    type: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                      noDamageTo: {
                        __typename?: "TypeConnection";
                        edges?: Array<{
                          __typename?: "TypeEdge";
                          node?: {
                            __typename?: "Type";
                            id: string;
                            name: string;
                            slug: string;
                          } | null;
                        } | null> | null;
                      };
                      halfDamageTo: {
                        __typename?: "TypeConnection";
                        edges?: Array<{
                          __typename?: "TypeEdge";
                          node?: {
                            __typename?: "Type";
                            id: string;
                            name: string;
                            slug: string;
                          } | null;
                        } | null> | null;
                      };
                      doubleDamageTo: {
                        __typename?: "TypeConnection";
                        edges?: Array<{
                          __typename?: "TypeEdge";
                          node?: {
                            __typename?: "Type";
                            id: string;
                            name: string;
                            slug: string;
                          } | null;
                        } | null> | null;
                      };
                    };
                  } | null;
                } | null> | null;
              };
            } | null;
          } | null> | null;
        };
      } | null;
    } | null> | null;
  };
};

export type TeamByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type TeamByIdQuery = {
  __typename?: "Query";
  teamById?: {
    __typename?: "Team";
    id: string;
    name: string;
    createdAt: any;
    members: {
      __typename?: "TeamMemberConnection";
      edges?: Array<{
        __typename?: "TeamMemberEdge";
        cursor: string;
        slot?: number | null;
        node?: {
          __typename?: "TeamMember";
          id: string;
          pokemon: {
            __typename?: "Pokemon";
            id: string;
            name: string;
            slug: string;
            pokedexId: number;
            sprite: string;
            color: Color;
            shape: Shape;
            habitat?: Habitat | null;
            hp: number;
            attack: number;
            defense: number;
            specialAttack: number;
            specialDefense: number;
            speed: number;
            height: number;
            weight: number;
            isDefaultVariant: boolean;
            isBaby: boolean;
            isLegendary: boolean;
            isMythical: boolean;
            description?: string | null;
            abilities: {
              __typename?: "PokemonAbilityConnection";
              edges?: Array<{
                __typename?: "PokemonAbilityEdge";
                slot?: number | null;
                isHidden?: boolean | null;
                node?: {
                  __typename?: "Ability";
                  id: string;
                  slug: string;
                  name: string;
                  effect?: string | null;
                } | null;
              } | null> | null;
            };
            eggGroups: {
              __typename?: "EggGroupConnection";
              edges?: Array<{
                __typename?: "EggGroupEdge";
                node?: {
                  __typename?: "EggGroup";
                  id: string;
                  name: string;
                  slug: string;
                } | null;
              } | null> | null;
            };
            evolvesTo: {
              __typename?: "PokemonEvolutionConnection";
              edges?: Array<{
                __typename?: "PokemonEvolutionEdge";
                node?: {
                  __typename?: "PokemonEvolution";
                  id: string;
                  trigger: EvolutionTrigger;
                  gender: Gender;
                  minLevel?: number | null;
                  minHappiness?: number | null;
                  minBeauty?: number | null;
                  minAffection?: number | null;
                  needsOverworldRain: boolean;
                  relativePhysicalStats?: number | null;
                  timeOfDay: TimeOfDay;
                  turnUpsideDown: boolean;
                  spin: boolean;
                  takeDamage?: number | null;
                  criticalHits?: number | null;
                  pokemon: { __typename?: "Pokemon"; id: string; name: string };
                  item?: {
                    __typename?: "Item";
                    id: string;
                    slug: string;
                    name: string;
                    cost?: number | null;
                    flingPower?: number | null;
                    flingEffect?: string | null;
                    effect?: string | null;
                    sprite?: string | null;
                    category: ItemCategory;
                    attributes: Array<ItemAttribute>;
                  } | null;
                  heldItem?: {
                    __typename?: "Item";
                    id: string;
                    slug: string;
                    name: string;
                    cost?: number | null;
                    flingPower?: number | null;
                    flingEffect?: string | null;
                    effect?: string | null;
                    sprite?: string | null;
                    category: ItemCategory;
                    attributes: Array<ItemAttribute>;
                  } | null;
                  knownMove?: {
                    __typename?: "Move";
                    id: string;
                    name: string;
                    type: { __typename?: "Type"; id: string; name: string };
                  } | null;
                  knownMoveType?: { __typename?: "Type"; name: string } | null;
                  partyPokemon?: {
                    __typename?: "Pokemon";
                    name: string;
                  } | null;
                  partyPokemonType?: {
                    __typename?: "Type";
                    name: string;
                  } | null;
                  tradeWithPokemon?: {
                    __typename?: "Pokemon";
                    name: string;
                  } | null;
                } | null;
              } | null> | null;
            };
            evolvesFrom: {
              __typename?: "PokemonEvolutionConnection";
              edges?: Array<{
                __typename?: "PokemonEvolutionEdge";
                node?: {
                  __typename?: "PokemonEvolution";
                  id: string;
                  trigger: EvolutionTrigger;
                  gender: Gender;
                  minLevel?: number | null;
                  minHappiness?: number | null;
                  minBeauty?: number | null;
                  minAffection?: number | null;
                  needsOverworldRain: boolean;
                  relativePhysicalStats?: number | null;
                  timeOfDay: TimeOfDay;
                  turnUpsideDown: boolean;
                  spin: boolean;
                  takeDamage?: number | null;
                  criticalHits?: number | null;
                  pokemon: { __typename?: "Pokemon"; id: string; name: string };
                  item?: {
                    __typename?: "Item";
                    id: string;
                    slug: string;
                    name: string;
                    cost?: number | null;
                    flingPower?: number | null;
                    flingEffect?: string | null;
                    effect?: string | null;
                    sprite?: string | null;
                    category: ItemCategory;
                    attributes: Array<ItemAttribute>;
                  } | null;
                  heldItem?: {
                    __typename?: "Item";
                    id: string;
                    slug: string;
                    name: string;
                    cost?: number | null;
                    flingPower?: number | null;
                    flingEffect?: string | null;
                    effect?: string | null;
                    sprite?: string | null;
                    category: ItemCategory;
                    attributes: Array<ItemAttribute>;
                  } | null;
                  knownMove?: {
                    __typename?: "Move";
                    id: string;
                    name: string;
                    type: { __typename?: "Type"; id: string; name: string };
                  } | null;
                  knownMoveType?: { __typename?: "Type"; name: string } | null;
                  partyPokemon?: {
                    __typename?: "Pokemon";
                    name: string;
                  } | null;
                  partyPokemonType?: {
                    __typename?: "Type";
                    name: string;
                  } | null;
                  tradeWithPokemon?: {
                    __typename?: "Pokemon";
                    name: string;
                  } | null;
                } | null;
              } | null> | null;
            };
            types: {
              __typename?: "PokemonTypeConnection";
              edges?: Array<{
                __typename?: "PokemonTypeEdge";
                slot?: number | null;
                node?: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                  noDamageFrom: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  halfDamageFrom: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  doubleDamageFrom: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                } | null;
              } | null> | null;
            };
            moves: {
              __typename?: "PokemonMoveConnection";
              edges?: Array<{
                __typename?: "PokemonMoveEdge";
                learnMethod?: MoveLearnMethod | null;
                levelLearnedAt?: number | null;
                id: string;
                node?: {
                  __typename?: "Move";
                  id: string;
                  slug: string;
                  name: string;
                  accuracy?: number | null;
                  pp?: number | null;
                  power?: number | null;
                  damageClass: DamageClass;
                  effect?: string | null;
                  effectChance?: number | null;
                  target: MoveTarget;
                  type: {
                    __typename?: "Type";
                    id: string;
                    name: string;
                    slug: string;
                    noDamageTo: {
                      __typename?: "TypeConnection";
                      edges?: Array<{
                        __typename?: "TypeEdge";
                        node?: {
                          __typename?: "Type";
                          id: string;
                          name: string;
                          slug: string;
                        } | null;
                      } | null> | null;
                    };
                    halfDamageTo: {
                      __typename?: "TypeConnection";
                      edges?: Array<{
                        __typename?: "TypeEdge";
                        node?: {
                          __typename?: "Type";
                          id: string;
                          name: string;
                          slug: string;
                        } | null;
                      } | null> | null;
                    };
                    doubleDamageTo: {
                      __typename?: "TypeConnection";
                      edges?: Array<{
                        __typename?: "TypeEdge";
                        node?: {
                          __typename?: "Type";
                          id: string;
                          name: string;
                          slug: string;
                        } | null;
                      } | null> | null;
                    };
                  };
                } | null;
              } | null> | null;
            };
          };
          moves: {
            __typename?: "TeamMemberMoveConnection";
            edges?: Array<{
              __typename?: "TeamMemberMoveEdge";
              learnMethod?: MoveLearnMethod | null;
              levelLearnedAt?: number | null;
              slot?: number | null;
              id: string;
              node?: {
                __typename?: "Move";
                id: string;
                slug: string;
                name: string;
                accuracy?: number | null;
                pp?: number | null;
                power?: number | null;
                damageClass: DamageClass;
                effect?: string | null;
                effectChance?: number | null;
                target: MoveTarget;
                type: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                  noDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  halfDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                  doubleDamageTo: {
                    __typename?: "TypeConnection";
                    edges?: Array<{
                      __typename?: "TypeEdge";
                      node?: {
                        __typename?: "Type";
                        id: string;
                        name: string;
                        slug: string;
                      } | null;
                    } | null> | null;
                  };
                };
              } | null;
            } | null> | null;
          };
        } | null;
      } | null> | null;
    };
  } | null;
};

export const AbilityFieldsFragmentDoc = gql`
  fragment abilityFields on Ability {
    id
    slug
    name
    effect
  }
`;
export const ItemFieldsFragmentDoc = gql`
  fragment itemFields on Item {
    id
    slug
    name
    cost
    flingPower
    flingEffect
    effect
    sprite
    category
    attributes
  }
`;
export const PokemonEvolutionFieldsFragmentDoc = gql`
  fragment pokemonEvolutionFields on PokemonEvolution {
    id
    pokemon {
      id
      name
    }
    trigger
    item {
      ...itemFields
    }
    gender
    heldItem {
      ...itemFields
    }
    knownMove {
      id
      name
      type {
        id
        name
      }
    }
    knownMoveType {
      name
    }
    minLevel
    minHappiness
    minBeauty
    minAffection
    needsOverworldRain
    partyPokemon {
      name
    }
    partyPokemonType {
      name
    }
    relativePhysicalStats
    timeOfDay
    tradeWithPokemon {
      name
    }
    turnUpsideDown
    spin
    takeDamage
    criticalHits
  }
  ${ItemFieldsFragmentDoc}
`;
export const TypeFieldsFragmentDoc = gql`
  fragment typeFields on Type {
    id
    name
    slug
  }
`;
export const PokemonTypeFieldsFragmentDoc = gql`
  fragment pokemonTypeFields on Type {
    ...typeFields
    noDamageFrom {
      edges {
        node {
          ...typeFields
        }
      }
    }
    halfDamageFrom {
      edges {
        node {
          ...typeFields
        }
      }
    }
    doubleDamageFrom {
      edges {
        node {
          ...typeFields
        }
      }
    }
  }
  ${TypeFieldsFragmentDoc}
`;
export const MoveTypeFieldsFragmentDoc = gql`
  fragment moveTypeFields on Type {
    ...typeFields
    noDamageTo {
      edges {
        node {
          ...typeFields
        }
      }
    }
    halfDamageTo {
      edges {
        node {
          ...typeFields
        }
      }
    }
    doubleDamageTo {
      edges {
        node {
          ...typeFields
        }
      }
    }
  }
  ${TypeFieldsFragmentDoc}
`;
export const MoveFieldsFragmentDoc = gql`
  fragment moveFields on Move {
    id
    slug
    name
    accuracy
    pp
    power
    damageClass
    effect
    effectChance
    target
    type {
      ...moveTypeFields
    }
  }
  ${MoveTypeFieldsFragmentDoc}
`;
export const PokemonMoveFieldsFragmentDoc = gql`
  fragment pokemonMoveFields on PokemonMoveEdge {
    id: cursor
    learnMethod
    levelLearnedAt
    node {
      ...moveFields
    }
  }
  ${MoveFieldsFragmentDoc}
`;
export const PokemonFieldsFragmentDoc = gql`
  fragment pokemonFields on Pokemon {
    id
    name
    slug
    pokedexId
    sprite
    color
    shape
    habitat
    hp
    attack
    defense
    specialAttack
    specialDefense
    speed
    height
    weight
    isDefaultVariant
    isBaby
    isLegendary
    isMythical
    description
    abilities {
      edges {
        slot
        isHidden
        node {
          ...abilityFields
        }
      }
    }
    eggGroups {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    evolvesTo {
      edges {
        node {
          ...pokemonEvolutionFields
        }
      }
    }
    evolvesFrom {
      edges {
        node {
          ...pokemonEvolutionFields
        }
      }
    }
    types {
      edges {
        slot
        node {
          ...pokemonTypeFields
        }
      }
    }
    moves {
      edges {
        ...pokemonMoveFields
      }
    }
  }
  ${AbilityFieldsFragmentDoc}
  ${PokemonEvolutionFieldsFragmentDoc}
  ${PokemonTypeFieldsFragmentDoc}
  ${PokemonMoveFieldsFragmentDoc}
`;
export const TeamMemberMoveFieldsFragmentDoc = gql`
  fragment teamMemberMoveFields on TeamMemberMoveEdge {
    id: cursor
    learnMethod
    levelLearnedAt
    slot
    node {
      ...moveFields
    }
  }
  ${MoveFieldsFragmentDoc}
`;
export const TeamMemberFieldsFragmentDoc = gql`
  fragment teamMemberFields on TeamMember {
    id
    pokemon {
      ...pokemonFields
    }
    moves {
      edges {
        ...teamMemberMoveFields
      }
    }
  }
  ${PokemonFieldsFragmentDoc}
  ${TeamMemberMoveFieldsFragmentDoc}
`;
export const TeamMemberInTeamFieldsFragmentDoc = gql`
  fragment teamMemberInTeamFields on TeamMemberEdge {
    slot
    node {
      ...teamMemberFields
    }
  }
  ${TeamMemberFieldsFragmentDoc}
`;
export const TeamFieldsFragmentDoc = gql`
  fragment teamFields on Team {
    id
    name
    createdAt
    members {
      edges {
        cursor
        ...teamMemberInTeamFields
      }
    }
  }
  ${TeamMemberInTeamFieldsFragmentDoc}
`;
export const CreateTeamDocument = gql`
  mutation CreateTeam($name: String!) {
    createTeam(input: { name: $name }) {
      ...teamFields
    }
  }
  ${TeamFieldsFragmentDoc}
`;
export const AllTeamsDocument = gql`
  query AllTeams {
    teams {
      edges {
        node {
          ...teamFields
        }
      }
    }
  }
  ${TeamFieldsFragmentDoc}
`;
export const TeamByIdDocument = gql`
  query TeamById($id: ID!) {
    teamById(id: $id) {
      ...teamFields
    }
  }
  ${TeamFieldsFragmentDoc}
`;
export type Requester<C = {}> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C,
) => Promise<R>;
export function getSdk<C>(requester: Requester<C>) {
  return {
    CreateTeam(
      variables: CreateTeamMutationVariables,
      options?: C,
    ): Promise<CreateTeamMutation> {
      return requester<CreateTeamMutation, CreateTeamMutationVariables>(
        CreateTeamDocument,
        variables,
        options,
      );
    },
    AllTeams(
      variables?: AllTeamsQueryVariables,
      options?: C,
    ): Promise<AllTeamsQuery> {
      return requester<AllTeamsQuery, AllTeamsQueryVariables>(
        AllTeamsDocument,
        variables,
        options,
      );
    },
    TeamById(
      variables: TeamByIdQueryVariables,
      options?: C,
    ): Promise<TeamByIdQuery> {
      return requester<TeamByIdQuery, TeamByIdQueryVariables>(
        TeamByIdDocument,
        variables,
        options,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
