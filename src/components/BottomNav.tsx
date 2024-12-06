import { Heart, Smile } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isTasbihPage = location.pathname === "/tasbih";

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className="flex flex-col items-center space-y-1">
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/d032001a-da70-4ec8-a670-ee7da29c8a33.png" 
              alt="Mosque" 
              className="w-5 h-5 mb-1" 
            />
            <span className={`text-xs ${isHomePage ? "text-[#40C98D]" : ""}`}>Hem</span>
          </div>
        </Link>
        <Link to="/favoriter" className="flex flex-col items-center space-y-1">
          <Heart className="w-6 h-6" />
          <span className="text-xs">Favoriter</span>
        </Link>
        <Link to="/kanslor" className="flex flex-col items-center space-y-1">
          <Smile className="w-6 h-6" />
          <span className="text-xs">Känslor</span>
        </Link>
        <Link to="/tasbih" className="flex flex-col items-center space-y-1">
          <img 
            src="/lovable-uploads/3a580410-6bd1-4b2b-b69c-2891932d66e8.png" 
            alt="Tasbih" 
            className={`w-6 h-6 ${isTasbihPage ? "filter-[#40C98D]" : ""}`} 
          />
          <span className={`text-xs ${isTasbihPage ? "text-[#40C98D]" : ""}`}>Tasbih</span>
        </Link>
      </div>
    </nav>
  );
};