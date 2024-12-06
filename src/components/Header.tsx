import { Menu, Search } from "lucide-react";

export const Header = () => (
  <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
    <div className="flex items-center justify-between px-4 py-3">
      <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
        <Menu className="w-5 h-5 text-white" />
      </button>
      <h1 className="text-xl font-medium text-white absolute left-1/2 transform -translate-x-1/2">Home</h1>
      <div className="flex items-center gap-1">
        <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  </div>
);