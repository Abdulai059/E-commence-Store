function Topbar() {
  return (
    <div className="not-odd: hidden w-full justify-center bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF] py-2.5 text-center text-sm font-medium text-green-800 md:flex">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-4 text-center sm:flex-row">
        <p>🚚 Free Shipping on Orders Above $50</p>
        <span className="hidden sm:inline">|</span>
        <p>🎁 20% OFF on First Purchase</p>
        <span className="hidden sm:inline">|</span>
        <p>
          🔐 Use Code: <strong>WELCOME10</strong>
        </p>
      </div>
    </div>
  );
}

export default Topbar;

// <div className="text-foreground bg-primary hidden  justify-between px-4 py-2 md:flex">
//   <div className="flex gap-4">
//     <a className="text-base" href="#">
//       📞 +233 24 123 456
//     </a>
//     <a className="text-base" href="#">
//       📧 support@pressmart.com
//     </a>
//   </div>

//   <div className="flex gap-4">
//     <a className="text-base" href="#">
//       wishlist (0)
//     </a>
//     <a className="text-base" href="#">
//       track order
//     </a>
//   </div>
// </div>
