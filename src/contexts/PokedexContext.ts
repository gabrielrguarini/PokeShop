import React from 'react'
import { PokedexInterface } from '../assets/interfaces/PokedexInterface'


const initialValue = {
    pokemons:[{
        pokemon:'',
        count: 0
    }],
    setPokedex: ()=>{}
}

const PokedexContext = React.createContext<PokedexInterface>(initialValue)

export default PokedexContext