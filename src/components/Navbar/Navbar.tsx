// import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokedexContext } from "../../contexts/PokedexContext";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function Navbar() {
    const { filterText, setFilterText } = useContext(PokedexContext);
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        style={{
                            flexGrow: 1,
                            color: "inherit",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Pokedex
                    </Typography>
                    <CatchingPokemonIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            navigate("/cart");
                        }}
                    />

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            onChange={(e) => setFilterText(e.target.value)}
                            value={filterText}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

// export default function Navbar() {

//     return

//             /* <header className="navbar navbar-dark bg-dark">
//                 <div className="container">
//                     <Link className="navbar-brand px-4" to={""}>
//                         Pokedex
//                     </Link>
//                     <form className="form-inline">
//                         <input
//                             className="form-control mr-sm-2"
//                             type="search"
//                             placeholder="Pesquisar"
//                             aria-label="Pesquisar"
//                             onChange={(e) => setFilterText(e.target.value)}
//                             value={filterText}
//                         />
//                     </form>
//                     <Link to={"cart"}>
//                         <ShoppingCart size={32} color="#faf4f4" />
//                     </Link>
//                 </div>
//             </header>
//         </> */
// }
