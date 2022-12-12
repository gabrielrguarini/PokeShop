import axios from "axios";

export interface Pokemons {
    name: string;
    url: string;
}

export interface ListPokemonInterface{
    count: number;
    next: null | string;
    previous: null | string;
    results: Pokemons[]    
}
export async function listPokemon(): Promise<ListPokemonInterface>{
    const endpoint  = "https://pokeapi.co/api/v2/pokemon/"
    const response = await axios.get<ListPokemonInterface>(endpoint)
    return response.data
}