import { useContext, useEffect, useState } from "react";
import { PokeInfosInterface } from "../../assets/interfaces/PokeInfosInterface";
//MATERIAL UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import styled from "styled-components";
//
import { Pokemons } from "../../services/listPokemons";
import { listPokeInfos } from "../../services/listPokeInfos";
import { PokedexContext } from "../../contexts/PokedexContext";
import { PokedexInterface } from "../../assets/interfaces/PokedexInterface";

export function PokemonCard({ name }: Pokemons) {
    const pokemons: PokedexInterface = useContext(PokedexContext);
    const [pokeInfo, setpokeInfo] = useState<PokeInfosInterface | undefined>(
        undefined
    );
    useEffect(() => {
        listPokeInfos(name).then((res) => {
            setpokeInfo(res);
        });
    }, []);

    const StyledButton = styled(Button)`
        margin: 0 auto;
    `;

    function handleAddPokemon(handlePokemon: string) {
        let havePokemon = 0;
        pokemons.pokemons.forEach((pokemon) => {
            if (pokemon.pokemon === handlePokemon) {
                havePokemon++;
                pokemon.count++;
                pokemons.setPokemons([...pokemons.pokemons]);
                return;
            }
        });
        if (havePokemon === 0) {
            pokemons.setPokemons([
                ...pokemons.pokemons,
                { pokemon: handlePokemon, count: 1 },
            ]);
            console.log(pokemons.pokemons);
        }
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={"50%"}
                    image={
                        pokeInfo?.sprites.other?.["official-artwork"]
                            .front_default
                    }
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5">{name.toUpperCase()}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <StyledButton
                    variant="contained"
                    onClick={() => handleAddPokemon(name)}
                >
                    Adicionar Pokemon +
                </StyledButton>
            </CardActions>
        </Card>
    );
}
