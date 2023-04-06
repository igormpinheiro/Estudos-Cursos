import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "./produtos.service";
import { PokemonResult } from "./PokemonResult";

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styles: [],
})
export class ProdutosComponent implements OnInit {
  public titPage: string = "Produtos";
  pokeResult!: PokemonResult;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.obterPokemons().subscribe(
      data => 
      {
        this.pokeResult = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
