import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, EffectFade }  from 'swiper';
import backpack from '../../assets/backpack.svg';
import RedPokeball from '../../assets/red-pokeball.svg';
import Lights from '../../assets/lights.svg';
import BluePokeball from '../../assets/blue-pokeball.svg';
import { HiArrowNarrowDown } from 'react-icons/hi';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import * as S from './styles';

export function Hero() {
    return (
        <S.Container>
            <div className="slide-hero">
                <Swiper
                  loop={true}
                  slidesPerView={1}
                  modules={[Autoplay, Pagination, EffectFade]}
                  pagination={true}
                  effect={"fade"}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                >
                    <SwiperSlide>
                        <div className="main-area">
                            <div className="container">
                                <div className="text">
                                    <S.Tag>
                                        <div className="image-tag">
                                            <img src={backpack} alt="Mochila vermelha" />
                                        </div>
                                        <p>pokedex</p>
                                    </S.Tag>
                                    <h1>Who is that Pokémon?</h1>
                                    <p>The perfect guide for those who want to hunt Pokémons around the world</p>
                                    <div className="image">
                                        <img src={Lights} alt="Luzes" className='lights'/>
                                        <img src={RedPokeball} alt="Pokebola vermelha"/>
                                    </div>
                                </div>
                                <S.AreaExplore className="area-expolore">
                                    <div className="txt">
                                        <div className="icon">
                                            <HiArrowNarrowDown />
                                        </div>
                                        <span>explore</span>
                                    </div>
                                </S.AreaExplore>
                            </div>
                        </div>                        
                    </SwiperSlide>

                    <SwiperSlide className='blue'>
                        <div className="main-area">
                            <div className="container">
                                <div className="text">
                                    <S.Tag className='blue'>
                                        <div className="image-tag">
                                            <img src={backpack} alt="Mochila vermelha" />
                                        </div>
                                        <p>pokedex</p>
                                    </S.Tag>
                                    <h1>Who is that Pokémon?</h1>
                                    <p>The perfect guide for those who want to hunt Pokémons around the world</p>
                                    <div className="image">
                                        <img src={Lights} alt="Luzes" className='lights'/>
                                        <img src={BluePokeball} className="pokeball" alt="Pokebola vermelha"/>
                                    </div>
                                </div>
                                <S.AreaExplore className="area-expolore">
                                    <div className="txt">
                                        <div className="icon blue">
                                            <HiArrowNarrowDown />
                                        </div>
                                        <span>explore</span>
                                    </div>
                                </S.AreaExplore>
                            </div>
                        </div>                        
                    </SwiperSlide>
                </Swiper>
                </div>
        </S.Container>
    )
}