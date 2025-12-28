
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState(null);
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

// ---------------------
// Toggle
// ---------------------
function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === id ? close() : open(id);
  }

  return (
    <button
      onClick={handleClick}
      className="p-1 rounded hover:bg-gray-100 transition"
    >
      <HiEllipsisVertical className="w-6 h-6 text-gray-700" />
    </button>
  );
}

// ---------------------
// List
// ---------------------
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      className="fixed bg-white shadow-md rounded-md border border-gray-200 overflow-hidden"
      style={{
        right: position?.x,
        top: position?.y,
      }}
    >
      {children}
    </ul>,
    document.body
  );
}

// ---------------------
// Button
// ---------------------
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="w-full flex items-center gap-4 px-6 py-3 text-left text-sm hover:bg-gray-50"
      >
        {icon && <span className="w-5 h-5 text-gray-400">{icon}</span>}
        <span>{children}</span>
      </button>
    </li>
  );
}

// Attach
Menus.Menu = function MenuWrapper({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
};
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
