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
        </div>
      </div>
    </div>
  );
}
