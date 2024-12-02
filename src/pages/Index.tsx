import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { TabToggle } from "@/components/TabToggle";
import { Settings } from "lucide-react";

const mainCategories = [
  {
    title: "Morgon",
    color: "bg-blue-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Kväll",
    color: "bg-orange-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Före sömn",
    color: "bg-indigo-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Salah",
    color: "bg-green-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Efter Salah",
    color: "bg-cyan-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Ruqyah & Sjukdom",
    color: "bg-pink-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Allahs namn",
    color: "bg-purple-50",
    icon: "/placeholder.svg",
  },
  {
    title: "Salawat",
    color: "bg-emerald-50",
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
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 inset-x-0 bg-primary z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-semibold text-white">Dhikr & Dua</h1>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="px-4 pb-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="pt-28 px-4 pb-4">
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
    </div>
  );
};

export default Index;