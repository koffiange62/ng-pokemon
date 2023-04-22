import { Injectable } from '@angular/core';
import {Pokemon} from "./Pokemon";
import {POKEMONS} from "./mock-pokmon-list";

@Injectable()
export class PokemonService {

  getPokemonList() : Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId : number) : Pokemon|undefined {
    return this.getPokemonList().find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(){
    return [
      "plante", "Feu", "Eau",
      "Insecte", "Normal", "Electrik",
      "Poison", "Fée", "Vol",
      "Combat", "Psy"
    ]
  }
}
