import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokedexContext } from "../../contexts/PokedexContext";

export default function Navbar() {
    const { filterText, setFilterText } = useContext(PokedexContext);

    return (
        <>
            <header className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand px-4" to={""}>
                        Pokedex
                    </Link>
                    <form className="form-inline">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Pesquisar"
                            aria-label="Pesquisar"
                            onChange={(e) => setFilterText(e.target.value)}
                            value={filterText}
                        />
                    </form>
                    <Link to={"cart"}>
                        <ShoppingCart size={32} color="#faf4f4" />
                    </Link>
                </div>
            </header>
        </>
    );
}
