function Topbar() {
  return (
    <div className="text-foreground bg-primary hidden  justify-between px-4 py-2 md:flex">
      <div className="flex gap-4">
        <a className="text-base" href="#">
          📞 +233 24 123 456
        </a>
        <a className="text-base" href="#">
          📧 support@pressmart.com
        </a>
      </div>

      <div className="flex gap-4">
        <a className="text-base" href="#">
          wishlist (0)
        </a>
        <a className="text-base" href="#">
          track order
        </a>
      </div>
    </div>
  );
}

export default Topbar;
