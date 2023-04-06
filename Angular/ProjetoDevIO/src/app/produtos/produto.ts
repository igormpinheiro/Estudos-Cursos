export class Pokemon {
    name: string = "";
    url: string = "";

}

export class PokemonResult {
    count: number | undefined;
    next: string | undefined;
    previous: string | undefined;
    results: Pokemon[] | undefined; 
  }