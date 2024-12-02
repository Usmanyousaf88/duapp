import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { TabToggle } from "@/components/TabToggle";
import { Menu, Search, Settings } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

const mainCategories = [
  {
    title: "Morgon",
    color: "bg-[#E3F2FF]",
    icon: "/placeholder.svg",
  },
  {
    title: "Kväll",
    color: "bg-[#FFE4D3]",
    icon: "/placeholder.svg",
  },
  {
    title: "Innan sömn",
    color: "bg-[#2B7BAD]",
    icon: "/placeholder.svg",
  },
  {
    title: "Bönen",
    color: "bg-[#D1E7DD]",
    icon: "/placeholder.svg",
  },
  {
    title: "Efter bönen",
    color: "bg-[#D3E4FD]",
    icon: "/placeholder.svg",
  },
  {
    title: "Ruqyah & sjukdom",
    color: "bg-[#FFE4E6]",
    icon: "/placeholder.svg",
  },
  {
    title: "Allahs namn",
    color: "bg-[#E5DEFF]",
    icon: "/placeholder.svg",
  },
  {
    title: "Salawat",
    color: "bg-[#D1E7DD]",
    icon: "/placeholder.svg",
  },
];

const otherCategories = [
  {
    title: "Mat & Dryck",
    color: "bg-rose-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Hemmet",
    color: "bg-amber-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Adhan & Moské",
    color: "bg-violet-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Istikhara",
    color: "bg-teal-50",
    icon: "/placeholder.svg",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<"main" | "other">("main");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const categories = activeTab === "main" ? mainCategories : otherCategories;
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-medium text-white">Hem</h1>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Search className="w-6 h-6 text-white" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Settings className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-16 px-4 pb-24">
        <TabToggle activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="grid gap-4">
          {filteredCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              color={category.color}
              icon={category.icon}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;