import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
          <h1 className="text-2xl font-medium text-white ml-2">Ayat al-Kursi</h1>
        </div>
      </div>

      <div className="pt-16 px-4 pb-24">
        <div className="space-y-6">
          <div className="text-right leading-loose text-xl" dir="rtl">
            أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ. اَللّٰهُ لَآ إِلٰهَ إِلَّا هُوَ الْحَىُّ الْقَيُّوْمُ ، لَا تَأْخُذُهُۥ سِنَةٌ وَّلَا نَوْمٌ ، لَهُ مَا فِى السَّمٰـوٰتِ وَمَا فِى الْأَرْضِ ، مَنْ ذَا الَّذِىْ يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِۦ ، يَعْلَمُ مَا بَيْنَ أَيْدِيْهِمْ وَمَا خَلْفَهُمْ ، وَلَا يُحِيْطُوْنَ بِشَىْءٍ مِّنْ عِلْمِهِٓ إِلَّا بِمَا شَآءَ ، وَسِعَ كُرْسِيُّهُ السَّمٰـوٰتِ وَالْأَرْضَ، وَلَا يَئُوْدُهُۥ حِفْظُهُمَا ، وَهُوَ الْعَلِىُّ الْعَظِيْمُ.
          </div>
          
          <div className="text-sm text-center text-gray-600">(1x)</div>

          <div className="space-y-4">
            <div>
              <h2 className="font-semibold mb-2">Translation</h2>
              <p className="text-gray-700 leading-relaxed">
                I seek the protection of Allah from the accursed Shayṭān. Allah, there is no god worthy of worship but He, the Ever Living, The Sustainer of all. Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except with His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation does not tire Him. And He is the Most High, the Magnificent. (2:255)
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Transliteration</h2>
              <p className="text-gray-700 leading-relaxed">
                Aʿūdhu bi-llāhi mina-sh-Shayṭāni-r-rajīm. Allāhu lā ilāha illā Huwa-l-Ḥayyu-l-Qayyūm, lā ta'khudhuhū sinatuw-wa lā nawm, lahū mā fi-s-samāwāti wa mā fi-l-arḍ, man dhā'lladhī yashfaʿu ʿindahū illā bi-idhnih, yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shay'im-min ʿilmihī illā bi-mā shā', wasiʿa kursiyyuhu-s-samāwāti wa-l-arḍ, wa lā ya'ūduhū ḥifẓuhumā wa Huwa-l-ʿAlliyu-l-ʿAẓīm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyatAlKursi;