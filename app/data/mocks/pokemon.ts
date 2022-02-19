import { Pokemon } from "../pokemon";
import { electric, fire, ghost, poison } from "./types";

export const charmander: Pokemon = {
  name: "Charmander",
  pokedexId: 4,
  sprite: "pokemon/4.png",
  types: [{ ...fire, slot: 1 }],
  hp: 39,
  attack: 52,
  defense: 43,
  specialAttack: 60,
  specialDefense: 50,
  speed: 65,
};

export const pikachu: Pokemon = {
  name: "Pikachu",
  pokedexId: 25,
  sprite: "pokemon/25.png",
  hp: 35,
  attack: 55,
  defense: 40,
  specialAttack: 50,
  specialDefense: 50,
  speed: 90,
  types: [{ ...electric, slot: 1 }],
};

export const haunter: Pokemon = {
  name: "Haunter",
  pokedexId: 93,
  sprite: "pokemon/93.png",
  hp: 45,
  attack: 50,
  defense: 45,
  specialAttack: 115,
  specialDefense: 55,
  speed: 95,
  types: [
    { ...ghost, slot: 1 },
    { ...poison, slot: 2 },
  ],
};
