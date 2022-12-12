import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartPage } from "./components/Cart/CartPage";
import Navbar from "./components/Navbar/Navbar";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { listPokemon } from "./services/listPokemons";
import { Pokemons } from "./services/listPokemons";

function App() {
    const [pokemons, setPokemons] = useState<Pokemons[]>([]);

    useEffect(() => {
        listPokemon().then((res) => {
            setPokemons(res.results);
        });
    }, []);
    return (
        <>
            <Navbar />
            <div className="App container-fluid">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<PokemonList pokemons={pokemons} />}
                        />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
