import { Pokemons } from "../../services/listPokemons"

export interface PokemonsInterface {
        pokemon: string
        count: number
}

export interface PokedexInterface {

    pokemons:PokemonsInterface[]
    filterText:string
    pokemonsList:Pokemons[]
    setFilterText: (newState: string) => void
    setPokemons: (newState: PokemonsInterface[]) => void
}