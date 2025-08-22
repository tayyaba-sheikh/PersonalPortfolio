// src/context/ModalContext.jsx
import React, { createContext, useContext, useState, useCallback } from "react";
import Modal from "../components/ui/Modal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        type: "default",
        title: "",
        props: {},
        children: null,
    });

    const openModal = useCallback(({ type = "default", title = "", props = {}, children = null }) => {
        setModalState({ isOpen: true, type, title, props, children });
    }, []);

    const closeModal = useCallback(() => {
        setModalState((prev) => ({ ...prev, isOpen: false }));
    }, []);

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <Modal
                isOpen={modalState.isOpen}
                type={modalState.type}
                title={modalState.title}
                onClose={closeModal}
                {...modalState.props}
            >
                {modalState.children}
            </Modal>
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
