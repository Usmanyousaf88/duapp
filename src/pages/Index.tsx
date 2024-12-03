import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { TabToggle } from "@/components/TabToggle";
import { Menu, Search, Settings } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

interface Category {
  title: string;
  color: string;
  icon: string;
  backgroundImage?: string;
  path?: string;
  className?: string;
}

const mainCategories: Category[] = [
  {
    title: "Morgon",
    color: "bg-[#E3F2FF]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/06d4cf93-d763-48c2-abb0-ff4f7b861e89.png",
    path: "/morgon",
    className: "col-span-2"
  },
  {
    title: "Kväll",
    color: "bg-[#FFE4D3]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/9ec8fd58-fb12-4985-9f32-763ecdfb8eb0.png",
    className: "col-span-2"
  },
  {
    title: "Innan sömn",
    color: "bg-[#2B7BAD]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/0b6e3c07-dc74-495e-afc3-e84d4cd8fdd8.png",
    className: "col-span-2"
  },
  {
    title: "Bönen",
    color: "bg-[#D1E7DD]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/92159964-0425-4808-9d78-ce51505ed51b.png",
    className: "col-span-1"
  },
  {
    title: "Efter bönen",
    color: "bg-[#D3E4FD]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/5c189f4d-0c86-408e-9466-bd19c2c68c80.png",
    className: "col-span-1"
  },
  {
    title: "Ruqyah & sjukdom",
    color: "bg-[#FFE4E6]",
    icon: "/placeholder.svg",
    className: "col-span-2"
  },
  {
    title: "Allahs namn",
    color: "bg-[#E5DEFF]",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Salawat",
    color: "bg-[#D1E7DD]",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
];

const otherCategories: Category[] = [
  {
    title: "Uppvaknande",
    color: "bg-blue-50",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Mardrömmar",
    color: "bg-rose-50",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Kläder",
    color: "bg-green-50",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Toalett & Wudu",
    color: "bg-violet-50",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Mat & Dryck",
    color: "bg-amber-50",
    icon: "/placeholder.svg",
    className: "col-span-2"
  },
  {
    title: "Hemmet",
    color: "bg-rose-50",
    icon: "/placeholder.svg",
    className: "col-span-2"
  },
  {
    title: "Adhan & Moské",
    color: "bg-blue-50",
    icon: "/placeholder.svg",
    className: "col-span-2"
  },
  {
    title: "Istikhara",
    color: "bg-green-50",
    icon: "/placeholder.svg",
    className: "col-span-2"
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<"main" | "other">("main");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

      <div className="pt-14 px-4 pb-24">
        <TabToggle activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="grid grid-cols-2 gap-3">
          {filteredCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              color={category.color}
              icon={category.icon}
              backgroundImage={category.backgroundImage}
              onClick={() => category.path && navigate(category.path)}
              className={category.className}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;