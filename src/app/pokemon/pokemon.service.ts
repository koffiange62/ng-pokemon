import {Injectable} from '@angular/core';
import {Pokemon} from "./Pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable()
export class PokemonService {

  constructor(private http : HttpClient) {
  }

  getPokemonList() : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap(value => this.log(value)),
      catchError(err => this.handleError(err))
    );
  }

  getPokemonById(pokemonId : number) : Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap(response => this.log(response)),
      catchError(err => this.handleError(err))
    );
  }

  updatePokemon(pokemon : Pokemon) : Observable<null> {
    const options = {
      headers : new HttpHeaders({"Content-Type" : "application/json"})
    }

    return this.http.put("api/pokemons", pokemon, options).pipe(
      tap(response => this.log(response)),
      catchError(err => this.handleError(err))
    );
  }

  deletePokemon(pokemonId : Number|undefined) : Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap(response => this.log(response)),
      catchError(err => this.handleError(err))
    );
  }

  private log(response : any){
    console.table(response);
  }

  private handleError(err : any) : Observable<any>{
    console.table(err);
    return of([]);
  }

  getPokemonTypeList(){
    return [
      "Plante", "Feu", "Eau",
      "Insecte", "Normal", "Electrik",
      "Poison", "Fée", "Vol",
      "Combat", "Psy"
    ]
  }
}
