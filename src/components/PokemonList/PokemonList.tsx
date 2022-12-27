import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export function PokemonList() {
    const { filterText, pokemonsList } = useContext(PokedexContext);

    const pokemonsFilter = pokemonsList.filter((pokemon) =>
        pokemon.name.includes(filterText.toLowerCase())
    );
    pokemonsList.map((res) => {
        res.name;
    });

    return (
        <>
            <ul className="list-flush list-group-horizontal row justify-content-between">
                {pokemonsFilter?.map((res) => {
                    return (
                        <PokemonCard
                            key={res.name}
                            name={res.name}
                            url={res.url}
                        />
                    );
                })}
            </ul>
        </>
    );
}
