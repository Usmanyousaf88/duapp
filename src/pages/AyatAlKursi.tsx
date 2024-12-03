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
            <h1 className="text-lg font-medium text-white">Ayat al-Kursi</h1>
            <div className="text-white/90 text-sm">1/2</div>
          </div>
        </div>
      </div>

      <div className="pt-20 px-4 pb-24">
        <div className="space-y-6 bg-white rounded-lg p-6">
          <div className="text-right leading-loose text-2xl" dir="rtl">
            أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ. اَللّٰهُ لَآ إِلٰهَ إِلَّا هُوَ الْحَىُّ الْقَيُّوْمُ ، لَا تَأْخُذُهُۥ سِنَةٌ وَّلَا نَوْمٌ ، لَهُ مَا فِى السَّمٰـوٰتِ وَمَا فِى الْأَرْضِ ، مَنْ ذَا الَّذِىْ يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِۦ ، يَعْلَمُ مَا بَيْنَ أَيْدِيْهِمْ وَمَا خَلْفَهُمْ ، وَلَا يُحِيْطُوْنَ بِشَىْءٍ مِّنْ عِلْمِهِٓ إِلَّا بِمَا شَآءَ ، وَسِعَ كُرْسِيُّهُ السَّمٰـوٰتِ وَالْأَرْضَ، وَلَا يَئُوْدُهُۥ حِفْظُهُمَا ، وَهُوَ الْعَلِىُّ الْعَظِيْمُ
          </div>
          
          <div className="text-center text-gray-600 text-sm">(1x)</div>

          <div className="space-y-4">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Allahu lâ ilâha illâ Huwal-Hayyul-Qayyûm, lâ ta´khuthuhu sinatun wa lâ nawm, lahu mâ fis-samâwâti wa mâfil-ardh, man thal-lathî yashfa'u 'indahu illâ bi'ithnih, ya'lamu mâ bayna aydîhim wa mâ khalfahum, wa lâ yuhîtûna bishay´im-min 'ilmihi illâ bimâ shâ´a, wasi'a kursiyyuhus-samâwâti wal ardha, wa lâ ya'ûduhu hifdhuhumâ, wa Huwal-'Aliyyul-'Adhîm.
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                "Allah! - det finns ingen sann gud utom Han, den Levande, skapelsens evige Vidmakthållare. Slummer överraskar Honom inte och inte heller sömn. Honom tillhör allt det som himlarna rymmer och det som jorden bär. Vem är den som vågar tala [för någon] inför Honom utan Hans tillstånd? Han vet allt vad [människor] kan veta och allt som är dolt för dem och av Hans kunskap kan de inte omfatta mer än Han tillåter. Hans fotpall omsluter himlarna och jorden. Att värna och bevara dem är för Honom ingen börda. Han är den Höge, den Väldige." [Koranen 2: 255]
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