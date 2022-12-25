import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartPage } from "./components/Pokedex/PokedexPage";
import Navbar from "./components/Navbar/Navbar";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { listPokemon } from "./services/listPokemons";
import { Pokemons } from "./services/listPokemons";
import { PokemonsInterface } from "./assets/interfaces/PokedexInterface";
import { PokedexContext } from "./contexts/PokedexContext";

function App() {
    const [pokemonsList, setPokemonsList] = useState<Pokemons[]>([]);
    const [pokedex, setPokedex] = useState<PokemonsInterface[]>([]);

    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        listPokemon().then((res) => {
            setPokemonsList(res.results);
        });
    }, []);
    useEffect(() => {
        localStorage.setItem("Pokemons", JSON.stringify(pokedex));
    }, [pokedex]);
    return (
        <div className="App container-fluid">
            <PokedexContext.Provider value={{ pokemons: pokedex, setPokedex }}>
                <BrowserRouter>
                    <Navbar
                        handleFilterTextChange={setFilterText}
                        filterText={filterText}
                    />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PokemonList
                                    pokemons={pokemonsList}
                                    filterText={filterText.toLowerCase()}
                                />
                            }
                        />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </BrowserRouter>
            </PokedexContext.Provider>
        </div>
    );
}

export default App;
