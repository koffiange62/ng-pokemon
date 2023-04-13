import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./Pokemon";
import {POKEMONS} from "./mock-pokmon-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon [];

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon : Pokemon) : void {
    console.log(`Vous avez selctionné ${pokemon.name}`);
  }

}
