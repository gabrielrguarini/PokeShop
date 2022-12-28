import { Container, Grid } from "@mui/material";
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
            <Container>
                <Grid container spacing={2} mt={1}>
                    {pokemonsFilter?.map((res) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} lg={2}>
                                <PokemonCard
                                    key={res.name}
                                    name={res.name}
                                    url={res.url}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
}
