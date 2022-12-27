import { createContext, ReactNode, useEffect, useState } from "react";
import {
    PokedexInterface,
    PokemonsInterface,
} from "../assets/interfaces/PokedexInterface";
import { listPokemon, Pokemons } from "../services/listPokemons";

interface IContext {
    children: ReactNode;
}
const initalValue = {
    pokemons: [],
    filterText: "",
    pokemonsList: [],
    setFilterText: () => {},
    setPokemons: () => {},
};

export const PokedexProvider = ({ children }: IContext) => {
    const [pokemons, setPokemons] = useState<PokemonsInterface[]>(() => {
        const storedPokemons: string = localStorage.getItem("Pokemons") || "";
        if (storedPokemons) {
            return JSON.parse(storedPokemons);
        }
        return [];
    });

    const [pokemonsList, setPokemonsList] = useState<Pokemons[]>([]);

    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        listPokemon().then((res) => {
            setPokemonsList(res.results);
        });
    }, []);

    useEffect(() => {
        const storedPokemons: string = localStorage.getItem("Pokemons") || "";
        if (storedPokemons) {
            setPokemons(JSON.parse(storedPokemons));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Pokemons", JSON.stringify(pokemons));
    }, [pokemons]);
    return (
        <PokedexContext.Provider
            value={{
                pokemons,
                filterText,
                pokemonsList,
                setFilterText,
                setPokemons,
            }}
        >
            {children}
        </PokedexContext.Provider>
    );
};
export const PokedexContext = createContext<PokedexInterface>(initalValue);

export default PokedexProvider;
