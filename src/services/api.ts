import axios from "axios";

export async function listingPokemons(url: string) {
    const data = await axios.get(url)
    return data.data
};

export async function openDetailsPokemon(id: string) {
    const data = await axios.get(id)
    return data.data
}