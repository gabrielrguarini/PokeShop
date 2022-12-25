import {createContext, ReactNode} from 'react'
import { PokedexInterface } from '../assets/interfaces/PokedexInterface'


type TesteContext ={
    children: ReactNode
}

let storagePokedex = localStorage.getItem('Pokemons')?
JSON.parse(localStorage.getItem('Pokemons')|| ''):
{
    pokemons:[{
        pokemon:'',
        count: 0
    }]
}



export const PokedexContext = createContext<PokedexInterface>(storagePokedex)
export const PokedexProvider = (children: TesteContext)=> {
    return (
        <PokedexContext.Provider value={storagePokedex}>
            {children}
        </PokedexContext.Provider>
    )
}


