import ZP from "../components/ZP";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambulantná pohotovostná služba pre deti a dorast | Zdravá župa Trnava",
  description: "Ambulantná pohotovostná služba pre deti a dorast v Trnave poskytuje zdravotnú starostlivosť pre pacientov zo spádových oblastí Trnava a Hlohovec.",
  keywords: "pohotovosť, detská pohotovosť, LSPP, Trnava, Zdravá župa, ambulantná pohotovostná služba",
  openGraph: {
    title: "Ambulantná pohotovostná služba pre deti a dorast | Zdravá župa Trnava",
    description: "Ambulantná pohotovostná služba pre deti a dorast v Trnave poskytuje zdravotnú starostlivosť pre pacientov zo spádových oblastí Trnava a Hlohovec.",
    url: "https://zdravazupa.sk/ambulantna-pohotovostna-sluzba-pre-deti-a-dorast",
    siteName: "Zdravá župa",
    locale: "sk_SK",
    type: "website",
  }
};


export default function AmbulantnaPohotovostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Ambulantná pohotovostná služba pre deti a dorast</h1>

          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Informácie</h2>
              <div className="space-y-3">
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Poskytovateľ:</span> Zdravá župa, s. r. o.</p>
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Miesto poskytovania:</span> Starohájska 1 v Trnave</p>
                <p className="mt-4 text-gray-700">Poskytovaná zdravotná starostlivosť je určená pre pacientov zo spádových oblastí Trnava a Hlohovec.</p>
                <p className="bg-yellow-50 p-3 rounded-md border border-yellow-200 mt-4">
                  <span className="text-yellow-800">⚠️ Upozornenie:</span> Počas sviatkov je zdravotná starostlivosť poskytovaná v čase 07:00 – 22:00 hod.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-green-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Pevná linka</div>
                    <div className="font-semibold">033/55 86 896</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Mobil</div>
                    <div className="font-semibold">+421 948 331 758</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Ordinačné hodiny</h2>
              <p className="mb-4 text-gray-600">platnosť od: 01.12.2022</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      { day: 'Pondelok', hours: '16:00 – 20:00' },
                      { day: 'Utorok', hours: '16:00 – 20:00' },
                      { day: 'Streda', hours: '16:00 – 20:00' },
                      { day: 'Štvrtok', hours: '16:00 – 20:00' },
                      { day: 'Piatok', hours: '16:00 – 20:00' },
                      { day: 'Sobota', hours: '08:00 – 20:00' },
                      { day: 'Nedeľa', hours: '08:00 – 20:00' },
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
          </section>
          <ZP />
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">AMBULANTNÁ POHOTOVOSTNÁ SLUŽBA PRE DETI A DORAST - CENNÍK ZDRAVOTNÝCH VÝKONOV A SLUŽIEB HRADENÝCH PACIENTOM</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left p-3 bg-gray-50">Názov výkonu</th>
                      <th className="text-right p-3 bg-gray-50">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Poplatok v APS v zmysle zákona č.577/2004 Z.z.</td>
                      <td className="text-right p-3">2,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vyšetrenie CRP (výsledok na počkanie)</td>
                      <td className="text-right p-3">8,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vyšetrenie moču (výsledok na počkanie, hodnoty: kyselina askorbová, bilirubín, krv, glukóza, ketóny, leukocyty, nitrity, pH, bielkovina, špecifická hmotnosť, urobilinogen)</td>
                      <td className="text-right p-3">5,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vyšetrenie CRP bez indikácie lekára na vlastnú žiadosť rodiča (výsledok na počkanie)</td>
                      <td className="text-right p-3">15,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vyšetrenie moču bez indikácie lekára na vlastnú žiadosť rodiča (výsledok na počkanie, hodnoty: kyselina askorbová, bilirubín, krv, glukóza, ketóny, leukocyty, nitrity, pH, bielkovina, špecifická hmotnosť, urobilinogen)</td>
                      <td className="text-right p-3">8,- €</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="text-xl font-semibold my-6">Vyšetrenie pacienta cudzej štátnej príslušnosti bez doloženého preukazu EÚ, alebo pacienta cudzej štátnej príslušnosti bez akéhokoľvek dokladu o poistení:</h3>
                
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">do 5 rokov života</td>
                      <td className="text-right p-3">30,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">nad 5 rokov života</td>
                      <td className="text-right p-3">25,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">krátka správa lekára APS pre ošetrujúceho lekára</td>
                      <td className="text-right p-3">5,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">vyšetrenie CRP (výsledok na počkanie)</td>
                      <td className="text-right p-3">15,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">odber krvi</td>
                      <td className="text-right p-3">10,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">odber moču</td>
                      <td className="text-right p-3">6,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">podanie injekcie do svalu, podanie čípku, nebulizácia alebo inhalačné podanie liečiva</td>
                      <td className="text-right p-3">7,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">podanie injekcie do žily</td>
                      <td className="text-right p-3">10,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">extrakcia kliešťa, ošetrenie malej rany</td>
                      <td className="text-right p-3">7,- €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
