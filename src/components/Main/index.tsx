import { Search } from '../Search';
import { FilterItem } from '../FilterItem';
import IconPokeball from '../../assets/icon-pokeball.svg';

import * as S from './styles'
import { CardPokemon } from '../CardPokemon';
import { LoadMore } from '../LoadMore';
import { SelectMobile } from '../SelectMobile';
import { useEffect, useState } from 'react';
import { listingPokemons } from '../../services/api';
import { ColorsType } from '../../styles/colors';

type MainProps = { 
    pokemons: any;
};

type PokemonType = {
    name: string;
    url: string;
};

type PokemonInfo = {
    id: string;
    name: string;
    image: string;
    type: keyof ColorsType;
};

export function Main({ pokemons }: MainProps) {

    const [isSelectMobileOpen, setIsSelectMobileOpen] = useState(false);
    const [pokemonsData, setPokemonsData] = useState<PokemonInfo[]>([])

    useEffect(() => {
        if(pokemons) {
            pokemons.results.map(async (pokemon: PokemonType) => {
                const { name, id, sprites, types } = await listingPokemons(pokemon.url);
                
                let info = {
                    id,
                    name,
                    image: sprites.front_default,
                    type: types[0].type.name
                }
                setPokemonsData((oldArray: any) => [...oldArray, info]);
            })
        }
    },[pokemons])

    return (
        <S.Container>
            <div className="container">
                <S.Top>
                    <h2>Select  your Pokémon</h2>
                    <Search value="" onChange={() => {}} />
                </S.Top>

                <S.AreaAll>
                    <S.Aside>
                        <ul>
                            <li>
                                <FilterItem name='all' filterColor='all'/>
                            </li>
                            <li>
                                <FilterItem name='ghost' filterColor='ghost' />
                            </li>
                            <li>
                                <FilterItem name='ground' filterColor='ground'/>
                            </li>
                            <li>
                                <FilterItem name='grass' filterColor='grass'/>
                            </li>
                            <li>
                                <FilterItem name='dragon' filterColor='dragon'/>
                            </li>
                            <li>
                                <FilterItem name='steel' filterColor='steel' />
                            </li>
                            <li>
                                <FilterItem name='electric' filterColor='electric'/>
                            </li>
                            <li>
                                <FilterItem name='water' filterColor='water'/>
                            </li>
                            <li>
                                <FilterItem name='fire' filterColor='fire'/>
                            </li>
                            <li>
                                <FilterItem name='bug' filterColor='bug'/>
                            </li>
                            <li>
                                <FilterItem name='flying' filterColor='flying'/>
                            </li>
                            <li>
                                <FilterItem name='fairy' filterColor='fairy'/>
                            </li>
                            <li>
                                <FilterItem name='normal' filterColor='normal'/>
                            </li>
                            <li>
                                <FilterItem name='poison' filterColor='poison'/>
                            </li>
                            <li>
                                <FilterItem name='rock' filterColor='rock'/>
                            </li>
                            <li>
                                <FilterItem name='psychic' filterColor='psychic'/>
                            </li>
                            <li>
                                <FilterItem name='ice' filterColor='ice'/>
                            </li>
                            <li>
                                <FilterItem name='dark' filterColor='dark'/>
                            </li>
                            <li>
                                <FilterItem name='fight' filterColor='fight'/>
                            </li>
                        </ul>
                    </S.Aside>
                    <S.RightContainer>
                        <div className="top-container">
                            <div>
                                <img src={IconPokeball} alt='red pokeball' />
                                <span><strong>{pokemons ? pokemons.count : '0'}</strong> Pokémons</span>
                            </div>
                        </div>
                        <SelectMobile isSelectOpen={isSelectMobileOpen} setIsSelectMobileOpen={setIsSelectMobileOpen}/>
                        <S.AllPokemons>
                            {pokemonsData && pokemonsData.map((pokemon: PokemonInfo) => (
                                <CardPokemon 
                                  id={pokemon.id}
                                  name={pokemon.name} 
                                  pokemonType={pokemon.type} 
                                  image={pokemon.image}
                                />
                            ))}
                        </S.AllPokemons>
                        <LoadMore />
                    </S.RightContainer>
                </S.AreaAll>
            </div>
        </S.Container>
    )
}