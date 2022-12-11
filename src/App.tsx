import { useState, useEffect } from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";
import { listPokemon } from "./services/listPokemons";
import { Pokemons } from "./services/listPokemons";

function App() {
    const [pokemons, setPokemons] = useState<Pokemons[]>([]);

    useEffect(() => {
        listPokemon().then((res) => {
            setPokemons(res.results);
        });
    }, []);
    console.log(pokemons);
    return (
        <div className="App container-fluid">
            <ul className="list-flush list-group-horizontal row justify-content-between">
                {pokemons?.map((res) => {
                    return (
                        <PokemonCard
                            key={res.name}
                            name={res.name}
                            url={res.url}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
