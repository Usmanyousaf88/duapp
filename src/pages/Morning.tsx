import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Morgon = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
        <div className="flex items-center px-4 py-3">
          <Link to="/">
            <Button variant="ghost" className="p-2 hover:bg-white/10 text-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-2xl font-medium text-white ml-2">Morgon</h1>
        </div>
      </div>

      <div className="pt-16 px-4 pb-24">
        <div className="space-y-4">
          <Link to="/morgon/ayat-al-kursi" className="block">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                  1
                </div>
                <h2 className="text-lg font-medium">Ayat al-Kursi</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Morgon;