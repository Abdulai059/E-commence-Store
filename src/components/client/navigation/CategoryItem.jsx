import { ChevronDown, ChevronRight, Tag } from "lucide-react";

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
        <div className="mr-2 mb-2 ml-10 max-h-40">
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

export default CategoryItem;
