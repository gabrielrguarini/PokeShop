import { useEffect, useState } from "react";
import { PokeInfosInterface } from "../../assets/interfaces/PokeInfosInterface";

import { Plus } from "phosphor-react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Pokemons } from "../../services/listPokemons";
import { listPokeInfos } from "../../services/listPokeInfos";
export function PokemonCard({ name }: Pokemons) {
    const [pokeInfo, setpokeInfo] = useState<PokeInfosInterface | undefined>(
        undefined
    );
    useEffect(() => {
        listPokeInfos(name).then((res) => {
            setpokeInfo(res);
        });
    }, []);

    function handleClick() {}
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
                        onClick={handleClick}
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
