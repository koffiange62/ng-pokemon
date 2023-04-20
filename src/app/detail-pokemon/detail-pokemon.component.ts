import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../Pokemon";
import {POKEMONS} from "../mock-pokmon-list";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit{
  constructor(private route : ActivatedRoute, private router : Router) {
  }

  pokemon : Pokemon|undefined;

  ngOnInit(): void {
    const pokemonList : Pokemon[] = POKEMONS;
    const pokemonId = this.route.snapshot.paramMap.get("id");
    if (pokemonId){
      this.pokemon = pokemonList.find(p => p.id == +pokemonId);
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
}
