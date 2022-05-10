import axios from "axios";
import { ButtonHTMLAttributes, useState } from "react";

import { usePokemon } from "../../hooks/usePokemon";
import { getPokemonsDetails } from "../../utils/functions/getPokemonDetails";
import * as S from "./styles";

type LoadMoreParams = ButtonHTMLAttributes<HTMLButtonElement>;

export function LoadMore({ ...props }: LoadMoreParams) {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { pokemonsData, setPokemonsData } = usePokemon();

  async function handleLoadMore() {
    setIsLoadingMore(true);
    if (pokemonsData && pokemonsData.next) {
      const response = await axios
        .get(pokemonsData.next)
        .then((response) => response.data);
      const results = await getPokemonsDetails(response.results, false);
      setPokemonsData(
        (prev) =>
          prev && {
            ...prev,
            next: response.next,
            pokemons: [...prev.pokemons, ...results],
          }
      );
    }
    setIsLoadingMore(false);
  }

  return (
    <S.Container {...props} onClick={handleLoadMore}>
      {isLoadingMore ? "Loading..." : "Load more Pokémons"}
    </S.Container>
  );
}
