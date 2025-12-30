import { Search } from "lucide-react";
import Button from "./Button";

function SearchBar() {
  return (
    <div className="hidden h-[46px] w-full max-w-md items-center gap-2 overflow-hidden border-b border-gray-500/30 bg-gray-100 md:flex">
      <Search className="text-gray-500" />
      <input
        type="text"
        placeholder="Find products"
        className="bg- h-full w-full text-sm text-gray-600 placeholder-gray-500 outline-none"
      />
      <Button type="submit" variation="search" size="searchmediun">
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
