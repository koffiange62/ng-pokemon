import {Component} from '@angular/core';
import {Pokemon} from "../Pokemon";
import {POKEMONS} from "../mock-pokmon-list";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent{
  pokemonList : Pokemon[] = POKEMONS;

  constructor(private router : Router) {
  }

  goToPoKemon(pokemon : Pokemon) : void {
    this.router.navigate(["/pokemons", pokemon.id]);
  }
}
