import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Morning = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
        <div className="flex items-center px-4 py-3">
          <Link to="/">
            <Button variant="ghost" className="p-2 hover:bg-white/10 text-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <h1 className="text-2xl font-medium text-white ml-2">Morning</h1>
        </div>
      </div>

      <div className="pt-16 px-4 pb-24">
        <div className="space-y-4">
          <Link to="/morning/ayat-al-kursi" className="block">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-medium">Ayat al-Kursi</h2>
                  <p className="text-sm text-gray-600 mt-1">The Throne Verse - A powerful protection from Allah</p>
                  <p className="text-xs text-gray-500 mt-2">Recite 1x in Arabic • Est. time: 2 mins</p>
                </div>
              </div>
            </div>
          </Link>

          <Collapsible>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                    2
                  </div>
                  <div className="flex-1 text-left">
                    <h2 className="text-lg font-medium">Last 3 Surahs</h2>
                    <p className="text-sm text-gray-600 mt-1">Al-Ikhlas, Al-Falaq, An-Nas - The three protective surahs</p>
                    <p className="text-xs text-gray-500 mt-2">Recite 3x each in Arabic • Est. time: 5 mins</p>
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 pl-12">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Surah Al-Ikhlas: The Sincerity</li>
                  <li>• Surah Al-Falaq: The Daybreak</li>
                  <li>• Surah An-Nas: Mankind</li>
                </ul>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Sayyidul Istighfar</h2>
                <p className="text-sm text-gray-600 mt-1">The Master of Seeking Forgiveness</p>
                <p className="text-xs text-gray-500 mt-2">Recite 1x in Arabic • Est. time: 3 mins</p>
                <p className="text-xs text-gray-500 mt-1">Recommended by Prophet Muhammad ﷺ</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Morning Remembrance</h2>
                <p className="text-sm text-gray-600 mt-1">Essential morning adhkar for protection and blessings</p>
                <p className="text-xs text-gray-500 mt-2">Various dhikr • Est. time: 10 mins</p>
                <div className="mt-2 text-xs text-gray-500">
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full mr-2">100x SubhanAllah</span>
                  <span className="inline-block px-2 py-1 bg-gray-100 rounded-full">100x Alhamdulillah</span>
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
                <h2 className="text-lg font-medium">Protection Du'as</h2>
                <p className="text-sm text-gray-600 mt-1">Prayers for divine protection throughout the day</p>
                <p className="text-xs text-gray-500 mt-2">Multiple du'as • Est. time: 5 mins</p>
                <p className="text-xs text-gray-500 mt-1">Shields from harm and evil eye</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#40C98D] rounded-full flex items-center justify-center text-white">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-medium">Seeking Blessings</h2>
                <p className="text-sm text-gray-600 mt-1">Du'as for a blessed and productive day</p>
                <p className="text-xs text-gray-500 mt-2">Various supplications • Est. time: 4 mins</p>
                <p className="text-xs text-gray-500 mt-1">Best recited after Fajr prayer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Morning;