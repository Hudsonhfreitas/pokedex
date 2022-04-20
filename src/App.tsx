import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { ModalProvider } from "./hooks/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Header />
      <Hero />
      <Main />
      <Modal />
      <Footer />
    </ModalProvider>
  );
}

export default App;
