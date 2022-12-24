import { Pokemons } from "../../services/listPokemons";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export function PokemonList({
    pokemons,
    filterText,
}: {
    pokemons: Pokemons[];
    filterText: string;
}) {
    const pokemonsFilter = pokemons.filter((pokemon) =>
        pokemon.name.includes(filterText)
    );
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
