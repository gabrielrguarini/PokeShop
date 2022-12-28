import { Grid } from "@mui/material";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { PokedexContext } from "../../contexts/PokedexContext";
import { PokemonCard } from "../PokemonCard/PokemonCard";
export function PokedexPage() {
    const pokemons = useContext(PokedexContext);

    return (
        <>
            <Container>
                <Grid container spacing={2} mt={1}>
                    {pokemons.pokemons.map((pokemon) => {
                        return (
                            <Grid item xs={12} sm={6} md={3} lg={2}>
                                <PokemonCard
                                    key={pokemon.pokemon}
                                    name={pokemon.pokemon}
                                    url={`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon}`}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
}
