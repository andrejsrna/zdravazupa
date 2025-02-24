import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, FileText, FileCheck, FileQuestion, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: 'Kurz prvej pomoci | Zdravá župa',
  description: 'Akreditované kurzy prvej pomoci v Trnave. Profesionálne školenia pre jednotlivcov aj firmy za výhodné ceny.',
  keywords: 'kurz prvej pomoci, prvá pomoc, zdravotné školenie, Trnava, akreditovaný kurz',
  openGraph: {
    title: 'Kurz prvej pomoci | Zdravá župa',
    description: 'Akreditované kurzy prvej pomoci v Trnave. Profesionálne školenia pre jednotlivcov aj firmy za výhodné ceny.',
    type: 'website',
  }
};

export default function KurzPrvejPomoci() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Kurz prvej pomoci</h1>

        <div className="grid gap-8 max-w-4xl mx-auto">
          <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-primary">
            <h2 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.17 15.74a7.99 7.99 0 0 0 0-7.48M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z M3.83 8.26a8 8 0 0 1 0 7.48" />
              </svg>
              Najbližší termín kurzu pre laickú verejnosť v Trnave
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">Dátum a čas:</span> 08.03.2025 (sobota) o 8:30 hod
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Miesto konania:</span> Študentská ulica č.16, Trnava
              </p>
              <div className="bg-white bg-opacity-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  V prípade záujmu zašlite vyplnenú prihlášku na{' '}
                  <a href="mailto:kurzypp@zdravazupa.sk" className="text-primary hover:underline">kurzypp@zdravazupa.sk</a>
                  {' '}alebo nás kontaktujte na{' '}
                  <a href="tel:+421910718277" className="text-primary hover:underline">+421 910 718 277</a>.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Dôležité dokumenty
            </h2>
            <div className="flex flex-col gap-3">
              <a href="/AKREDITACIA-skolenia.pdf" 
                 className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Rozhodnutie o vydaní osvedčenia o akreditácii</span>
              </a>
              
              <a href="/skusobny_poriadok.pdf"
                 className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <FileQuestion className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Skúšobný poriadok</span>
              </a>

              <a href="/prihlaska-pp.docx"
                 className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <FileSpreadsheet className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Prihláška na kurz prvej pomoci</span>
              </a>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Cenník
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold mb-4 text-primary text-lg">Kurz u objednávateľa:</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-white rounded shadow-sm gap-2">
                    <span>11 – 15 osôb</span>
                    <span className="font-bold text-primary">35,- € / osoba</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-white rounded shadow-sm gap-2">
                    <span>6 – 10 osôb</span>
                    <span className="font-bold text-primary">45,- € / osoba</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold mb-4 text-primary text-lg">Kurz u poskytovateľa:</h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-white rounded shadow-sm gap-2">
                    <span>11 – 15 osôb</span>
                    <span className="font-bold text-primary">30,- € / osoba</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-white rounded shadow-sm gap-2">
                    <span>6 – 10 osôb</span>
                    <span className="font-bold text-primary">40,- € / osoba</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Kontakt
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-medium">PhDr. Angelika Dudžáková, PhD., MPH</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0910718277" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  0910 718 277
                </a>
                <a 
                  href="mailto:kurzypp@zdravazupa.sk" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  kurzypp@zdravazupa.sk
                </a>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="text-blue-800">V prípade, že Vám nedvíhame telefón alebo hneď neodpovedáme na email, momentálne sme na Kurze prvej pomoci, spätne Vás budeme kontaktovať.</p>
            </div>
          </section>
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
            <h2 className="text-2xl font-semibold mb-6">Často kladené otázky o kurze prvej pomoci</h2>
            
            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4">
                  <h3 className="font-medium">Čo je kurz prvej pomoci?</h3>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 pt-0">
                  <p className="text-gray-600">
                    Kurz prvej pomoci je akreditované školenie, kde sa účastníci naučia základné postupy poskytovania prvej pomoci. Zahŕňa teoretickú aj praktickú časť, kde si účastníci osvoja život zachraňujúce úkony, kardiopulmonálnu resuscitáciu, ošetrenie rán a krvácania, stabilizovanú polohu a ďalšie dôležité zručnosti.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4">
                  <h3 className="font-medium">Pre koho je kurz určený?</h3>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 pt-0">
                  <p className="text-gray-600">
                    Kurz je vhodný pre všetkých, ktorí chcú byť pripravení pomôcť v núdzových situáciách. Je ideálny pre zamestnancov firiem, pedagogických pracovníkov, športových trénerov, ale aj pre širokú verejnosť. Špeciálne kurzy organizujeme aj pre zdravotníckych pracovníkov a profesionálov v oblasti záchranných služieb.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4">
                  <h3 className="font-medium">Aké sú výhody absolvovania kurzu?</h3>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 pt-0">
                  <p className="text-gray-600">
                    Absolventi kurzu získajú sebadôveru a schopnosť správne reagovať v krízových situáciách. Naučia sa rozpoznať príznaky život ohrozujúcich stavov a poskytnúť adekvátnu prvú pomoc. Po úspešnom absolvovaní kurzu získajú certifikát s platnosťou 2 roky. Tieto znalosti môžu byť rozhodujúce pri záchrane života v kritických momentoch.
                  </p>
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-4">
                  <h3 className="font-medium">Ako prebieha kurz prvej pomoci?</h3>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 pt-0">
                  <p className="text-gray-600">
                    Kurz kombinuje teoretickú výučbu s praktickým nácvikom. Účastníci sa najprv oboznámia s teoretickými základmi prvej pomoci, následne si všetky postupy prakticky vyskúšajú na moderných výučbových modeloch. Kurz vedú skúsení lektori s dlhoročnou praxou v záchrannej zdravotnej službe. Dôraz sa kladie na praktické zvládnutie život zachraňujúcich úkonov.
                  </p>
                </div>
              </details>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
