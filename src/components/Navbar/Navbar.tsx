import { ShoppingCart } from "phosphor-react";

interface SearchInterface {
    handleFilterTextChange: (value: string) => void;
    filterText: string;
}
export default function Navbar({
    handleFilterTextChange,
    filterText,
}: SearchInterface) {
    console.log(filterText);
    return (
        <>
            <header className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand px-4" href="/">
                        Pokedex
                    </a>
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
                    <a href="/cart">
                        <ShoppingCart size={32} color="#faf4f4" />
                    </a>
                </div>
            </header>
        </>
    );
}
