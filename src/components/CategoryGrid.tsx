import { Category } from "@/types/Category";
import { CategoryCard } from "@/components/CategoryCard";
import { useNavigate } from "react-router-dom";

interface CategoryGridProps {
  categories: Category[];
  searchQuery: string;
}

export const CategoryGrid = ({ categories, searchQuery }: CategoryGridProps) => {
  const navigate = useNavigate();
  
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 gap-3 pt-4 pb-24 overflow-y-auto">
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
  );
};