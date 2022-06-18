import type { DocumentNode } from "graphql";
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Ability = Node & {
  __typename?: "Ability";
  effect?: Maybe<Scalars["String"]>;
  /** Ability ID */
  id: Scalars["ID"];
  name: Scalars["String"];
  pokemon: PokemonWithAbilityConnection;
  /** Ability slug */
  slug: Scalars["String"];
};

export type AbilityPokemonArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type AbilityConnection = {
  __typename?: "AbilityConnection";
  edges?: Maybe<Array<AbilityEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type AbilityEdge = {
  __typename?: "AbilityEdge";
  cursor: Scalars["ID"];
  node: Ability;
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

export type CreateAbilityInput = {
  effect?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  slug: Scalars["String"];
};

export type CreateEggGroupInput = {
  name: Scalars["String"];
  slug: Scalars["String"];
};

export type CreateItemInput = {
  attributes: Array<ItemAttribute>;
  category: ItemCategory;
  cost?: InputMaybe<Scalars["Int"]>;
  effect?: InputMaybe<Scalars["String"]>;
  flingEffect?: InputMaybe<Scalars["String"]>;
  flingPower?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  /** Item slug */
  slug: Scalars["String"];
  sprite?: InputMaybe<Scalars["String"]>;
};

export type CreateMoveInput = {
  accuracy?: InputMaybe<Scalars["Int"]>;
  damageClass: DamageClass;
  effect?: InputMaybe<Scalars["String"]>;
  effectChance?: InputMaybe<Scalars["Int"]>;
  name: Scalars["String"];
  power?: InputMaybe<Scalars["Int"]>;
  pp?: InputMaybe<Scalars["Int"]>;
  /** Move slug */
  slug: Scalars["String"];
  target: MoveTarget;
  typeId: Scalars["ID"];
};

export type CreateTeamInput = {
  members: Array<CreateTeamMemberInput>;
  name: Scalars["String"];
};

export type CreateTeamMemberInput = {
  moves: Array<CreateTeamMemberMoveInput>;
  pokemonId: Scalars["String"];
  slot: Scalars["Int"];
};

export type CreateTeamMemberMoveInput = {
  moveId: Scalars["String"];
  slot: Scalars["Int"];
};

export type CreateTypeInput = {
  doubleDamageFrom: Array<Scalars["ID"]>;
  doubleDamageTo: Array<Scalars["ID"]>;
  halfDamageFrom: Array<Scalars["ID"]>;
  halfDamageTo: Array<Scalars["ID"]>;
  name: Scalars["String"];
  noDamageFrom: Array<Scalars["ID"]>;
  noDamageTo: Array<Scalars["ID"]>;
  slug: Scalars["String"];
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
  species: PokemonSpeciesConnection;
};

export type EggGroupSpeciesArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type EggGroupConnection = {
  __typename?: "EggGroupConnection";
  edges?: Maybe<Array<EggGroupEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EggGroupEdge = {
  __typename?: "EggGroupEdge";
  cursor: Scalars["ID"];
  node: EggGroup;
};

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
  /** Item ID */
  id: Scalars["ID"];
  name: Scalars["String"];
  /** Item slug */
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
  CatchingBonus = "CATCHING_BONUS",
  Choice = "CHOICE",
  Collectibles = "COLLECTIBLES",
  CurryIngredients = "CURRY_INGREDIENTS",
  DataCards = "DATA_CARDS",
  DexCompletion = "DEX_COMPLETION",
  DynamaxCrystals = "DYNAMAX_CRYSTALS",
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
  NatureMints = "NATURE_MINTS",
  Other = "OTHER",
  PickyHealing = "PICKY_HEALING",
  Plates = "PLATES",
  PlotAdvancement = "PLOT_ADVANCEMENT",
  PpRecovery = "PP_RECOVERY",
  Revival = "REVIVAL",
  Scarves = "SCARVES",
  SpecialBalls = "SPECIAL_BALLS",
  SpeciesCandies = "SPECIES_CANDIES",
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
  edges?: Maybe<Array<ItemEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ItemEdge = {
  __typename?: "ItemEdge";
  cursor: Scalars["ID"];
  node: Item;
};

export type Move = Node & {
  __typename?: "Move";
  accuracy?: Maybe<Scalars["Int"]>;
  damageClass: DamageClass;
  effect?: Maybe<Scalars["String"]>;
  effectChance?: Maybe<Scalars["Int"]>;
  /** Move ID */
  id: Scalars["ID"];
  name: Scalars["String"];
  pokemon: PokemonWithMoveConnection;
  power?: Maybe<Scalars["Int"]>;
  pp?: Maybe<Scalars["Int"]>;
  /** Move slug */
  slug: Scalars["String"];
  target: MoveTarget;
  type: Type;
};

export type MovePokemonArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type MoveConnection = {
  __typename?: "MoveConnection";
  edges?: Maybe<Array<MoveEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type MoveEdge = {
  __typename?: "MoveEdge";
  cursor: Scalars["ID"];
  node: Move;
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
  createAbility: Ability;
  createEggGroup: EggGroup;
  createItem: Item;
  createMove: Move;
  createTeam: Team;
  createType: Type;
  removeAbility: Ability;
  removeEggGroup: EggGroup;
  removeItem: Item;
  removeMove: Move;
  removeTeam: Team;
  removeType: RemovedType;
  updateAbility: Ability;
  updateEggGroup: EggGroup;
  updateItem: Item;
  updateMove: Move;
  updateTeam: Team;
  updateType: Type;
};

export type MutationCreateAbilityArgs = {
  createAbilityInput: CreateAbilityInput;
};

export type MutationCreateEggGroupArgs = {
  createEggGroupInput: CreateEggGroupInput;
};

export type MutationCreateItemArgs = {
  createItemInput: CreateItemInput;
};

export type MutationCreateMoveArgs = {
  createMoveInput: CreateMoveInput;
};

export type MutationCreateTeamArgs = {
  createTeamInput: CreateTeamInput;
};

export type MutationCreateTypeArgs = {
  createTypeInput: CreateTypeInput;
};

export type MutationRemoveAbilityArgs = {
  id: Scalars["ID"];
};

export type MutationRemoveEggGroupArgs = {
  id: Scalars["ID"];
};

export type MutationRemoveItemArgs = {
  id: Scalars["ID"];
};

export type MutationRemoveMoveArgs = {
  id: Scalars["ID"];
};

export type MutationRemoveTeamArgs = {
  id: Scalars["ID"];
};

export type MutationRemoveTypeArgs = {
  id: Scalars["ID"];
};

export type MutationUpdateAbilityArgs = {
  updateAbilityInput: UpdateAbilityInput;
};

export type MutationUpdateEggGroupArgs = {
  updateEggGroupInput: UpdateEggGroupInput;
};

export type MutationUpdateItemArgs = {
  updateItemInput: UpdateItemInput;
};

export type MutationUpdateMoveArgs = {
  updateMoveInput: UpdateMoveInput;
};

export type MutationUpdateTeamArgs = {
  updateTeamInput: UpdateTeamInput;
};

export type MutationUpdateTypeArgs = {
  updateTypeInput: UpdateTypeInput;
};

export type Node = {
  id: Scalars["ID"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["ID"]>;
  hasNextPage: Scalars["Boolean"];
};

export type Pokemon = Node & {
  __typename?: "Pokemon";
  abilities: PokemonAbilityConnection;
  attack: Scalars["Int"];
  defense: Scalars["Int"];
  forms: PokemonFormConnection;
  height: Scalars["Int"];
  hp: Scalars["Int"];
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  moves: PokemonMoveConnection;
  slug: Scalars["String"];
  specialAttack: Scalars["Int"];
  specialDefense: Scalars["Int"];
  species: PokemonSpecies;
  speed: Scalars["Int"];
  sprites: PokemonSprites;
  types: PokemonTypeConnection;
  weight: Scalars["Int"];
};

export type PokemonFormsArgs = {
  isBattleOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type PokemonAbilityConnection = {
  __typename?: "PokemonAbilityConnection";
  edges?: Maybe<Array<PokemonAbilityEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonAbilityEdge = {
  __typename?: "PokemonAbilityEdge";
  cursor: Scalars["ID"];
  isHidden: Scalars["Boolean"];
  node: Ability;
  slot: Scalars["Int"];
};

export type PokemonConnection = {
  __typename?: "PokemonConnection";
  edges?: Maybe<Array<PokemonEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonEdge = {
  __typename?: "PokemonEdge";
  cursor: Scalars["ID"];
  node: Pokemon;
};

export type PokemonForm = Node & {
  __typename?: "PokemonForm";
  formName?: Maybe<Scalars["String"]>;
  formSlug?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isBattleOnly: Scalars["Boolean"];
  isDefault: Scalars["Boolean"];
  name: Scalars["String"];
  pokemon: Pokemon;
  slug: Scalars["String"];
  sprites: PokemonSprites;
  types: PokemonFormTypeConnection;
};

export type PokemonFormConnection = {
  __typename?: "PokemonFormConnection";
  edges?: Maybe<Array<PokemonFormEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonFormEdge = {
  __typename?: "PokemonFormEdge";
  cursor: Scalars["ID"];
  node: PokemonForm;
};

export type PokemonFormTypeConnection = {
  __typename?: "PokemonFormTypeConnection";
  edges?: Maybe<Array<PokemonFormTypeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonFormTypeEdge = {
  __typename?: "PokemonFormTypeEdge";
  cursor: Scalars["ID"];
  node: Type;
  slot: Scalars["Int"];
};

export type PokemonFormWithTypeConnection = {
  __typename?: "PokemonFormWithTypeConnection";
  edges?: Maybe<Array<PokemonFormWithTypeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonFormWithTypeEdge = {
  __typename?: "PokemonFormWithTypeEdge";
  cursor: Scalars["ID"];
  node: PokemonForm;
  slot: Scalars["Int"];
};

export type PokemonMoveConnection = {
  __typename?: "PokemonMoveConnection";
  edges?: Maybe<Array<PokemonMoveEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonMoveEdge = {
  __typename?: "PokemonMoveEdge";
  cursor: Scalars["ID"];
  learnMethod: MoveLearnMethod;
  levelLearnedAt: Scalars["Int"];
  node: Move;
};

export type PokemonSpecies = Node & {
  __typename?: "PokemonSpecies";
  color: Color;
  description?: Maybe<Scalars["String"]>;
  eggGroups: EggGroupConnection;
  genus: Scalars["String"];
  habitat?: Maybe<Habitat>;
  id: Scalars["ID"];
  isBaby: Scalars["Boolean"];
  isLegendary: Scalars["Boolean"];
  isMythical: Scalars["Boolean"];
  name: Scalars["String"];
  pokedexId: Scalars["Int"];
  shape?: Maybe<Shape>;
  slug: Scalars["String"];
  varieties: PokemonConnection;
};

export type PokemonSpeciesConnection = {
  __typename?: "PokemonSpeciesConnection";
  edges?: Maybe<Array<PokemonSpeciesEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonSpeciesEdge = {
  __typename?: "PokemonSpeciesEdge";
  cursor: Scalars["ID"];
  node: PokemonSpecies;
};

export type PokemonSprite = Node & {
  __typename?: "PokemonSprite";
  id: Scalars["ID"];
  path: Scalars["String"];
};

export type PokemonSprites = {
  __typename?: "PokemonSprites";
  frontDefault?: Maybe<PokemonSprite>;
  frontFemale?: Maybe<PokemonSprite>;
  frontFemaleShiny?: Maybe<PokemonSprite>;
  frontShiny?: Maybe<PokemonSprite>;
};

export type PokemonTypeConnection = {
  __typename?: "PokemonTypeConnection";
  edges?: Maybe<Array<PokemonTypeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonTypeEdge = {
  __typename?: "PokemonTypeEdge";
  cursor: Scalars["ID"];
  node: Type;
  slot: Scalars["Int"];
};

export type PokemonWithAbilityConnection = {
  __typename?: "PokemonWithAbilityConnection";
  edges?: Maybe<Array<PokemonWithAbilityEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonWithAbilityEdge = {
  __typename?: "PokemonWithAbilityEdge";
  cursor: Scalars["ID"];
  isHidden: Scalars["Boolean"];
  node: Pokemon;
  slot: Scalars["Int"];
};

export type PokemonWithMoveConnection = {
  __typename?: "PokemonWithMoveConnection";
  edges?: Maybe<Array<PokemonWithMoveEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonWithMoveEdge = {
  __typename?: "PokemonWithMoveEdge";
  cursor: Scalars["ID"];
  learnMethod: MoveLearnMethod;
  levelLearnedAt: Scalars["Int"];
  node: Pokemon;
};

export type PokemonWithTypeConnection = {
  __typename?: "PokemonWithTypeConnection";
  edges?: Maybe<Array<PokemonWithTypeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PokemonWithTypeEdge = {
  __typename?: "PokemonWithTypeEdge";
  cursor: Scalars["ID"];
  node: Pokemon;
  slot: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  abilities: AbilityConnection;
  ability?: Maybe<Ability>;
  eggGroup?: Maybe<EggGroup>;
  eggGroups: EggGroupConnection;
  item?: Maybe<Item>;
  items: ItemConnection;
  me?: Maybe<Trainer>;
  move?: Maybe<Move>;
  moves: MoveConnection;
  node?: Maybe<Node>;
  pokemon: PokemonConnection;
  pokemonOne?: Maybe<Pokemon>;
  pokemonSpecies: PokemonSpeciesConnection;
  pokemonSpeciesOne?: Maybe<PokemonSpecies>;
  team?: Maybe<Team>;
  teams: TeamConnection;
  type?: Maybe<Type>;
  types: TypeConnection;
};

export type QueryAbilitiesArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type QueryAbilityArgs = {
  id: Scalars["ID"];
};

export type QueryEggGroupArgs = {
  id: Scalars["ID"];
};

export type QueryEggGroupsArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type QueryItemArgs = {
  id: Scalars["ID"];
};

export type QueryItemsArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type QueryMoveArgs = {
  id: Scalars["ID"];
};

export type QueryMovesArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type QueryPokemonArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type QueryPokemonOneArgs = {
  id: Scalars["ID"];
};

export type QueryPokemonSpeciesArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type QueryPokemonSpeciesOneArgs = {
  id: Scalars["ID"];
};

export type QueryTeamArgs = {
  id: Scalars["ID"];
};

export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type QueryTypeArgs = {
  id: Scalars["ID"];
};

export type QueryTypesArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type RemovedType = {
  __typename?: "RemovedType";
  forms: PokemonFormWithTypeConnection;
  id: Scalars["ID"];
  moves: MoveConnection;
  name: Scalars["String"];
  pokemon: PokemonWithTypeConnection;
  slug: Scalars["String"];
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
  createdAt: Scalars["DateTime"];
  createdBy: Trainer;
  /** Team ID */
  id: Scalars["ID"];
  members: TeamMemberConnection;
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type TeamConnection = {
  __typename?: "TeamConnection";
  edges?: Maybe<Array<TeamEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TeamEdge = {
  __typename?: "TeamEdge";
  cursor: Scalars["ID"];
  node: Team;
};

export type TeamMember = Node & {
  __typename?: "TeamMember";
  createdAt: Scalars["DateTime"];
  /** Team member ID */
  id: Scalars["ID"];
  moves: TeamMemberMoveConnection;
  pokemon: Pokemon;
  slot: Scalars["Int"];
  updatedAt: Scalars["DateTime"];
};

export type TeamMemberConnection = {
  __typename?: "TeamMemberConnection";
  edges?: Maybe<Array<TeamMemberEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TeamMemberEdge = {
  __typename?: "TeamMemberEdge";
  cursor: Scalars["ID"];
  node: TeamMember;
};

export type TeamMemberMove = Node & {
  __typename?: "TeamMemberMove";
  createdAt: Scalars["DateTime"];
  /** Team member move ID */
  id: Scalars["ID"];
  move: Move;
  slot: Scalars["Int"];
  updatedAt: Scalars["DateTime"];
};

export type TeamMemberMoveConnection = {
  __typename?: "TeamMemberMoveConnection";
  edges?: Maybe<Array<TeamMemberMoveEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TeamMemberMoveEdge = {
  __typename?: "TeamMemberMoveEdge";
  cursor: Scalars["ID"];
  node: TeamMemberMove;
};

export type Trainer = Node & {
  __typename?: "Trainer";
  /** Trainer ID */
  id: Scalars["ID"];
  picture?: Maybe<Scalars["String"]>;
  username: Scalars["String"];
};

export type Type = Node & {
  __typename?: "Type";
  doubleDamageFrom: Array<Type>;
  doubleDamageTo: Array<Type>;
  forms: PokemonFormWithTypeConnection;
  halfDamageFrom: Array<Type>;
  halfDamageTo: Array<Type>;
  id: Scalars["ID"];
  moves: MoveConnection;
  name: Scalars["String"];
  noDamageFrom: Array<Type>;
  noDamageTo: Array<Type>;
  pokemon: PokemonWithTypeConnection;
  slug: Scalars["String"];
};

export type TypeMovesArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type TypePokemonArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
};

export type TypeConnection = {
  __typename?: "TypeConnection";
  edges?: Maybe<Array<TypeEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TypeEdge = {
  __typename?: "TypeEdge";
  cursor: Scalars["ID"];
  node: Type;
};

export type UpdateAbilityInput = {
  effect?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type UpdateEggGroupInput = {
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type UpdateItemInput = {
  attributes?: InputMaybe<Array<ItemAttribute>>;
  category?: InputMaybe<ItemCategory>;
  cost?: InputMaybe<Scalars["Int"]>;
  effect?: InputMaybe<Scalars["String"]>;
  flingEffect?: InputMaybe<Scalars["String"]>;
  flingPower?: InputMaybe<Scalars["Int"]>;
  /** Item ID */
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  /** Item slug */
  slug?: InputMaybe<Scalars["String"]>;
  sprite?: InputMaybe<Scalars["String"]>;
};

export type UpdateMoveInput = {
  accuracy?: InputMaybe<Scalars["Int"]>;
  damageClass?: InputMaybe<DamageClass>;
  effect?: InputMaybe<Scalars["String"]>;
  effectChance?: InputMaybe<Scalars["Int"]>;
  /** Move ID */
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  power?: InputMaybe<Scalars["Int"]>;
  pp?: InputMaybe<Scalars["Int"]>;
  /** Move slug */
  slug?: InputMaybe<Scalars["String"]>;
  target?: InputMaybe<MoveTarget>;
  typeId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateTeamInput = {
  id: Scalars["ID"];
  members?: InputMaybe<Array<UpdateTeamMemberInput>>;
  name?: InputMaybe<Scalars["String"]>;
};

export type UpdateTeamMemberInput = {
  id?: InputMaybe<Scalars["ID"]>;
  moves?: InputMaybe<Array<UpdateTeamMemberMoveInput>>;
  pokemonId?: InputMaybe<Scalars["String"]>;
  slot?: InputMaybe<Scalars["Int"]>;
};

export type UpdateTeamMemberMoveInput = {
  id?: InputMaybe<Scalars["ID"]>;
  moveId?: InputMaybe<Scalars["String"]>;
  slot?: InputMaybe<Scalars["Int"]>;
};

export type UpdateTypeInput = {
  doubleDamageFrom?: InputMaybe<Array<Scalars["ID"]>>;
  doubleDamageTo?: InputMaybe<Array<Scalars["ID"]>>;
  halfDamageFrom?: InputMaybe<Array<Scalars["ID"]>>;
  halfDamageTo?: InputMaybe<Array<Scalars["ID"]>>;
  id: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  noDamageFrom?: InputMaybe<Array<Scalars["ID"]>>;
  noDamageTo?: InputMaybe<Array<Scalars["ID"]>>;
  slug?: InputMaybe<Scalars["String"]>;
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
  name: string;
  slug: string;
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
  name: string;
  slug: string;
  accuracy?: number | null;
  damageClass: DamageClass;
  effect?: string | null;
  effectChance?: number | null;
  power?: number | null;
  pp?: number | null;
  target: MoveTarget;
  type: { __typename?: "Type"; id: string; name: string; slug: string };
};

export type PokemonMoveFieldsFragment = {
  __typename?: "PokemonMoveEdge";
  learnMethod: MoveLearnMethod;
  levelLearnedAt: number;
  id: string;
  node: {
    __typename?: "Move";
    id: string;
    name: string;
    slug: string;
    accuracy?: number | null;
    damageClass: DamageClass;
    effect?: string | null;
    effectChance?: number | null;
    power?: number | null;
    pp?: number | null;
    target: MoveTarget;
    type: { __typename?: "Type"; id: string; name: string; slug: string };
  };
};

export type TeamMemberMoveFieldsFragment = {
  __typename?: "TeamMemberMove";
  id: string;
  slot: number;
  createdAt: any;
  updatedAt: any;
  move: {
    __typename?: "Move";
    id: string;
    name: string;
    slug: string;
    accuracy?: number | null;
    damageClass: DamageClass;
    effect?: string | null;
    effectChance?: number | null;
    power?: number | null;
    pp?: number | null;
    target: MoveTarget;
    type: { __typename?: "Type"; id: string; name: string; slug: string };
  };
};

export type PokemonFieldsFragment = {
  __typename?: "Pokemon";
  id: string;
  slug: string;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  hp: number;
  isDefault: boolean;
  types: {
    __typename?: "PokemonTypeConnection";
    edges?: Array<{
      __typename?: "PokemonTypeEdge";
      slot: number;
      node: { __typename?: "Type"; id: string; name: string; slug: string };
    }> | null;
  };
  forms: {
    __typename?: "PokemonFormConnection";
    edges?: Array<{
      __typename?: "PokemonFormEdge";
      node: {
        __typename?: "PokemonForm";
        id: string;
        formName?: string | null;
        isDefault: boolean;
        isBattleOnly: boolean;
        name: string;
        slug: string;
      };
    }> | null;
  };
  species: {
    __typename?: "PokemonSpecies";
    id: string;
    name: string;
    slug: string;
    color: Color;
    description?: string | null;
    genus: string;
    habitat?: Habitat | null;
    isBaby: boolean;
    isLegendary: boolean;
    isMythical: boolean;
    pokedexId: number;
    shape?: Shape | null;
  };
  sprites: {
    __typename?: "PokemonSprites";
    frontDefault?: { __typename?: "PokemonSprite"; path: string } | null;
  };
};

export type PokemonFormFieldsFragment = {
  __typename?: "PokemonForm";
  id: string;
  formName?: string | null;
  isDefault: boolean;
  isBattleOnly: boolean;
  name: string;
  slug: string;
};

export type PokemonSpeciesFieldsFragment = {
  __typename?: "PokemonSpecies";
  id: string;
  name: string;
  slug: string;
  color: Color;
  description?: string | null;
  genus: string;
  habitat?: Habitat | null;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  pokedexId: number;
  shape?: Shape | null;
};

export type TeamFieldsFragment = {
  __typename?: "Team";
  id: string;
  name: string;
  createdAt: any;
  createdBy: {
    __typename?: "Trainer";
    id: string;
    username: string;
    picture?: string | null;
  };
  members: {
    __typename?: "TeamMemberConnection";
    edges?: Array<{
      __typename?: "TeamMemberEdge";
      node: {
        __typename?: "TeamMember";
        id: string;
        slot: number;
        pokemon: {
          __typename?: "Pokemon";
          id: string;
          slug: string;
          attack: number;
          defense: number;
          specialAttack: number;
          specialDefense: number;
          speed: number;
          hp: number;
          isDefault: boolean;
          species: {
            __typename?: "PokemonSpecies";
            name: string;
            pokedexId: number;
            id: string;
            slug: string;
            color: Color;
            description?: string | null;
            genus: string;
            habitat?: Habitat | null;
            isBaby: boolean;
            isLegendary: boolean;
            isMythical: boolean;
            shape?: Shape | null;
          };
          types: {
            __typename?: "PokemonTypeConnection";
            edges?: Array<{
              __typename?: "PokemonTypeEdge";
              slot: number;
              node: {
                __typename?: "Type";
                id: string;
                name: string;
                slug: string;
              };
            }> | null;
          };
          forms: {
            __typename?: "PokemonFormConnection";
            edges?: Array<{
              __typename?: "PokemonFormEdge";
              node: {
                __typename?: "PokemonForm";
                id: string;
                formName?: string | null;
                isDefault: boolean;
                isBattleOnly: boolean;
                name: string;
                slug: string;
              };
            }> | null;
          };
          sprites: {
            __typename?: "PokemonSprites";
            frontDefault?: {
              __typename?: "PokemonSprite";
              path: string;
            } | null;
          };
        };
      };
    }> | null;
  };
};

export type TeamMemberFieldsFragment = {
  __typename?: "TeamMember";
  id: string;
  slot: number;
  pokemon: {
    __typename?: "Pokemon";
    id: string;
    slug: string;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    hp: number;
    isDefault: boolean;
    species: {
      __typename?: "PokemonSpecies";
      name: string;
      pokedexId: number;
      id: string;
      slug: string;
      color: Color;
      description?: string | null;
      genus: string;
      habitat?: Habitat | null;
      isBaby: boolean;
      isLegendary: boolean;
      isMythical: boolean;
      shape?: Shape | null;
    };
    types: {
      __typename?: "PokemonTypeConnection";
      edges?: Array<{
        __typename?: "PokemonTypeEdge";
        slot: number;
        node: { __typename?: "Type"; id: string; name: string; slug: string };
      }> | null;
    };
    forms: {
      __typename?: "PokemonFormConnection";
      edges?: Array<{
        __typename?: "PokemonFormEdge";
        node: {
          __typename?: "PokemonForm";
          id: string;
          formName?: string | null;
          isDefault: boolean;
          isBattleOnly: boolean;
          name: string;
          slug: string;
        };
      }> | null;
    };
    sprites: {
      __typename?: "PokemonSprites";
      frontDefault?: { __typename?: "PokemonSprite"; path: string } | null;
    };
  };
};

export type TrainerFieldsFragment = {
  __typename?: "Trainer";
  id: string;
  username: string;
  picture?: string | null;
};

export type TypeFieldsFragment = {
  __typename?: "Type";
  id: string;
  name: string;
  slug: string;
};

export type CreateTeamMutationVariables = Exact<{
  input: CreateTeamInput;
}>;

export type CreateTeamMutation = {
  __typename?: "Mutation";
  createTeam: {
    __typename?: "Team";
    id: string;
    name: string;
    createdAt: any;
    createdBy: {
      __typename?: "Trainer";
      id: string;
      username: string;
      picture?: string | null;
    };
    members: {
      __typename?: "TeamMemberConnection";
      edges?: Array<{
        __typename?: "TeamMemberEdge";
        node: {
          __typename?: "TeamMember";
          id: string;
          slot: number;
          pokemon: {
            __typename?: "Pokemon";
            id: string;
            slug: string;
            attack: number;
            defense: number;
            specialAttack: number;
            specialDefense: number;
            speed: number;
            hp: number;
            isDefault: boolean;
            species: {
              __typename?: "PokemonSpecies";
              name: string;
              pokedexId: number;
              id: string;
              slug: string;
              color: Color;
              description?: string | null;
              genus: string;
              habitat?: Habitat | null;
              isBaby: boolean;
              isLegendary: boolean;
              isMythical: boolean;
              shape?: Shape | null;
            };
            types: {
              __typename?: "PokemonTypeConnection";
              edges?: Array<{
                __typename?: "PokemonTypeEdge";
                slot: number;
                node: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                };
              }> | null;
            };
            forms: {
              __typename?: "PokemonFormConnection";
              edges?: Array<{
                __typename?: "PokemonFormEdge";
                node: {
                  __typename?: "PokemonForm";
                  id: string;
                  formName?: string | null;
                  isDefault: boolean;
                  isBattleOnly: boolean;
                  name: string;
                  slug: string;
                };
              }> | null;
            };
            sprites: {
              __typename?: "PokemonSprites";
              frontDefault?: {
                __typename?: "PokemonSprite";
                path: string;
              } | null;
            };
          };
        };
      }> | null;
    };
  };
};

export type RemoveTeamMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type RemoveTeamMutation = {
  __typename?: "Mutation";
  removeTeam: {
    __typename?: "Team";
    id: string;
    name: string;
    createdAt: any;
    createdBy: {
      __typename?: "Trainer";
      id: string;
      username: string;
      picture?: string | null;
    };
    members: {
      __typename?: "TeamMemberConnection";
      edges?: Array<{
        __typename?: "TeamMemberEdge";
        node: {
          __typename?: "TeamMember";
          id: string;
          slot: number;
          pokemon: {
            __typename?: "Pokemon";
            id: string;
            slug: string;
            attack: number;
            defense: number;
            specialAttack: number;
            specialDefense: number;
            speed: number;
            hp: number;
            isDefault: boolean;
            species: {
              __typename?: "PokemonSpecies";
              name: string;
              pokedexId: number;
              id: string;
              slug: string;
              color: Color;
              description?: string | null;
              genus: string;
              habitat?: Habitat | null;
              isBaby: boolean;
              isLegendary: boolean;
              isMythical: boolean;
              shape?: Shape | null;
            };
            types: {
              __typename?: "PokemonTypeConnection";
              edges?: Array<{
                __typename?: "PokemonTypeEdge";
                slot: number;
                node: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                };
              }> | null;
            };
            forms: {
              __typename?: "PokemonFormConnection";
              edges?: Array<{
                __typename?: "PokemonFormEdge";
                node: {
                  __typename?: "PokemonForm";
                  id: string;
                  formName?: string | null;
                  isDefault: boolean;
                  isBattleOnly: boolean;
                  name: string;
                  slug: string;
                };
              }> | null;
            };
            sprites: {
              __typename?: "PokemonSprites";
              frontDefault?: {
                __typename?: "PokemonSprite";
                path: string;
              } | null;
            };
          };
        };
      }> | null;
    };
  };
};

export type UpdateTeamMutationVariables = Exact<{
  input: UpdateTeamInput;
}>;

export type UpdateTeamMutation = {
  __typename?: "Mutation";
  updateTeam: {
    __typename?: "Team";
    id: string;
    name: string;
    createdAt: any;
    createdBy: {
      __typename?: "Trainer";
      id: string;
      username: string;
      picture?: string | null;
    };
    members: {
      __typename?: "TeamMemberConnection";
      edges?: Array<{
        __typename?: "TeamMemberEdge";
        node: {
          __typename?: "TeamMember";
          id: string;
          slot: number;
          pokemon: {
            __typename?: "Pokemon";
            id: string;
            slug: string;
            attack: number;
            defense: number;
            specialAttack: number;
            specialDefense: number;
            speed: number;
            hp: number;
            isDefault: boolean;
            species: {
              __typename?: "PokemonSpecies";
              name: string;
              pokedexId: number;
              id: string;
              slug: string;
              color: Color;
              description?: string | null;
              genus: string;
              habitat?: Habitat | null;
              isBaby: boolean;
              isLegendary: boolean;
              isMythical: boolean;
              shape?: Shape | null;
            };
            types: {
              __typename?: "PokemonTypeConnection";
              edges?: Array<{
                __typename?: "PokemonTypeEdge";
                slot: number;
                node: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                };
              }> | null;
            };
            forms: {
              __typename?: "PokemonFormConnection";
              edges?: Array<{
                __typename?: "PokemonFormEdge";
                node: {
                  __typename?: "PokemonForm";
                  id: string;
                  formName?: string | null;
                  isDefault: boolean;
                  isBattleOnly: boolean;
                  name: string;
                  slug: string;
                };
              }> | null;
            };
            sprites: {
              __typename?: "PokemonSprites";
              frontDefault?: {
                __typename?: "PokemonSprite";
                path: string;
              } | null;
            };
          };
        };
      }> | null;
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
      node: {
        __typename?: "Team";
        id: string;
        name: string;
        createdAt: any;
        createdBy: {
          __typename?: "Trainer";
          id: string;
          username: string;
          picture?: string | null;
        };
        members: {
          __typename?: "TeamMemberConnection";
          edges?: Array<{
            __typename?: "TeamMemberEdge";
            node: {
              __typename?: "TeamMember";
              id: string;
              slot: number;
              pokemon: {
                __typename?: "Pokemon";
                id: string;
                slug: string;
                attack: number;
                defense: number;
                specialAttack: number;
                specialDefense: number;
                speed: number;
                hp: number;
                isDefault: boolean;
                species: {
                  __typename?: "PokemonSpecies";
                  name: string;
                  pokedexId: number;
                  id: string;
                  slug: string;
                  color: Color;
                  description?: string | null;
                  genus: string;
                  habitat?: Habitat | null;
                  isBaby: boolean;
                  isLegendary: boolean;
                  isMythical: boolean;
                  shape?: Shape | null;
                };
                types: {
                  __typename?: "PokemonTypeConnection";
                  edges?: Array<{
                    __typename?: "PokemonTypeEdge";
                    slot: number;
                    node: {
                      __typename?: "Type";
                      id: string;
                      name: string;
                      slug: string;
                    };
                  }> | null;
                };
                forms: {
                  __typename?: "PokemonFormConnection";
                  edges?: Array<{
                    __typename?: "PokemonFormEdge";
                    node: {
                      __typename?: "PokemonForm";
                      id: string;
                      formName?: string | null;
                      isDefault: boolean;
                      isBattleOnly: boolean;
                      name: string;
                      slug: string;
                    };
                  }> | null;
                };
                sprites: {
                  __typename?: "PokemonSprites";
                  frontDefault?: {
                    __typename?: "PokemonSprite";
                    path: string;
                  } | null;
                };
              };
            };
          }> | null;
        };
      };
    }> | null;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "Trainer";
    id: string;
    username: string;
    picture?: string | null;
  } | null;
};

export type TeamByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type TeamByIdQuery = {
  __typename?: "Query";
  team?: {
    __typename?: "Team";
    id: string;
    name: string;
    createdAt: any;
    createdBy: {
      __typename?: "Trainer";
      id: string;
      username: string;
      picture?: string | null;
    };
    members: {
      __typename?: "TeamMemberConnection";
      edges?: Array<{
        __typename?: "TeamMemberEdge";
        node: {
          __typename?: "TeamMember";
          id: string;
          slot: number;
          pokemon: {
            __typename?: "Pokemon";
            id: string;
            slug: string;
            attack: number;
            defense: number;
            specialAttack: number;
            specialDefense: number;
            speed: number;
            hp: number;
            isDefault: boolean;
            species: {
              __typename?: "PokemonSpecies";
              name: string;
              pokedexId: number;
              id: string;
              slug: string;
              color: Color;
              description?: string | null;
              genus: string;
              habitat?: Habitat | null;
              isBaby: boolean;
              isLegendary: boolean;
              isMythical: boolean;
              shape?: Shape | null;
            };
            types: {
              __typename?: "PokemonTypeConnection";
              edges?: Array<{
                __typename?: "PokemonTypeEdge";
                slot: number;
                node: {
                  __typename?: "Type";
                  id: string;
                  name: string;
                  slug: string;
                };
              }> | null;
            };
            forms: {
              __typename?: "PokemonFormConnection";
              edges?: Array<{
                __typename?: "PokemonFormEdge";
                node: {
                  __typename?: "PokemonForm";
                  id: string;
                  formName?: string | null;
                  isDefault: boolean;
                  isBattleOnly: boolean;
                  name: string;
                  slug: string;
                };
              }> | null;
            };
            sprites: {
              __typename?: "PokemonSprites";
              frontDefault?: {
                __typename?: "PokemonSprite";
                path: string;
              } | null;
            };
          };
        };
      }> | null;
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
    name
    slug
    cost
    flingPower
    flingEffect
    effect
    sprite
    category
    attributes
  }
`;
export const TypeFieldsFragmentDoc = gql`
  fragment typeFields on Type {
    id
    name
    slug
  }
`;
export const MoveFieldsFragmentDoc = gql`
  fragment moveFields on Move {
    id
    name
    slug
    accuracy
    damageClass
    effect
    effectChance
    power
    pp
    target
    type {
      ...typeFields
    }
  }
  ${TypeFieldsFragmentDoc}
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
export const TeamMemberMoveFieldsFragmentDoc = gql`
  fragment teamMemberMoveFields on TeamMemberMove {
    id
    slot
    createdAt
    updatedAt
    move {
      ...moveFields
    }
  }
  ${MoveFieldsFragmentDoc}
`;
export const TrainerFieldsFragmentDoc = gql`
  fragment trainerFields on Trainer {
    id
    username
    picture
  }
`;
export const PokemonFormFieldsFragmentDoc = gql`
  fragment pokemonFormFields on PokemonForm {
    id
    formName
    isDefault
    isBattleOnly
    name
    slug
  }
`;
export const PokemonSpeciesFieldsFragmentDoc = gql`
  fragment pokemonSpeciesFields on PokemonSpecies {
    id
    name
    slug
    color
    description
    genus
    habitat
    isBaby
    isLegendary
    isMythical
    pokedexId
    shape
  }
`;
export const PokemonFieldsFragmentDoc = gql`
  fragment pokemonFields on Pokemon {
    id
    slug
    attack
    defense
    specialAttack
    specialDefense
    speed
    hp
    isDefault
    types {
      edges {
        slot
        node {
          ...typeFields
        }
      }
    }
    forms {
      edges {
        node {
          ...pokemonFormFields
        }
      }
    }
    species {
      ...pokemonSpeciesFields
    }
    sprites {
      frontDefault {
        path
      }
    }
  }
  ${TypeFieldsFragmentDoc}
  ${PokemonFormFieldsFragmentDoc}
  ${PokemonSpeciesFieldsFragmentDoc}
`;
export const TeamMemberFieldsFragmentDoc = gql`
  fragment teamMemberFields on TeamMember {
    id
    slot
    pokemon {
      ...pokemonFields
      species {
        name
        pokedexId
      }
    }
  }
  ${PokemonFieldsFragmentDoc}
`;
export const TeamFieldsFragmentDoc = gql`
  fragment teamFields on Team {
    id
    name
    createdAt
    createdBy {
      ...trainerFields
    }
    members {
      edges {
        node {
          ...teamMemberFields
        }
      }
    }
  }
  ${TrainerFieldsFragmentDoc}
  ${TeamMemberFieldsFragmentDoc}
`;
export const CreateTeamDocument = gql`
  mutation CreateTeam($input: CreateTeamInput!) {
    createTeam(createTeamInput: $input) {
      ...teamFields
    }
  }
  ${TeamFieldsFragmentDoc}
`;
export const RemoveTeamDocument = gql`
  mutation RemoveTeam($id: ID!) {
    removeTeam(id: $id) {
      ...teamFields
    }
  }
  ${TeamFieldsFragmentDoc}
`;
export const UpdateTeamDocument = gql`
  mutation UpdateTeam($input: UpdateTeamInput!) {
    updateTeam(updateTeamInput: $input) {
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
export const MeDocument = gql`
  query Me {
    me {
      id
      username
      picture
    }
  }
`;
export const TeamByIdDocument = gql`
  query TeamById($id: ID!) {
    team(id: $id) {
      ...teamFields
    }
  }
  ${TeamFieldsFragmentDoc}
`;
export type Requester<C = {}> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R>;
export function getSdk<C>(requester: Requester<C>) {
  return {
    CreateTeam(
      variables: CreateTeamMutationVariables,
      options?: C
    ): Promise<CreateTeamMutation> {
      return requester<CreateTeamMutation, CreateTeamMutationVariables>(
        CreateTeamDocument,
        variables,
        options
      );
    },
    RemoveTeam(
      variables: RemoveTeamMutationVariables,
      options?: C
    ): Promise<RemoveTeamMutation> {
      return requester<RemoveTeamMutation, RemoveTeamMutationVariables>(
        RemoveTeamDocument,
        variables,
        options
      );
    },
    UpdateTeam(
      variables: UpdateTeamMutationVariables,
      options?: C
    ): Promise<UpdateTeamMutation> {
      return requester<UpdateTeamMutation, UpdateTeamMutationVariables>(
        UpdateTeamDocument,
        variables,
        options
      );
    },
    AllTeams(
      variables?: AllTeamsQueryVariables,
      options?: C
    ): Promise<AllTeamsQuery> {
      return requester<AllTeamsQuery, AllTeamsQueryVariables>(
        AllTeamsDocument,
        variables,
        options
      );
    },
    Me(variables?: MeQueryVariables, options?: C): Promise<MeQuery> {
      return requester<MeQuery, MeQueryVariables>(
        MeDocument,
        variables,
        options
      );
    },
    TeamById(
      variables: TeamByIdQueryVariables,
      options?: C
    ): Promise<TeamByIdQuery> {
      return requester<TeamByIdQuery, TeamByIdQueryVariables>(
        TeamByIdDocument,
        variables,
        options
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
