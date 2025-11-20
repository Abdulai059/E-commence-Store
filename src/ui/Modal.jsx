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

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-1000 bg-black/50 backdrop-blur-sm transition-all duration-500" />

      {/* Modal - Mobile First, Responsive */}
      <div
        ref={ref}
        className="fixed inset-x-4 top-4 bottom-4 z-1001 overflow-y-auto rounded-xl bg-white p-4 shadow-2xl transition-all duration-500 sm:inset-x-8 sm:top-8 sm:bottom-8 sm:p-6 md:inset-x-auto md:inset-y-auto md:top-1/2 md:left-1/2 md:max-h-[90vh] md:w-[90vw] md:max-w-5xl md:-translate-x-1/2 md:-translate-y-1/2 md:p-8 md:px-16 md:py-12"
      >
        <button
          onClick={close}
          className="absolute top-2 right-2 z-10 rounded-md p-1.5 transition-colors hover:bg-gray-100 sm:top-4 sm:right-4"
        >
          <HiXMark className="h-5 w-5 text-gray-500 sm:h-6 sm:w-6" />
        </button>

        <div className="mt-8 sm:mt-0">{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
