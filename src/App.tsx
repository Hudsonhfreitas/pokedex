import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { PokemonProvider } from "./contexts/usePokemon";

function App() {
  return (
    <PokemonProvider>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </PokemonProvider>
  );
}

export default App;
