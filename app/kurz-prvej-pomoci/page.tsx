import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
        <h1 className="text-5xl font-bold mb-8 text-center">Kurz prvej pomoci</h1>

        <div className="grid gap-12 max-w-4xl mx-auto">
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Dôležité dokumenty
            </h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start text-left" asChild>
                <a href="/AKREDITACIA-skolenia.pdf">Rozhodnutie o vydaní osvedčenia o akreditácii</a>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left" asChild>
                <a href="/skusobny_poriadok.pdf">Skúšobný poriadok</a>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left" asChild>
                <a href="#">Prihláška na kurz prvej pomoci</a>
              </Button>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">CENNÍK</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4 text-primary">Kurz u objednávateľa:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span>11 – 15 osôb</span>
                    <span className="font-bold text-primary">35,- € / osoba</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span>6 – 10 osôb</span>
                    <span className="font-bold text-primary">45,- € / osoba</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4 text-primary">Kurz u poskytovateľa:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span>11 – 15 osôb</span>
                    <span className="font-bold text-primary">30,- € / osoba</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span>6 – 10 osôb</span>
                    <span className="font-bold text-primary">40,- € / osoba</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              KONTAKT
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-medium">PhDr. Angelika Dudžáková, PhD., MPH</p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:0910718277" className="text-primary hover:underline">0910 718 277</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:kurzypp@zdravazupa.sk" className="text-primary hover:underline">kurzypp@zdravazupa.sk</a>
              </p>
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
