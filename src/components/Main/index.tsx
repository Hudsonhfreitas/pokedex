import { useEffect, useState } from "react";

import IconPokeball from "../../assets/icon-pokeball.svg";
import { listingPokemons } from "../../services/api";
import { ColorsType } from "../../styles/colors";
import {
  Ability,
  BaseStatus,
  Name,
  PokemonDetails,
  Type,
  PokemonInfo,
} from "../../types/types";
import { getPokemonsDetails } from "../../utils/getPokemonDetails";
import { getPokemonType } from "../../utils/getPokemonType";
import { types } from "../../utils/pokemonTypes";
import { CardPokemon } from "../CardPokemon";
import { FilterItem } from "../FilterItem";
import { LoadMore } from "../LoadMore";
import { Modal } from "../Modal";
import { Search } from "../Search";
import { SelectMobile } from "../SelectMobile";
import * as S from "./styles";

interface PokemonsData {
  count: number;
  next: string;
  pokemons: Array<PokemonInfo>;
}

export function Main() {
  const [isSelectMobileOpen, setIsSelectMobileOpen] = useState(false);
  const [currentTypeFilter, setCurrentTypeFilter] = useState("all");
  const [pokemonsData, setPokemonsData] = useState<PokemonsData | null>();
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemonModalData, setPokemonModalData] = useState(
    {} as PokemonDetails
  );

  async function handleLoadMore() {
    if (pokemonsData && pokemonsData.next) {
      const response = await listingPokemons(pokemonsData.next);
      const results = await getPokemonsDetails(response.results, false);
      setPokemonsData((prev) =>
        prev
          ? {
              ...prev,
              next: response.next,
              pokemons: [...prev.pokemons, ...results],
            }
          : {
              count: response.count,
              next: response.next,
              pokemons: results,
            }
      );
    }
  }

  async function handleSearchPokemon() {
    setErrors("");
    setCurrentTypeFilter("");
    try {
      const { name, id, sprites, types } = await listingPokemons(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      const info = {
        id,
        name,
        image:
          sprites.other.dream_world.front_default !== null
            ? sprites.other.dream_world.front_default
            : sprites.front_default,
        type: types[0].type.name,
      };
      setPokemonsData({
        count: 1,
        next: "",
        pokemons: [info],
      });
    } catch (e) {
      setErrors("Pokémon não encontrado. Tente novamente!");
      console.log(e);
    }
  }

  async function handleShowDetails(poke_id: number) {
    const { name, id, sprites, types, abilities, height, weight, stats } =
      await listingPokemons(`https://pokeapi.co/api/v2/pokemon/${poke_id}`);
    const { damage_relations } = await listingPokemons(types[0].type.url);

    const details = {
      id,
      name,
      image:
        sprites.other.dream_world.front_default !== null
          ? sprites.other.dream_world.front_default
          : sprites.front_default,
      types: types.map((item: Type) => item.type.name),
      abilities: abilities.map((ability: Ability) => ability.ability.name),
      height,
      weight,
      weaknesses: damage_relations.double_damage_from.map(
        (item: Name) => item.name
      ),
      stats: stats.map((item: BaseStatus) => ({
        name: item.stat.name,
        value: item.base_stat,
      })),
    };
    setPokemonModalData(details);
    setIsModalOpen(true);
  }

  useEffect(() => {
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
    }
    getPokemons();
  }, [currentTypeFilter]);

  return (
    <S.Container>
      <div className="container">
        <S.Top>
          <h2>Select your Pokémon</h2>
          <Search
            value={search}
            setSearch={setSearch}
            handleSearchPokemon={handleSearchPokemon}
          />
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
                <div className="top-container">
                  <div>
                    <img src={IconPokeball} alt="red pokeball" />
                    <span>
                      <strong>
                        {pokemonsData && pokemonsData.count
                          ? pokemonsData.count
                          : "0"}
                      </strong>
                      Pokémons
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
                        onClick={() => handleShowDetails(pokemon.id)}
                      />
                    ))}
                </S.AllPokemons>
                {currentTypeFilter === "all" && (
                  <LoadMore onClick={() => handleLoadMore()} />
                )}
              </>
            )}
          </S.RightContainer>
        </S.AreaAll>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        pokemonModalData={pokemonModalData}
      />
    </S.Container>
  );
}
