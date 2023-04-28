import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./pokemon.service";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import {FormsModule} from "@angular/forms";
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const routes : Routes = [
  {path : "pokemons/:id", component : DetailPokemonComponent},
  {path : "edit/pokemon/:id", component : EditPokemonComponent},
  {path : "pokemons", component : ListPokemonComponent}
]

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
