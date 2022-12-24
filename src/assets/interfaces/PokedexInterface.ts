export interface PokemonsInterface {
        pokemon: string
        count: number
}

export interface PokedexInterface {
    pokemons:PokemonsInterface[]
    setPokedex: (newState: PokemonsInterface[])=> void
}