import { useState, useEffect, SyntheticEvent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartPage } from "./components/Cart/CartPage";
import Navbar from "./components/Navbar/Navbar";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { listPokemon } from "./services/listPokemons";
import { Pokemons } from "./services/listPokemons";

function App() {
    const [pokemons, setPokemons] = useState<Pokemons[]>([]);

    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        listPokemon().then((res) => {
            setPokemons(res.results);
        });
    }, []);
    return (
        <>
            <Navbar
                handleFilterTextChange={setFilterText}
                filterText={filterText}
            />
            <div className="App container-fluid">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PokemonList
                                    pokemons={pokemons}
                                    filterText={filterText.toLowerCase()}
                                />
                            }
                        />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
