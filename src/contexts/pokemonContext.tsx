import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { PokemonModal, PokemonsData } from "../types/types";

interface PokemonProviderProps {
  children: ReactNode;
}

interface PokemonContext {
  currentTypeFilter: string;
  setCurrentTypeFilter: Dispatch<SetStateAction<string>>;
  pokemonsData: PokemonsData | null;
  setPokemonsData: Dispatch<SetStateAction<PokemonsData | null>>;
  errors: string;
  setErrors: Dispatch<SetStateAction<string>>;
  isModalOpen: PokemonModal;
  setIsModalOpen: Dispatch<SetStateAction<PokemonModal>>;
}

export const PokemonContext = createContext({} as PokemonContext);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [currentTypeFilter, setCurrentTypeFilter] = useState("all");
  const [errors, setErrors] = useState("");
  const [pokemonsData, setPokemonsData] = useState<PokemonsData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<PokemonModal>({
    status: false,
    pokemon_id: null,
  });

  return (
    <PokemonContext.Provider
      value={{
        currentTypeFilter,
        setCurrentTypeFilter,
        pokemonsData,
        setPokemonsData,
        errors,
        setErrors,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
