import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../Pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon : Pokemon;
  types : string[];

  constructor(private pokemonService : PokemonService,
              private route : Router) {
  }
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType (type : string) : boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event : Event, type : string){
    const isChecked = ($event.target as HTMLInputElement).checked

    if (isChecked){
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type : string){
    if (this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    } else if (this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true;

  }

  onSubmit(){
    this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(value => this.route.navigate(["/pokemons", this.pokemon.id]))
  }

}
