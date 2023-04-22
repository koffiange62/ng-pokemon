import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../Pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit{
  pokemonList : Pokemon[];

  constructor(
    private router : Router,
    private pokemonService : PokemonService
  ) {}

  goToPoKemon(pokemon : Pokemon) : void {
    this.router.navigate(["/pokemons", pokemon.id]);
  }

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
  }
}
