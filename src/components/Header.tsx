import { Menu, Search, Settings } from "lucide-react";

export const Header = () => (
  <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
    <div className="flex items-center justify-between px-4 py-2">
      <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
        <Menu className="w-5 h-5 text-white" />
      </button>
      <h1 className="text-xl font-medium text-white">Hem</h1>
      <div className="flex items-center gap-1">
        <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
          <Search className="w-5 h-5 text-white" />
        </button>
        <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  </div>
);