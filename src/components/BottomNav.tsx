import { Home, Heart, Smile, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className="flex flex-col items-center space-y-1">
          <Home className="w-6 h-6" />
          <span className="text-xs">Hem</span>
        </Link>
        <Link to="/favoriter" className="flex flex-col items-center space-y-1">
          <Heart className="w-6 h-6" />
          <span className="text-xs">Favoriter</span>
        </Link>
        <Link to="/kanslor" className="flex flex-col items-center space-y-1">
          <Smile className="w-6 h-6" />
          <span className="text-xs">Känslor</span>
        </Link>
        <Link to="/paminnelser" className="flex flex-col items-center space-y-1">
          <Calendar className="w-6 h-6" />
          <span className="text-xs">Påminnelser</span>
        </Link>
      </div>
    </nav>
  );
};