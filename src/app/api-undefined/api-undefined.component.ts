import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { compileNgModule } from '@angular/compiler';
import { Pokemon } from './interfaces/poke.interfaces';

@Component({
  selector: 'app-api-undefined',
  templateUrl: './api-undefined.component.html',
  styles: ``
})
export class ApiUndefinedComponent {

  public pokemons: Pokemon[] = [];

  constructor(private apiService: ApiService) {
    this.getPokemonsFromService();
   }

  private getPokemonsFromService(): void{
    this.apiService.getPokemons()
    .subscribe( p => this.pokemons = p );
  }

}
