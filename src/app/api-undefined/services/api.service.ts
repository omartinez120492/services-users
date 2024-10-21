import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Pokemon, RequestPokemons } from '../interfaces/poke.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private pokemons: Pokemon[] = [];


  constructor(private http: HttpClient) { }


  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<RequestPokemons>(this.url)// => resp
      .pipe(
        map(resp => {
          this.pokemons = resp.results.map(pokemon => ({
            name: pokemon.name,
          }));
          return this.pokemons;
        }),
      )
  }



}
