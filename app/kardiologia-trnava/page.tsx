import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kardiologická ambulancia | Zdravá župa Trnava",
  description: "Kardiologická ambulancia v Trnave prijíma nových pacientov. Poskytujeme komplexnú kardiologickú starostlivosť v modernom zdravotníckom zariadení na Študentskej ulici.",
  keywords: "kardiológia, kardiologická ambulancia, Trnava, Zdravá župa, kardiologické vyšetrenie, EKG, echokardiografia",
  openGraph: {
    title: "Kardiologická ambulancia | Zdravá župa Trnava",
    description: "Kardiologická ambulancia v Trnave prijíma nových pacientov. Poskytujeme komplexnú kardiologickú starostlivosť v modernom zdravotníckom zariadení.",
    url: "https://zdravazupa.sk/kardiologia-trnava",
    siteName: "Zdravá župa",
    locale: "sk_SK",
    type: "website",
  }
};


export default function KardiologickaAmbulancia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Kardiologická ambulancia</h1>

          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm mb-8">
              <div className="space-y-3">
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Poskytovateľ:</span> Zdravá župa, s.r.o.</p>
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Adresa ambulancie:</span> Študentská 3579/16, 917 08 Trnava</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Mobil</div>
                    <a href="tel:+421945464720" className="font-semibold hover:text-primary transition-colors">+421 945 464 720</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">E-mail</div>
                    <a href="mailto:kardiolog@zdravazupa.sk" className="font-semibold hover:text-primary transition-colors">kardiolog@zdravazupa.sk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Ordinačné hodiny</h2>
              <p className="mb-4 text-gray-600">platnosť od: 01.09.2024</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      { day: 'Pondelok', hours: '15:00 – 19:00' },
                      { day: 'Utorok', hours: '7:30 – 12:00, 12:30 – 18:30' },
                      { day: 'Streda', hours: '7:30 – 12:00, 12:30 – 18:30' },
                      { day: 'Štvrtok', hours: 'neordinuje' },
                      { day: 'Piatok', hours: 'neordinuje' },
                      { day: 'Sobota', hours: '8:00 – 11:30, 12:00 – 14:00' },
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
              <p className="text-yellow-700">Na vyšetrenie je potrebné sa objednať telefonicky počas ordinačných hodín.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">CENNÍK ZDRAVOTNÝCH VÝKONOV A SLUŽIEB HRADENÝCH PACIENTOM ŠPECIALIZOVANEJ KARDIOLOGICKEJ AMBULANCIE</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="text-left p-4 text-primary font-semibold">Úkon</th>
                    <th className="text-right p-4 text-primary font-semibold">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">Vstupné kardiologické vyšetrenie + EKG (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                    <td className="text-right p-4 font-medium">50,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">Kontrolné kardiologické vyšetrenie + EKG (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                    <td className="text-right p-4 font-medium">25,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">EKG vyšetrenie s popisom (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                    <td className="text-right p-4 font-medium">30,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">Echokardiografické vyšetrenie (na žiadosť pacienta nad rámec úhrady ZP)</td>
                    <td className="text-right p-4 font-medium">75,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">24-hodinové Holter EKG meranie, vrátane administratívy a vyhodnotenie (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                    <td className="text-right p-4 font-medium">50,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">24-hodinové Holter TK meranie vrátane administratívy a vyhodnotenie (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                    <td className="text-right p-4 font-medium">30,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">7 dňový Holter EKG meranie vrátane administratívy a vyhodnotenie</td>
                    <td className="text-right p-4 font-medium">150,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">Posudok špecialistu o pracovnej spôsobilosti pred nástupom do zamestnania (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                    <td className="text-right p-4 font-medium">20,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">Odber biologického materiálu na žiadosť pacienta nad rámec úhrady ZP, samoplatca (bez ceny vlastného vyšetrenia)</td>
                    <td className="text-right p-4 font-medium">15,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">INR vyšetrenie (výsledok na počkanie)</td>
                    <td className="text-right p-4 font-medium">6,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">Vystavenie kópie lekárskej správy na žiadosť pacienta (originál je súčasťou zdravotného výkonu)</td>
                    <td className="text-right p-4 font-medium">1,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-medium mb-2">Komplexné kardiologické vyšetrenie (samoplatca, na vlastnú žiadosť pacienta)</div>
                      <div className="text-gray-600 space-y-1">
                        <p className="font-medium">Komplexné kardiologické vyšetrenie zahŕňa:</p>
                        <p>• Základné vyšetrenie: anamnéza, fyzikálne vyšetrenie</p>
                        <p>• Základné antropometrické vyšetrenie, meranie pulzu a tlaku krvi</p>
                        <p>• Elektrokardiografia (EKG) – grafický záznam činnosti srdca</p>
                        <p>• Echokardiografické vyšetrenie – ultrazvukové vyšetrenie činnosti srdca</p>
                        <p>• Zhodnotenie vyšetrení, konzultácie</p>
                        <p>• Lekárska správa – pre klienta so zisteným nálezom, odporučenie režimových opatrení a prípadného liečebného postupu</p>
                      </div>
                    </td>
                    <td className="text-right p-4 align-top font-medium">150,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">Vyhotovenie iných fotokópií - sadzba za 1 stranu formátu A4</td>
                    <td className="text-right p-4 font-medium">1,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">Vyhotovenie kópie žiadanky (pri strate)</td>
                    <td className="text-right p-4 font-medium">3,- €</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="font-medium mb-2">ABI index</div>
                      <div className="text-gray-600">
                        (dôležitý rizikový marker ischemickej choroby dolných končatín – upchávanie tepien, predpovedá pravdepodobnosť výskytu srdcového infarktu alebo cievnej mozgovej príhody, vhodný pre rizikové skupiny fajčiari, diabetici)
                      </div>
                    </td>
                    <td className="text-right p-4 align-top font-medium">30,- €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
      </div>
    </div>
    </div>
  );
}
