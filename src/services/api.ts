import axios from "axios";

export async function listingPokemons(url: string) {
    const data = await axios.get(url)
    return data.data
};