import { Pokemon } from "./produto";

export class PokemonResult {
  count: number | undefined;
  next: string | undefined;
  previous: string | undefined;
  results: Pokemon[] | undefined;
}
