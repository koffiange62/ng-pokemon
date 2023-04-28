import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../Pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit{
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private pokemonService : PokemonService) {
  }

  pokemon : Pokemon|undefined;

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get("id");
    if (pokemonId){
      let id = +pokemonId;
      this.pokemon = this.pokemonService.getPokemonById(id);
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  goToPokemonEdit(){
    this.router.navigate(['/edit/pokemon', this.pokemon?.id]);
  }
}
