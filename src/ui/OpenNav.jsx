import React, { useState } from "react";
import {
  X,
  Home,
  Info,
  Store,
  Phone,
  Heart,
  ShoppingCart,
  Radio,
  Tag,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function OpenNav({ onClose }) {
  const [activeTab, setActiveTab] = useState("categories");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      name: "Computers",
      subcategories: ["Laptops", "Desktops", "Tablets", "Monitors", "Accessories"],
    },
    {
      name: "Washing Machine",
      subcategories: ["Front Load", "Top Load", "Semi-Automatic", "Fully Automatic"],
    },
    {
      name: "Accessories",
      subcategories: ["Phone Cases", "Chargers", "Cables", "Screen Protectors"],
    },
    {
      name: "Speakers",
      subcategories: ["Bluetooth Speakers", "Home Theater", "Soundbars", "Portable"],
    },
    { name: "Combo Appliances", subcategories: ["Washer Dryer", "Microwave Oven", "Multi-Cooker"] },
    {
      name: "Fridge",
      subcategories: ["Single Door", "Double Door", "Side by Side", "Mini Fridge"],
    },
    { name: "Phones", subcategories: ["Smartphones", "Feature Phones", "Accessories"] },
    { name: "Generator", subcategories: ["Portable", "Standby", "Inverter", "Solar"] },
    {
      name: "Home Appliances",
      subcategories: ["Vacuum Cleaners", "Irons", "Blenders", "Toasters"],
    },
    { name: "Television", subcategories: ["Smart TV", "LED TV", "4K TV", "OLED TV"] },
    { name: "Fans", subcategories: ["Ceiling Fans", "Table Fans", "Stand Fans", "Exhaust Fans"] },
    {
      name: "Air condition",
      subcategories: ["Split AC", "Window AC", "Portable AC", "Central AC"],
    },
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <div className="border-b border-gray-300 p-4">
        <button onClick={onClose} className="p-1">
          <X size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        <button
          onClick={() => setActiveTab("categories")}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "categories"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-500"
          }`}
        >
          Categories
        </button>
        <button
          onClick={() => setActiveTab("main")}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "main" ? "border-b-2 border-gray-800 text-gray-800" : "text-gray-500"
          }`}
        >
          Main Menu
        </button>
      </div>

      {/* Content */}
      {activeTab === "main" ? (
        <>
          {/* Welcome Box */}
          <div className="p-4">
            <div className="mb-2 rounded-lg bg-blue-50 p-3">
              <p className="mb-2 text-sm font-medium text-blue-600">Welcome!</p>
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-2.5 font-medium text-white transition-colors hover:bg-green-700">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Sign Up / Login
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="px-2">
            <MenuItem icon={<Home size={20} />} label="Home" active />
            <MenuItem icon={<Info size={20} />} label="About Us" />
            <MenuItem icon={<Store size={20} />} label="Shops" />
            <MenuItem icon={<Phone size={20} />} label="Contact" />
            <MenuItem icon={<Heart size={20} />} label="Wishlist" />
            <MenuItem icon={<ShoppingCart size={20} />} label="Shopping Cart" badge="4" />
            <MenuItem icon={<Radio size={20} />} label="Radio" />
          </nav>
        </>
      ) : (
        <nav className="flex-1 overflow-y-auto px-2 py-2">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              label={category.name}
              subcategories={category.subcategories}
              isExpanded={expandedCategory === index}
              onToggle={() => toggleCategory(index)}
            />
          ))}
        </nav>
      )}
    </div>
  );
}

function MenuItem({ icon, label, active, badge }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
        active ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      <span className={active ? "text-green-600" : "text-gray-500"}>{icon}</span>
      <span className="flex-1 text-left font-medium">{label}</span>
      {badge && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {badge}
        </span>
      )}
    </button>
  );
}

function CategoryItem({ label, subcategories, isExpanded, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50"
      >
        <Tag size={18} className="text-green-600" />
        <span className="flex-1 text-left">{label}</span>
        {isExpanded ? (
          <ChevronDown size={18} className="text-gray-400" />
        ) : (
          <ChevronRight size={18} className="text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="mr-2 mb-2 ml-10">
          {subcategories.map((sub, index) => (
            <button
              key={index}
              className="w-full rounded px-4 py-2 text-left text-sm text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700"
            >
              {sub}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
