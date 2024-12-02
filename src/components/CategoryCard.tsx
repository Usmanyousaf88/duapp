import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  color: string;
  icon: string;
  onClick?: () => void;
}

export const CategoryCard = ({ title, color, icon, onClick }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-6 rounded-[32px] transition-transform hover:scale-[1.02] active:scale-[0.98]",
        "animate-fade-in flex items-start",
        color
      )}
    >
      <h3 className="text-2xl font-medium text-left text-black">{title}</h3>
    </button>
  );
};