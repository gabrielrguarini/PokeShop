import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PokedexPage } from "./components/Pokedex/PokedexPage";
import Navbar from "./components/Navbar/Navbar";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { PokedexProvider } from "./contexts/PokedexContext";

function App() {
    // const [pokemonsList, setPokemonsList] = useState<Pokemons[]>([]);

    // const [filterText, setFilterText] = useState("");

    // useEffect(() => {
    //     listPokemon().then((res) => {
    //         setPokemonsList(res.results);
    //     });
    // }, []);
    return (
        <div className="App container-fluid">
            <PokedexProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PokemonList />} />
                        <Route path="/cart" element={<PokedexPage />} />
                    </Routes>
                </BrowserRouter>
            </PokedexProvider>
        </div>
    );
}

export default App;
