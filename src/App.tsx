import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { ModalProvider } from "./hooks/ModalContext";
import { listingPokemons } from "./services/api";

function App() {

  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    async function getPokemons() {
      const response = await listingPokemons('https://pokeapi.co/api/v2/pokemon?limit=99&offset=0')
      setPokemons(response)
    }

    getPokemons();
  }, []);

  return (
    <ModalProvider>
      <Header />
      <Hero />
      <Main pokemons={pokemons}/>
      <Modal /> 
      <Footer />
    </ModalProvider>
  );
}

export default App;
