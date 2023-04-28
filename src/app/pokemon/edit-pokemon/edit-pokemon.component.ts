import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../Pokemon";

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit{

  pokemon : Pokemon | undefined;

  constructor(
    private route : ActivatedRoute,
    private pokemonService : PokemonService) {
  }

  ngOnInit(): void {
    let pokemonId : string|null = this.route.snapshot.paramMap.get("id");
    if (pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    } else {
      this.pokemon = undefined;
    }
  }

}
