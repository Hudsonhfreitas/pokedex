import { useRef, useState } from "react";

import IconPokeball from "../../assets/icon-pokeball.svg";
import { usePokemon } from "../../hooks/usePokemon";
import { LoadMore } from "../LoadMore";
import { Modal } from "../Modal";
import PokemonList from "../PokemonList";
import { Search } from "../Search";
import { SelectMobile } from "../SelectMobile";
import { Sidebar } from "../Sidebar";
import * as S from "./styles";

export function Main() {
  const [isSelectMobileOpen, setIsSelectMobileOpen] = useState(false);
  const { pokemonsData, currentTypeFilter, errors } = usePokemon();
  const topRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <S.Container>
      <div className="container">
        <S.Top ref={topRef}>
          <h2>Select your Pokémon</h2>
          <Search />
        </S.Top>
        <S.AreaAll>
          <Sidebar topRef={topRef} />
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
                      {pokemonsData && pokemonsData.count > 1
                        ? " Pokémons"
                        : " Pokémon"}
                    </span>
                  </div>
                </div>
                <SelectMobile
                  isSelectOpen={isSelectMobileOpen}
                  setIsSelectMobileOpen={setIsSelectMobileOpen}
                />
                <PokemonList />
                {currentTypeFilter === "all" && <LoadMore />}
              </>
            )}
          </S.RightContainer>
        </S.AreaAll>
      </div>
      <Modal />
    </S.Container>
  );
}
