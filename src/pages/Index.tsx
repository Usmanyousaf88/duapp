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
    title: "Du'as för Ummah",
    color: "bg-[#E3F2FF]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/2521214c-6395-43dd-adfd-020a2e8a17f1.png",
    className: "col-span-2"
  },
  {
    title: "Morgon",
    color: "bg-[#E3F2FF]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/f9088ba9-f25e-4a89-b56d-b5be93f674cd.png",
    path: "/morgon",
    className: "col-span-2"
  },
  {
    title: "Kväll",
    color: "bg-[#FFE4D3]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/fc55e661-a5e9-40d9-8e2d-59e15ec9a008.png",
    className: "col-span-2"
  },
  {
    title: "Innan sömn",
    color: "bg-[#2B7BAD]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/b91d8cc3-9a73-432d-b0ca-70eb113ff25c.png",
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
    backgroundImage: "/lovable-uploads/65cb81c2-5564-4dd3-85d8-4341d487c0df.png",
    className: "col-span-2"
  },
  {
    title: "Prisning till Allah",
    color: "bg-[#E5DEFF]",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Salawat",
    color: "bg-[#D1E7DD]",
    icon: "/placeholder.svg",
    backgroundImage: "/lovable-uploads/c41f4c53-0d1f-43dc-9ace-ab6fe1bed6e9.png",
    className: "col-span-1"
  },
  {
    title: "Du'as från Koranen",
    color: "bg-[#F2FCE2]",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Du'as från Sunnah",
    color: "bg-[#FEF7CD]",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Dhikr för allt",
    color: "bg-[#FEC6A1]",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Istighfar",
    color: "bg-[#FFDEE2]",
    icon: "/placeholder.svg",
    className: "col-span-1"
  },
  {
    title: "Allah's namn",
    color: "bg-[#D3E4FD]",
    icon: "/placeholder.svg",
    className: "col-span-2"
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

      <div className="pt-14 pb-16">
        <div className="px-4">
          <TabToggle activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="grid grid-cols-2 gap-3 h-[calc(100vh-14rem)] overflow-y-auto">
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
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;