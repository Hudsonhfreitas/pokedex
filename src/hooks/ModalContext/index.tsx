import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type ModalContextParams = {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

type ModalProviderParams = {
    children: ReactNode;
}

const ModalContext = createContext<ModalContextParams>({} as ModalContextParams);

export function ModalProvider({ children }: ModalProviderParams) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{modalIsOpen, setModalIsOpen}}>
            { children }
        </ModalContext.Provider>
    )
}

export function useModal() {
    const modal = useContext(ModalContext);
    return modal
}