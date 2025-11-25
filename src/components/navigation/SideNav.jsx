import { useCallback, useState } from "react";
import { X, Home, Info, Store, Phone, Heart, ShoppingCart, Radio } from "lucide-react";
import CategoryItem from "./CategoryItem";
import MenuItem from "./MenuItem";
import { categories } from "./CategoriesData";

export default function OpenNav({ onClose }) {
  const [activeTab, setActiveTab] = useState("main");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryToggle = useCallback(
    (index) => {
      setExpandedCategory(expandedCategory === index ? null : index);
    },
    [expandedCategory],
  );

  return (
    <div className="flex h-screen w-full flex-col bg-white shadow-2xl">
      {/* Header */}

      <div className="border-b border-gray-300 p-4">
        <button onClick={onClose} className="p-1">
          <X size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        <button
          onClick={() => setActiveTab("main")}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "main" ? "border-b-2 border-green-600 text-gray-800" : "text-gray-500"
          }`}
        >
          Main Menu
        </button>

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
            <MenuItem icon={<Home size={20} />} label="Home" active to="/" onClick={onClose} />
            <MenuItem icon={<Info size={20} />} label="About Us" to="/" onClick={onClose} />
            <MenuItem icon={<Store size={20} />} label="Shops" to="/shops" onClick={onClose} />
            <MenuItem icon={<Phone size={20} />} label="Contact" to="/contact" onClick={onClose} />
            <MenuItem
              icon={<Heart size={20} />}
              label="Wishlist"
              to="/wishlist"
              onClick={onClose}
            />

            <MenuItem
              icon={<ShoppingCart size={20} />}
              label="Shopping Cart"
              badge="4"
              to="/cart"
            />
            <MenuItem icon={<Radio size={20} />} label="Radio" to="/radio" />
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
              onToggle={() => handleCategoryToggle(index)}
            />
          ))}
        </nav>
      )}
    </div>
  );
}
