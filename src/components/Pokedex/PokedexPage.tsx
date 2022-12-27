import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
export function PokedexPage() {
    const pokemons = useContext(PokedexContext);

    return (
        <>
            {pokemons.pokemons.map((pokemon) => {
                return <p>{pokemon.pokemon}</p>;
            })}
        </>
    );
}
