import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { TabToggle } from "@/components/TabToggle";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { CategoryGrid } from "@/components/CategoryGrid";
import { mainCategories, otherCategories } from "@/data/categories";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"main" | "other">("main");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-14 pb-16">
        <div className="px-4">
          <TabToggle activeTab={activeTab} onTabChange={setActiveTab} />
          <CategoryGrid 
            categories={activeTab === "main" ? mainCategories : otherCategories}
            searchQuery={searchQuery}
          />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;