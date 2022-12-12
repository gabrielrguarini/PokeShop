import { ShoppingCart } from "phosphor-react";

export default function Navbar() {
    return (
        <>
            <header className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand px-4" href="/">
                        Pokedex
                    </a>
                    <a href="/cart">
                        <ShoppingCart size={32} color="#faf4f4" />
                    </a>
                </div>
            </header>
        </>
    );
}
