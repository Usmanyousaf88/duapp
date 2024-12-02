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
        "w-full p-4 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98]",
        "animate-fade-in flex items-center gap-3",
        color
      )}
    >
      <img src={icon} alt="" className="w-12 h-12 object-contain" />
      <h3 className="text-lg font-medium text-left">{title}</h3>
    </button>
  );
};