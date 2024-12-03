import { BottomNav } from "@/components/BottomNav";
import { Settings } from "lucide-react";

const emotions = [
  { name: "Angry", color: "bg-pink-100" },
  { name: "Anxious", color: "bg-green-100" },
  { name: "Bored", color: "bg-blue-50" },
  { name: "Confident", color: "bg-amber-50" },
  { name: "Confused", color: "bg-green-100" },
  { name: "Content", color: "bg-pink-100" },
  { name: "Depressed", color: "bg-gray-100" },
  { name: "Doubtful", color: "bg-blue-50" },
  { name: "Grateful", color: "bg-pink-100" },
  { name: "Guilty", color: "bg-green-100" },
  { name: "Happy", color: "bg-pink-100" },
  { name: "Hurt", color: "bg-pink-200" },
  { name: "Indecisive", color: "bg-gray-100" },
  { name: "Jealous", color: "bg-green-100" },
];

const Emotions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-medium text-white">Emotions</h1>
          <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="pt-16 px-4 pb-24">
        <h2 className="text-lg mb-4">I am feeling ...</h2>
        <div className="grid grid-cols-2 gap-3">
          {emotions.map((emotion, index) => (
            <button
              key={index}
              className={`${emotion.color} px-6 py-3 rounded-xl text-left transition-transform hover:scale-[1.02] active:scale-[0.98]`}
            >
              {emotion.name}
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Emotions;