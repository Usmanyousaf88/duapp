import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";

const BeforeSleep = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
        <div className="flex items-center px-4 py-3">
          <Link to="/">
            <Button variant="ghost" className="p-2 hover:bg-white/10 text-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-2xl font-medium text-white ml-2">Before Sleep</h1>
        </div>
      </div>

      <div className="pt-16 px-4 pb-24">
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Surah Al-Mulk</h2>
                <p className="text-sm text-gray-600 mt-1">The Sovereignty - Protection during sleep</p>
                <p className="text-xs text-gray-500 mt-2">Recite 1x in Arabic • Est. time: 7 mins</p>
                <p className="text-xs text-gray-500 mt-1">Recommended by Prophet Muhammad ﷺ</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Last Two Verses of Surah Al-Baqarah</h2>
                <p className="text-sm text-gray-600 mt-1">Protection throughout the night</p>
                <p className="text-xs text-gray-500 mt-2">Recite 1x in Arabic • Est. time: 2 mins</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Sleeping Du'as</h2>
                <p className="text-sm text-gray-600 mt-1">Essential supplications before sleeping</p>
                <p className="text-xs text-gray-500 mt-2">Multiple du'as • Est. time: 5 mins</p>
                <div className="mt-2 text-xs text-gray-500">
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full mr-2">Dust off bed 3x</span>
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full">Sleep on right side</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Dhikr Before Sleep</h2>
                <p className="text-sm text-gray-600 mt-1">Remembrance of Allah before sleeping</p>
                <p className="text-xs text-gray-500 mt-2">Various adhkar • Est. time: 3 mins</p>
                <div className="mt-2 text-xs text-gray-500">
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full mr-2">33x SubhanAllah</span>
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full mr-2">33x Alhamdulillah</span>
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full">34x Allahu Akbar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Protection from Nightmares</h2>
                <p className="text-sm text-gray-600 mt-1">Du'as for peaceful sleep</p>
                <p className="text-xs text-gray-500 mt-2">Multiple du'as • Est. time: 2 mins</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Istighfar Before Sleep</h2>
                <p className="text-sm text-gray-600 mt-1">Seeking forgiveness before rest</p>
                <p className="text-xs text-gray-500 mt-2">Various forms • Est. time: 3 mins</p>
                <p className="text-xs text-gray-500 mt-1">Clear your heart before sleep</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default BeforeSleep;