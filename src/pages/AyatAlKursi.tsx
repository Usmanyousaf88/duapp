import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";

const AyatAlKursi = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 inset-x-0 bg-[#40C98D] z-10">
        <div className="flex items-center px-4 py-3">
          <Link to="/morgon">
            <Button variant="ghost" className="p-2 hover:bg-white/10 text-white">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </Link>
          <div className="flex-1 text-center mr-8">
            <h1 className="text-lg font-medium text-white">After Waking Up #1</h1>
            <div className="text-white/90 text-sm">1/2</div>
          </div>
        </div>
      </div>

      <div className="pt-20 px-4 pb-24">
        <div className="space-y-6 bg-white rounded-lg p-6">
          <div className="text-right leading-loose text-2xl" dir="rtl">
            الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Alhamdu li-llāhi-l-ladhī aḥyānā ba'da mā amātanā wa ilayhi-n-nushūr.
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                All praise is for Allah Who gave us life after having taken it from us and unto Him is the resurrection.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-medium mb-2">Hadith</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Abu Dhar (rady Allāhu 'anhu) narrates that whenever the Prophet ﷺ lay on his bed, he used to say: "O Allah, solely in Your Name I die and I live," and when he woke up he would say: [the above]. (Bukhārī 6325)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-16 inset-x-0 p-4 flex justify-center space-x-8">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </button>
        <button className="p-2 rounded-full bg-[#40C98D] text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default AyatAlKursi;