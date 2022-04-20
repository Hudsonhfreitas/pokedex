import { Search } from '../Search';
import { FilterItem } from '../FilterItem';

import { CardPokemon } from '../CardPokemon';
import { LoadMore } from '../LoadMore';
import { SelectMobile } from '../SelectMobile';
import { useEffect, useState } from 'react';
import { listingPokemons } from '../../services/api';
import { ColorsType } from '../../styles/colors';
import IconPokeball from '../../assets/icon-pokeball.svg';
import { types } from '../../utils/pokemonTypes';
import * as S from './styles'

type PokemonType = {
    pokemon?: any;
    name: string;
    url: string;
};

type PokemonInfo = {
    id: number;
    name: string;
    image: string;
    type: keyof ColorsType;
};


export function Main() {

    const [pokemons, setPokemons] = useState<any>();
    const [isSelectMobileOpen, setIsSelectMobileOpen] = useState(false);
    const [currentTypeFilter, setCurrentTypeFilter] = useState('all');
    const [pokemonsData, setPokemonsData] = useState<PokemonInfo[]>([]);
    const [search, setSearch] = useState('');
    const [errors, setErrors] = useState('')

    function getPokemonsDetails(pokemons: Array<any>, type?: boolean) {
        setErrors('')
        try {
            pokemons.map(async (pokemon: PokemonType) => {
                const { name, id, sprites, types } = type ? await listingPokemons(pokemon.pokemon.url) : await listingPokemons(pokemon.url);
                let info = {
                    id,
                    name,
                    image: sprites.other.dream_world.front_default,
                    type: types[0].type.name
                }
                setPokemonsData((oldArray: any) => [...oldArray, info]);
            })
        } catch(e) {
            setErrors('Ops, tivemos um erro. Tente novamente!');
            console.log(e)
        }
        
    }

    async function handleLoadMore(url: string) {
        const response = await listingPokemons(url);
        setPokemons(response)
        getPokemonsDetails(response.results, false)
    }

    async function handleSearchPokemon() {
        setErrors('')
        try {
            const { name, id, sprites, types } = await listingPokemons(`https://pokeapi.co/api/v2/pokemon/${search}`)
            let info = {
                id,
                name,
                image: sprites.other.dream_world.front_default,
                type: types[0].type.name
            }
            setPokemons({count: 1})
            setPokemonsData([info])
        } catch(e) {
            setErrors('Pokémon não encontrado. Tente novamente!');
            console.log(e)
        }
    }

    useEffect(() => {
        let typeId = 0;
        switch(currentTypeFilter) {
            case 'all':
                typeId = 0;
                break;
            case 'normal':
                typeId = 1;
                break;
            case 'fighting':
                typeId = 2;
                break;
            case 'flying':
                typeId = 3;
                break;
            case 'poison':
                typeId = 4;
                break;
            case 'ground':
                typeId = 5;
                break;
            case 'rock':
                typeId = 6;
                break;
            case 'bug':
                typeId = 7;
                break;
            case 'ghost':
                typeId = 8;
                break;
            case 'steel':
                typeId = 9;
                break;
            case 'fire':
                typeId = 10;
                break; 
            case 'water':
                typeId = 11;
                break; 
            case 'grass':
                typeId = 12;
                break;
            case 'electric':
                typeId = 13;
                break;
            case 'psychic':
                typeId = 14;
                break; 
            case 'ice':
                typeId = 15;
                break;
            case 'dragon':
                typeId = 16;
                break;
            case 'dark':
                typeId = 17;
                break; 
            case 'fairy':
                typeId = 18;
                break; 
        }   

        async function getPokemons() {
            if ( typeId === 0 ) {
                const response = await listingPokemons('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');
                setPokemonsData([])
                setPokemons(response)
                getPokemonsDetails(response.results, false)
            }
            else {
                const response = await listingPokemons(`https://pokeapi.co/api/v2/type/${typeId}`);
                setPokemonsData([])
                setPokemons(response)
                getPokemonsDetails(response.pokemon, true)
            }
        }

        getPokemons();

    },[currentTypeFilter])

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
                                <li key={item} >
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
                                <img src={IconPokeball} alt='red pokeball' />
                                <span><strong>{pokemons && pokemons.count ? pokemons.count : ( pokemons && pokemons.pokemon ? pokemons.pokemon.length : '0')}</strong> Pokémons</span>
                            </div>
                            </div>
                            <SelectMobile 
                                currentType={currentTypeFilter}
                                setCurrentTypeFilter={setCurrentTypeFilter}
                                isSelectOpen={isSelectMobileOpen} 
                                setIsSelectMobileOpen={setIsSelectMobileOpen}
                            />
                            <S.AllPokemons>
                                {pokemonsData && pokemonsData.map((pokemon: PokemonInfo) => (
                                    <CardPokemon 
                                        key={pokemon.id}
                                        id={pokemon.id}
                                        name={pokemon.name} 
                                        pokemonType={pokemon.type} 
                                        image={pokemon.image}
                                    />
                                ))}
                            </S.AllPokemons>
                            <LoadMore 
                                style={currentTypeFilter !== 'all' || (pokemons && pokemons.next ) ? {display:'none'} : {display: 'block'}}
                                onClick={() => handleLoadMore(pokemons.next)}
                            />
                        </>
                        )}
                    </S.RightContainer>
                </S.AreaAll>
            </div>
        </S.Container>
    )
}