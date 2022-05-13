import { ButtonHTMLAttributes, useState } from "react";

import { usePokemon } from "../../hooks/usePokemon";
import { listingPokemons } from "../../services/api";
import { getPokemonsDetails } from "../../utils/functions/getPokemonDetails";
import * as S from "./styles";

type LoadMoreParams = ButtonHTMLAttributes<HTMLButtonElement>;

export function LoadMore({ ...props }: LoadMoreParams) {
  const { pokemonsData, handlePokemonsData } = usePokemon();
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  async function handleLoadMore() {
    setIsLoadingMore(true);
    if (pokemonsData && pokemonsData.next) {
      const response = await listingPokemons(pokemonsData.next);
      const results = await getPokemonsDetails(response.results, false);
      handlePokemonsData({
        ...pokemonsData,
        next: response.next,
        pokemons: [...pokemonsData.pokemons, ...results],
      });
    }
    setIsLoadingMore(false);
  }

  return (
    <S.Container {...props} onClick={handleLoadMore}>
      {isLoadingMore ? "Loading..." : "Load more Pokémons"}
    </S.Container>
  );
}
