import { memo, useEffect, useState } from "react";

import { usePokemon } from "../../hooks/usePokemon";
import { listingPokemons } from "../../services/api";
import { colors } from "../../styles/colors";
import { PokemonInfo } from "../../types/types";
import { getPokemonsDetails } from "../../utils/functions/getPokemonDetails";
import { getPokemonType } from "../../utils/functions/getPokemonType";
import { CardPokemon } from "../CardPokemon";
import { Loader } from "../Loader";
import * as S from "./styles";

function PokemonList() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    pokemonsData,
    handlePokemonsData,
    handleModal,
    currentTypeFilter,
    handleErrors,
  } = usePokemon();

  useEffect(() => {
    if (currentTypeFilter === "") {
      return;
    }
    setIsLoading(true);

    const typeId = getPokemonType(currentTypeFilter);

    async function getPokemons() {
      let pokemons = null;
      const endpoint =
        typeId && typeId !== 0 ? `type/${typeId}` : "pokemon?limit=9&offset=0";

      try {
        const response = await listingPokemons(endpoint);

        if (typeId !== 0) {
          handlePokemonsData(null);
          pokemons = await getPokemonsDetails(response.pokemon, true);
        } else {
          pokemons = await getPokemonsDetails(response.results, false);
        }

        handlePokemonsData({
          count: typeId === 0 ? response.count : response.pokemon.length,
          next: response.next,
          pokemons,
        });
      } catch (e) {
        handleErrors("Não foi possivel carregar os pokémons, tente novamente!");
        console.log(e);
      }

      setIsLoading(false);
    }
    getPokemons();
  }, [currentTypeFilter]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <S.Container>
          {pokemonsData &&
            pokemonsData.pokemons.map((pokemon: PokemonInfo) => (
              <CardPokemon
                key={pokemon.id}
                pokemonId={pokemon.id}
                name={pokemon.name}
                pokemonType={pokemon.type as keyof typeof colors}
                image={pokemon.image}
                onClick={() => {
                  handleModal({
                    status: true,
                    pokemon_id: pokemon.id,
                  });
                }}
              />
            ))}
        </S.Container>
      )}
    </>
  );
}

export default memo(PokemonList);
