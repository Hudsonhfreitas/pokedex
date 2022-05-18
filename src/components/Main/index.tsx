import { useCallback, useRef, useState } from "react";

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
  const { pokemonsData, currentTypeFilter, errors } = usePokemon();
  const [isSelectMobileOpen, setIsSelectMobileOpen] = useState(false);
  const topRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleSelectMobile = useCallback((state: boolean) => {
    setIsSelectMobileOpen(state);
  }, []);

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
                      {currentTypeFilter === "all" &&
                        `${pokemonsData?.pokemons.length} de `}
                      {pokemonsData && pokemonsData.count
                        ? pokemonsData.count
                        : "0"}
                      {pokemonsData && pokemonsData.count > 1
                        ? " Pokémons"
                        : " Pokémon"}
                    </span>
                  </div>
                </div>
                <SelectMobile
                  isSelectOpen={isSelectMobileOpen}
                  handleSelectMobile={handleSelectMobile}
                />
                <PokemonList />
                {currentTypeFilter === "all" && pokemonsData && <LoadMore />}
              </>
            )}
          </S.RightContainer>
        </S.AreaAll>
      </div>
      <Modal />
    </S.Container>
  );
}
