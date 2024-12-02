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
        "w-full h-[140px] rounded-[32px] transition-transform hover:scale-[1.02] active:scale-[0.98]",
        "animate-fade-in flex items-end p-6",
        color
      )}
    >
      <h3 className="text-base font-medium text-left text-black">{title}</h3>
    </button>
  );
};