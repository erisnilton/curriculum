import React from "react";
import { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";

import "./styles.scss";

export interface ModalProps {
  open?: boolean;
  onChangeOpen?: (open: boolean) => void;
  children?: React.ReactNode;
}

export interface ModalContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toogle: () => void;
}

const ModalContext = React.createContext<ModalContextProps>({
  isOpen: false,
  open: () => {},
  close: () => {},
  toogle: () => {},
});

export const useModal = () => useContext(ModalContext);

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  const { onChangeOpen, children } = props;
  const [isOpen, setIsOpen] = useState(props.open ?? false);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const setVisibility = (value: boolean) => {
    setIsOpen(value);
    onChangeOpen?.(value);
  };

  const close = () => {
    setVisibility(false);
  };

  const open = () => {
    setVisibility(true);
  };

  const toogle = () => {
    setVisibility(!isOpen);
  };

  useEffect(() => {
    setIsOpen(props.open ?? false);
  }, [props.open]);

  useEffect(() => {
    let modalCount = Number(document.documentElement.dataset.modal ?? 0);
    modalCount += isOpen ? 1 : -1;
    if (modalCount > 0) {
      document.documentElement.dataset.modal = modalCount.toString();
    } else {
      delete document.documentElement.dataset.modal;
    }
  }, [isOpen]);

  return isOpen ? (
    createPortal(
      <ModalContext.Provider value={{ isOpen, open, close, toogle }}>
        <div className="modal" onClick={close}>
          <div className="modal__content" onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </ModalContext.Provider>,
      document.body
    )
  ) : (
    <></>
  );
};

export default Modal;
