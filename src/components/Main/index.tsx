import { useEffect, useState } from "react";

import IconPokeball from "../../assets/icon-pokeball.svg";
import { useModal } from "../../hooks/ModalContext";
import { listingPokemons } from "../../services/api";
import { ColorsType } from "../../styles/colors";
import { types } from "../../utils/pokemonTypes";
import { CardPokemon } from "../CardPokemon";
import { FilterItem } from "../FilterItem";
import { LoadMore } from "../LoadMore";
import { Search } from "../Search";
import { SelectMobile } from "../SelectMobile";
import * as S from "./styles";

type PokemonType = {
  pokemon: PokemonResult;
  url: string;
};

type PokemonResult = {
  name: string;
  url: string;
};

type PokemonInfo = {
  id: number;
  name: string;
  image: string;
  type: string;
};

interface Pokemon {
  count?: number;
  next?: string;
  results?: PokemonResult[];
  pokemon?: PokemonResult[];
}

interface Name {
  name: string;
}

interface Type {
  type: Name;
}

interface Ability {
  ability: Name;
}

interface Stats {
  stat: Name;
  base_stat: number;
}

export function Main() {
  const [pokemons, setPokemons] = useState<Pokemon>();
  const [isSelectMobileOpen, setIsSelectMobileOpen] = useState(false);
  const [currentTypeFilter, setCurrentTypeFilter] = useState("all");
  const [pokemonsData, setPokemonsData] = useState<PokemonInfo[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState("");

  console.log({ currentTypeFilter, nextPageUrl });

  const { setModalIsOpen, setPokemonModalDetails } = useModal();

  function getPokemonsDetails(pokemons: Array<PokemonType>, type?: boolean) {
    setErrors("");
    try {
      pokemons.map(async (pokemon: PokemonType) => {
        const { name, id, sprites, types } = type
          ? await listingPokemons(pokemon.pokemon.url)
          : await listingPokemons(pokemon.url);
        const info: PokemonInfo = {
          id,
          name,
          image:
            sprites.other.dream_world.front_default !== null
              ? sprites.other.dream_world.front_default
              : sprites.front_default,
          type: types[0].type.name,
        };
        setPokemonsData((prevstate) =>
          prevstate ? [...prevstate, info] : [info]
        );
      });
    } catch (e) {
      setErrors("Ops, tivemos um erro. Tente novamente!");
      console.log(e);
    }
  }

  async function handleLoadMore(url: string) {
    const response = await listingPokemons(url);
    setPokemons(response);
    setNextPageUrl(response.next);
    getPokemonsDetails(response.results, false);
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
      setPokemons({ count: 1 });
      setPokemonsData([info]);
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
      stats: stats.map((item: Stats) => ({
        name: item.stat.name,
        value: item.base_stat,
      })),
    };
    setPokemonModalDetails(details);
    setModalIsOpen(true);
  }

  useEffect(() => {
    let typeId: number | null = 0;
    switch (currentTypeFilter) {
      case "all":
        typeId = 0;
        break;
      case "normal":
        typeId = 1;
        break;
      case "fighting":
        typeId = 2;
        break;
      case "flying":
        typeId = 3;
        break;
      case "poison":
        typeId = 4;
        break;
      case "ground":
        typeId = 5;
        break;
      case "rock":
        typeId = 6;
        break;
      case "bug":
        typeId = 7;
        break;
      case "ghost":
        typeId = 8;
        break;
      case "steel":
        typeId = 9;
        break;
      case "fire":
        typeId = 10;
        break;
      case "water":
        typeId = 11;
        break;
      case "grass":
        typeId = 12;
        break;
      case "electric":
        typeId = 13;
        break;
      case "psychic":
        typeId = 14;
        break;
      case "ice":
        typeId = 15;
        break;
      case "dragon":
        typeId = 16;
        break;
      case "dark":
        typeId = 17;
        break;
      case "fairy":
        typeId = 18;
        break;
      case "":
        typeId = null;
        break;
      default:
        typeId = null;
    }

    async function getPokemons() {
      if (typeId === 0) {
        const response = await listingPokemons(
          "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
        );
        setPokemonsData([]);
        setPokemons(response);
        setNextPageUrl(response.next);
        getPokemonsDetails(response.results, false);
      } else if (typeId !== 0 && typeId !== null) {
        const response = await listingPokemons(
          `https://pokeapi.co/api/v2/type/${typeId}`
        );
        setPokemonsData([]);
        setPokemons(response);
        setNextPageUrl(response.next);
        getPokemonsDetails(response.pokemon, true);
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
            // eslint-disable-next-line react/jsx-no-bind
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
                        {
                          // eslint-disable-next-line no-nested-ternary
                          pokemons && pokemons.count
                            ? pokemons.count
                            : pokemons && pokemons.pokemon
                            ? pokemons.pokemon.length
                            : "0"
                        }
                      </strong>{" "}
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
                    pokemonsData.map((pokemon: PokemonInfo) => (
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
                  <LoadMore onClick={() => handleLoadMore(nextPageUrl)} />
                )}
              </>
            )}
          </S.RightContainer>
        </S.AreaAll>
      </div>
    </S.Container>
  );
}
