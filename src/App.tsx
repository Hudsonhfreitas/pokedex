import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { PokemonProvider } from "./hooks/usePokemon";

function App() {
  return (
    <PokemonProvider>
      <Header />
      <Hero />
      <Main />
      <Footer />
      <Modal />
    </PokemonProvider>
  );
}

export default App;
