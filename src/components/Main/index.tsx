import { Search } from '../Search';
import { FilterItem } from '../FilterItem';
import IconPokeball from '../../assets/icon-pokeball.svg';

import * as S from './styles'
import { CardPokemon } from '../CardPokemon';
import { LoadMore } from '../LoadMore';

export function Main() {
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
                                <span><strong>150</strong> Pokémons</span>
                            </div>
                        </div>
                        <S.AllPokemons>
                            <CardPokemon pokemonType='grass' />
                            <CardPokemon pokemonType='poison' />
                            <CardPokemon pokemonType='fire' />
                            <CardPokemon pokemonType='grass' />
                            <CardPokemon pokemonType='poison' />
                            <CardPokemon pokemonType='fire' />
                            <CardPokemon pokemonType='grass' />
                            <CardPokemon pokemonType='poison' />
                            <CardPokemon pokemonType='fire' />
                        </S.AllPokemons>
                        <LoadMore />
                    </S.RightContainer>
                </S.AreaAll>
            </div>
        </S.Container>
    )
}