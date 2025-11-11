function Topbar() {
  return (
    <div className="md:flex py-2 hidden justify-between w-full bg-primary px-4 ">
      <div className="flex gap-4 ">
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
