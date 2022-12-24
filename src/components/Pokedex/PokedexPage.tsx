import { useContext } from "react";
import PokedexContext from "../../contexts/PokedexContext";
export function CartPage() {
    const pokedex = useContext(PokedexContext);
    console.log(
        pokedex.pokemons?.map((pokemon) => {
            return pokemon;
        })
    );
    return <></>;
}
