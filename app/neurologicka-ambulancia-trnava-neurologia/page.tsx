import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Neurologická ambulancia | Zdravá župa Trnava',
  description: 'Neurologická ambulancia v Trnave prijíma nových pacientov. MUDr. Šimášková Ivana poskytuje neurologickú starostlivosť v modernom zdravotníckom zariadení na Študentskej ulici.',
  keywords: 'neurológia, neurologická ambulancia, Trnava, MUDr. Šimášková, Zdravá župa, neurologické vyšetrenie',
  openGraph: {
    title: 'Neurologická ambulancia | Zdravá župa Trnava',
    description: 'Neurologická ambulancia v Trnave prijíma nových pacientov. MUDr. Šimášková Ivana poskytuje neurologickú starostlivosť v modernom zdravotníckom zariadení.',
    url: 'https://zdravazupa.sk/neurologicka-ambulancia-trnava-neurologia',
    siteName: 'Zdravá župa',
    locale: 'sk_SK',
    type: 'website',
  }
};


export default function NeurologickaAmbulancia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Neurologická ambulancia</h1>

          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm mb-8">
              <div className="space-y-3">
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Poskytovateľ:</span> Zdravá župa, s.r.o.</p>
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Lekár:</span> MUDr. Šimášková Ivana</p>
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Adresa ambulancie:</span> Študentská 3579/16, 917 08 Trnava</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Mobil</div>
                    <a href="tel:+421917801230" className="font-semibold hover:text-primary transition-colors">+421 917 801 230</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <a href="mailto:neurolog@zdravazupa.sk" className="font-semibold hover:text-primary transition-colors">neurolog@zdravazupa.sk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Ordinačné hodiny</h2>
              <p className="mb-4 text-gray-600">platnosť od: 01.08.2023</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      { day: 'Pondelok', hours: '7:30 – 14:00' },
                      { day: 'Utorok', hours: '7:30 – 14:00' },
                      { day: 'Streda', hours: '7:30 – 14:00' },
                      { day: 'Štvrtok', hours: '7:30 – 16:00' },
                      { day: 'Piatok', hours: '7:30 – 15:00' },
                      { day: 'Sobota', hours: 'neordinuje' },
                      { day: 'Nedeľa', hours: 'neordinuje' },
                    ].map((item, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-3 font-medium">{item.day}</td>
                        <td className="text-right p-3 text-primary">{item.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">Objednajte sa na vyšetrenie</h3>
              <p className="text-yellow-700">Na vyšetrenie sa môžete od 01.08.2023 objednať telefonicky počas ordinačných hodín.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">CENNÍK ZDRAVOTNÝCH VÝKONOV A SLUŽIEB HRADENÝCH PACIENTOM NEUROLOGICKEJ AMBULANCIE</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-3 text-left">Úkon</th>
                      <th className="p-3 text-right">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { service: 'Komplexné vstupné neurologické vyšetrenie\n(na žiadosť pacienta nad rámec úhrady ZP,samoplatca, vyšetrenie bez doporučenia lekára)', price: '50,- €' },
                      { service: 'Kontrolné neurologické vyšetrenie\n(na žiadosť pacienta nad rámec úhrady ZP,samoplatca, vyšetrenie bez doporučenia lekára)', price: '25,- €' },
                      { service: 'Podanie obstreku\n(na žiadosť pacienta nad rámec úhrady ZP,samoplatca)', price: '25,- €' },
                      { service: 'Podanie 1 infúzie\n(na žiadosť pacienta nad rámec úhrady ZP, samoplatca, alebo indikácia iného lekára)', price: '12,- €' },
                      { service: 'Podanie 5 infúzii\n(na žiadosť pacienta nad rámec úhrady ZP,samoplatca)', price: '50,- €' },
                      { service: 'Podanie obstreku\n(spoluúčasť pacienta za likvidáciu biologického odpadu)', price: '2,- €' },
                      { service: 'Podanie 1 infúzie\n(spoluúčasť pacienta za likvidáciu biologického odpadu)', price: '2,- €' },
                      { service: 'Posudok špecialistu o pracovnej spôsobilosti pred nástupom do zamestnania, na vlastnú žiadosť pacienta', price: '20,- €' },
                      { service: 'Vystavenie kópie lekárskej správy na žiadosť pacienta\n(originál je súčasťou zdravotného výkonu)', price: '1,- €' },
                      { service: 'Vyhotovenie iných fotokópií - sadzba za 1 stranu formátu A 4', price: '1,- €' },
                      { service: 'Vyhotovenie kópie žiadanky (pri strate)', price: '3,- €' },
                    ].map((item, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-3 whitespace-pre-line">{item.service}</td>
                        <td className="p-3 text-right font-semibold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 shadow-sm space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Neurologická ambulancia poskytuje aj ambulantnú infúznu terapiu. Ide o moderný spôsob ambulantnej liečby u indikovaných ochorení, najmä pre pacientov, ktorí si nemôžu z časových resp. rodinných (osobných) dôvodov dovoliť hospitalizáciu. Ambulantná infúzna liečba je podávaná pacientom s akútnymi a chronickými ochoreniami pohybového aparátu a chrbtice, pri ochoreniach periférnych nervov, pri poruchách prekrvenia končatín, pri liečbe osteoporózy a pri iných diagnózach.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Pacienti sú objednávaní na konkrétny termín. Skúsená zdravotná sestra aplikuje liečbu na základe indikácie lekárov neurologickej a všeobecnej ambulancie. Jedná sa o celé spektrum liečby – analgetické infúzie, infúzie kortikoidov, vazoaktívne infúzie, liečba i.v. imunoglobulínom, vitamínová a nootropná liečba... Pacienti sú počas podávania infúznej terapie pod dohľadom zdravotnej sestry.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
