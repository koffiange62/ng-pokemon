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
  selectedPokemon : Pokemon|undefined;

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId : string) : void {
    this.selectedPokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if (this.selectedPokemon){
      console.log(`Pokemon selectioné : ${this.selectedPokemon.name}`)
    } else {
      console.log(`Aucun pokémon trouvé pour l'id : ${pokemonId}`)
    }
  }

}
