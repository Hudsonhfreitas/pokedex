import { useContext, useEffect, useState } from "react";

import IconPokeball from "../../assets/icon-pokeball.svg";
import { PokemonContext } from "../../contexts/pokemonContext";
import { listingPokemons } from "../../services/api";
import { ColorsType } from "../../styles/colors";
import { PokemonInfo } from "../../types/types";
import { getPokemonsDetails } from "../../utils/getPokemonDetails";
import { getPokemonType } from "../../utils/getPokemonType";
import { types } from "../../utils/pokemonTypes";
import { CardPokemon } from "../CardPokemon";
import { FilterItem } from "../FilterItem";
import { Loader } from "../Loader";
import { LoadMore } from "../LoadMore";
import { Modal } from "../Modal";
import { Search } from "../Search";
import { SelectMobile } from "../SelectMobile";
import * as S from "./styles";

export function Main() {
  const [isSelectMobileOpen, setIsSelectMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    pokemonsData,
    currentTypeFilter,
    setCurrentTypeFilter,
    errors,
    setErrors,
    setIsModalOpen,
    setPokemonsData,
  } = useContext(PokemonContext);

  useEffect(() => {
    if (currentTypeFilter === "") {
      return;
    }
    setIsLoading(true);

    const typeId = getPokemonType(currentTypeFilter);

    async function getPokemons() {
      let pokemons = null;
      const url =
        typeId && typeId !== 0
          ? `https://pokeapi.co/api/v2/type/${typeId}`
          : "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";

      try {
        const response = await listingPokemons(url);

        if (typeId !== 0) {
          setPokemonsData(null);
          pokemons = await getPokemonsDetails(response.pokemon, true);
        } else {
          pokemons = await getPokemonsDetails(response.results, false);
        }

        setPokemonsData({
          count: typeId === 0 ? response.count : response.pokemon.length,
          next: response.next,
          pokemons,
        });
      } catch (e) {
        setErrors("Não foi possivel carregar os pokémons, tente novamente!");
        console.log(e);
      }

      setIsLoading(false);
    }
    getPokemons();
  }, [currentTypeFilter]);

  return (
    <S.Container>
      <div className="container">
        <S.Top>
          <h2>Select your Pokémon</h2>
          <Search />
        </S.Top>

        <S.AreaAll>
          <S.Aside>
            <ul>
              {types.map((item: string) => (
                <li key={item}>
                  <FilterItem
                    name={item}
                    currentType={currentTypeFilter}
                    onClick={() => setCurrentTypeFilter(item)}
                  />
                </li>
              ))}
            </ul>
          </S.Aside>
          <S.RightContainer>
            {errors ? (
              <h3>{errors}</h3>
            ) : (
              <>
                {isLoading ? (
                  <Loader />
                ) : (
                  <>
                    <div className="top-container">
                      <div>
                        <img src={IconPokeball} alt="red pokeball" />
                        <span>
                          <strong>
                            {pokemonsData && pokemonsData.count
                              ? pokemonsData.count
                              : "0"}
                          </strong>
                          {pokemonsData && pokemonsData.count > 1
                            ? " Pokémons"
                            : " Pokémon"}
                        </span>
                      </div>
                    </div>
                    <SelectMobile
                      currentType={currentTypeFilter}
                      setCurrentTypeFilter={setCurrentTypeFilter}
                      isSelectOpen={isSelectMobileOpen}
                      setIsSelectMobileOpen={setIsSelectMobileOpen}
                    />
                    <S.AllPokemons>
                      {pokemonsData &&
                        pokemonsData.pokemons.map((pokemon: PokemonInfo) => (
                          <CardPokemon
                            key={pokemon.id}
                            pokemonId={pokemon.id}
                            name={pokemon.name}
                            pokemonType={pokemon.type as keyof ColorsType}
                            image={pokemon.image}
                            onClick={() =>
                              setIsModalOpen({
                                status: true,
                                pokemon_id: pokemon.id,
                              })
                            }
                          />
                        ))}
                    </S.AllPokemons>
                    {currentTypeFilter === "all" && <LoadMore />}
                  </>
                )}
              </>
            )}
          </S.RightContainer>
        </S.AreaAll>
      </div>
      <Modal />
    </S.Container>
  );
}
