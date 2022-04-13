import { useState } from "react";
import { CardPokemon } from "./components/CardPokemon";
import { FilterItem } from "./components/FilterItem";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoadMore } from "./components/LoadMore";
import { Modal } from "./components/Modal";
import { Search } from "./components/Search";
import { TagType } from "./components/TagType";
import { ModalProvider } from "./hooks/ModalContext";

function App() {
  const [search, setSearch] = useState("");

  return (
    <ModalProvider>
      <Header />
      <Search value={search} onChange={setSearch} />
      <FilterItem name="all" filterColor="all" />
      <FilterItem name="bug" filterColor="bug" />
      <FilterItem name="fairy" filterColor="fairy" />
      <FilterItem name="fire" filterColor="fire" />
      <CardPokemon pokemonType="fire" />
      <TagType type="fire" color="fire" />
      <LoadMore />
      <Footer />
      <Modal />
    </ModalProvider>
  );
}

export default App;
