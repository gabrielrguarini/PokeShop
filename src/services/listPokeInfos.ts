import axios from 'axios'
import { PokeInfosInterface } from '../assets/interfaces/PokeInfosInterface'

export async function listPokeInfos(name:string): Promise<PokeInfosInterface>{
    const endpoint  = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await axios.get<PokeInfosInterface>(endpoint)
    return response.data
}