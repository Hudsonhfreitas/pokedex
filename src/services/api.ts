import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function listingPokemons(endpoint: string) {
  const data = await api.get(endpoint);
  return data.data;
}
