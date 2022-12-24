import { useContext, useEffect, useState } from "react";
import { PokeInfosInterface } from "../../assets/interfaces/PokeInfosInterface";

import { Plus } from "phosphor-react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Pokemons } from "../../services/listPokemons";
import { listPokeInfos } from "../../services/listPokeInfos";
import PokedexContext from "../../contexts/PokedexContext";
export function PokemonCard({ name }: Pokemons) {
    const pokedex = useContext(PokedexContext);
    const [pokeInfo, setpokeInfo] = useState<PokeInfosInterface | undefined>(
        undefined
    );
    useEffect(() => {
        listPokeInfos(name).then((res) => {
            setpokeInfo(res);
        });
    }, []);

    function handleAddPokemon(handlePokemon: string) {
        let havePokemon = 0;
        pokedex.pokemons.forEach((pokemon) => {
            if (pokemon.pokemon === handlePokemon) {
                havePokemon++;
                pokemon.count++;
                pokedex.setPokedex([...pokedex.pokemons]);
                return;
            }
        });
        if (havePokemon === 0) {
            pokedex.setPokedex([
                ...pokedex.pokemons,
                { pokemon: handlePokemon, count: 0 },
            ]);
            console.log(pokedex.pokemons);
        }
    }
    return (
        <li className="list-group-item col-3 pt-4">
            <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Header>
                    <Card.Img
                        variant="top"
                        src={
                            pokeInfo?.sprites.other?.["official-artwork"]
                                .front_default
                        }
                    />
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <strong>{name.toUpperCase()}</strong>
                    </Card.Title>
                    <Button
                        variant="success"
                        className="d-flex mr-2"
                        onClick={() => handleAddPokemon(name)}
                    >
                        Adicionar a Pokedex
                        <Plus
                            size={20}
                            color="#faf4f4"
                            weight="bold"
                            className="align-self-center ml-2"
                        />
                    </Button>
                </Card.Body>
            </Card>
        </li>
    );
}
