import SideNav from "../navigation/SideNav";

function NavItems({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all"
        onClick={onClose}
      />

      <div className="animate-slide-in fixed top-0 left-0 z-50 h-full w-[80%] max-w-[320px] bg-white shadow-lg md:w-80">
        <SideNav onClose={onClose} />
      </div>
    </>
  );
}

export default NavItems;