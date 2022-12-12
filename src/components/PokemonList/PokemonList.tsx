import { Pokemons } from "../../services/listPokemons";
import { PokemonCard } from "../PokemonCard/PokemonCard";

interface PokeArrayInterface {
    pokemons: Pokemons[];
}

export function PokemonList(props: PokeArrayInterface) {
    return (
        <>
            <ul className="list-flush list-group-horizontal row justify-content-between">
                {props.pokemons?.map((res) => {
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
