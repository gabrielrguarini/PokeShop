import React from 'react'
import { PokedexInterface } from '../assets/interfaces/PokedexInterface'


    let storagePokedex = localStorage.getItem('Pokemons')?
        JSON.parse(localStorage.getItem('Pokemons')|| ''):
        {
            pokemons:[{
            pokemon:'',
            count: 0
            }]
        }




const PokedexContext = React.createContext<PokedexInterface>(storagePokedex)

export default PokedexContext