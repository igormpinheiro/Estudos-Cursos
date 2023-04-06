import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { PokemonResult } from "./PokemonResult";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService {

    protected urlService: string = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

    constructor(private http: HttpClient) { }

    obterPokemons(): Observable<PokemonResult> {
        return this.http.get<PokemonResult>(this.urlService);
    }
}
