import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { PokemonModal, PokemonsData } from "../types/types";

interface PokemonProviderProps {
  children: ReactNode;
}

interface PokemonContext {
  currentTypeFilter: string;
  handleCurrentTypeFilter: (filter: string) => void;
  pokemonsData: PokemonsData | null;
  handlePokemonsData: (data: PokemonsData | null) => void;
  errors: string;
  handleErrors: (error: string) => void;
  isModalOpen: PokemonModal;
  handleModal: (state: PokemonModal) => void;
}

const PokemonContext = createContext({} as PokemonContext);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [currentTypeFilter, setCurrentTypeFilter] = useState("all");
  const [errors, setErrors] = useState("");
  const [pokemonsData, setPokemonsData] = useState<PokemonsData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<PokemonModal>({
    status: false,
    pokemon_id: null,
  });

  const handleCurrentTypeFilter = useCallback((filter: string) => {
    setCurrentTypeFilter(filter);
  }, []);

  const handlePokemonsData = useCallback((data: PokemonsData | null) => {
    setPokemonsData(data);
  }, []);

  const handleErrors = useCallback((error: string) => {
    setErrors(error);
  }, []);

  const handleModal = useCallback((state: PokemonModal) => {
    setIsModalOpen(state);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        currentTypeFilter,
        handleCurrentTypeFilter,
        pokemonsData,
        handlePokemonsData,
        errors,
        handleErrors,
        isModalOpen,
        handleModal,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  return context;
}
