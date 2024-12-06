import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";

const Emotions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
        <div className="flex items-center px-4 py-3">
          <Link to="/">
            <Button variant="ghost" className="p-2 hover:bg-white/10 text-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-2xl font-medium text-white ml-2">Emotions</h1>
        </div>
      </div>

      <div className="pt-16 px-4 pb-24">
        <div className="grid grid-cols-2 gap-3">
          {emotions.map((emotion, index) => (
            <button
              key={index}
              className="h-[100px] rounded-[24px] bg-white border border-gray-200 transition-transform hover:scale-[1.02] active:scale-[0.98] animate-fade-in flex items-end p-4"
            >
              <h3 className="text-sm font-medium text-left text-black">{emotion}</h3>
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

const emotions = [
  "Angry",
  "Sad",
  "Scared",
  "Worried",
  "Stressed",
  "Anxious",
  "Lonely",
  "Jealous",
  "Disappointed",
  "Confused",
  "Ashamed",
  "Hurt"
];

export default Emotions;