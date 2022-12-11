import { useEffect, useState } from "react";
import { PokeInfosInterface } from "../assets/interfaces/PokeInfosInterface";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Pokemons } from "../services/listPokemons";
import { listPokeInfos } from "../services/listPokeInfos";
export function PokemonCard({ name, url }: Pokemons) {
    const [pokeInfo, setpokeInfo] = useState<PokeInfosInterface | undefined>(
        undefined
    );
    useEffect(() => {
        listPokeInfos(name).then((res) => {
            setpokeInfo(res);
        });
    }, []);
    console.log("PokeInfo: ", pokeInfo);

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
                    <Button variant="success">Adicionar a Pokedex</Button>
                </Card.Body>
            </Card>
        </li>
    );
}
