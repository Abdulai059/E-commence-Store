import { createContext, useContext, useState, cloneElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>{children}</ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName, onOpen }) {
  const { open } = useContext(ModalContext);

  const handleClick = () => {
    if (onOpen) {
      onOpen();
    }
    open(opensWindowName);
  };

  return cloneElement(children, { onClick: handleClick });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm transition-all duration-500">
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 w-[90%] max-w-lg md:max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 sm:w-auto sm:p-10 md:p-14"
      >
        <button
          onClick={close}
          className="absolute top-5 right-8 rounded-sm p-1 transition-all duration-200 hover:bg-gray-100"
        >
          <HiXMark className="h-6 w-6 text-gray-500" />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;