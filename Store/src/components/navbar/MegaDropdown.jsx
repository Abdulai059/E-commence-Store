import { CaretDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import PressmartLogo from "../../ui/Logo";

export default function MegaDropdown({ trigger, title, description, items = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-600">
        {trigger}
        {items.length > 0 && (
          <CaretDownIcon
            className={`transition-transform duration-200 ${open ? "-rotate-180" : "rotate-0"}`}
            size={16}
          />
        )}
      </button>

      {open && items.length > 0 && (
        <div className="absolute top-full -left-40 z-50 mt-1 w-[500px] rounded-md bg-white p-4 shadow-lg">
          <ul className="grid gap-2 sm:grid-cols-[0.75fr_1fr]">
            {/* LEFT SECTION */}
            <li className="row-span-3">
              <a
                href="#"
                className="flex flex-col justify-end rounded-md p-5 text-white no-underline"
              >
                <span className="mb-10">
                  <PressmartLogo size="large" variant="red" />
                </span>
                <div className="text-lg font-medium">{title}</div>
                <p className="text-sm">{description}</p>
              </a>
            </li>

            {/* RIGHT SECTION */}
            {items.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="block text-gray-700 hover:text-red-600">
                  <div className="font-medium">{item.title}</div>
                  <p className="text-sm">{item.desc}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
