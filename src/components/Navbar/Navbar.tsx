import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

interface SearchInterface {
    handleFilterTextChange: (value: string) => void;
    filterText: string;
}
export default function Navbar({
    handleFilterTextChange,
    filterText,
}: SearchInterface) {
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
                            onChange={(e) =>
                                handleFilterTextChange(e.target.value)
                            }
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
