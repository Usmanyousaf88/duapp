import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  color: string;
  icon: string;
  backgroundImage?: string;
  onClick?: () => void;
  className?: string;
}

export const CategoryCard = ({ title, color, backgroundImage, onClick, className }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-[140px] rounded-[24px] transition-transform hover:scale-[1.02] active:scale-[0.98]",
        "animate-fade-in flex items-end p-4 relative overflow-hidden",
        !backgroundImage && color,
        className
      )}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      <div className="relative z-10 mb-2">
        <h3 className="text-sm font-medium text-left text-black">{title}</h3>
      </div>
    </button>
  );
};