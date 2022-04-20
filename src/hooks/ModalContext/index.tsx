import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type ModalContextParams = {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  pokemonModalDetails: PokemonDetails;
  setPokemonModalDetails: Dispatch<SetStateAction<PokemonDetails>>;
}

type ModalProviderParams = {
    children: ReactNode;
}

type Stats = {
    name: string;
    value: number
}

type PokemonDetails = {
    id: number;
    name: string;
    image: string;
    types: Array<string>;
    abilities: Array<string>;
    height: number;
    weight: number;
    weaknesses: Array<string>;
    stats: Stats[];
}


const ModalContext = createContext<ModalContextParams>({} as ModalContextParams);

export function ModalProvider({ children }: ModalProviderParams) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pokemonModalDetails, setPokemonModalDetails] = useState({} as PokemonDetails)

    return (
        <ModalContext.Provider value={{modalIsOpen, setModalIsOpen, pokemonModalDetails, setPokemonModalDetails}}>
            { children }
        </ModalContext.Provider>
    )
}

export function useModal() {
    const modal = useContext(ModalContext);
    return modal
}