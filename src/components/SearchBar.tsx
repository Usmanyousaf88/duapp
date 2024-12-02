import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        className="pl-9 pr-4 py-2 w-full rounded-full bg-white/90 backdrop-blur-sm"
        placeholder="Sök..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};