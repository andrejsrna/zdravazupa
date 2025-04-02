import { Metadata } from "next";
import Benefits from "../components/Benefits";
import ZP from "../components/ZP";
import { Fragment } from "react";
import { FileText, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "Ambulancia klinickej psychológie | Zdravá župa",
  description: "Špecializovaná ambulancia klinickej psychológie poskytuje pacientom psychodiagnostické vyšetrenia na žiadosť ošetrujúceho lekára a individuálnu psychoterapeutickú intervenciu zameranú na liečbu duševných porúch.",
  keywords: "Ambulancia klinickej psychológie, Zdravá župa",
  openGraph: {
    title: "Ambulancia klinickej psychológie | Zdravá župa",
    description: "Špecializovaná ambulancia klinickej psychológie poskytuje pacientom psychodiagnostické vyšetrenia na žiadosť ošetrujúceho lekára a individuálnu psychoterapeutickú intervenciu zameranú na liečbu duševných porúch.",
    url: "https://zdravazupa.sk/ambulancia-klinickej-psychologie",
    siteName: "Zdravá župa",
    locale: "sk_SK",
    type: "website",
  }
};

export default function ADOS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-primary">Ambulancia klinickej psychológie</h1>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">

          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-3">
              <p className="text-xl font-medium bg-gradient-to-r from-primary/10 to-transparent p-2 rounded-lg">
                Mgr.Lukáš Vaško, PhD.
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="text-primary">●</span> Poskytovateľ: Zdravá župa, s. r. o.
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="text-primary">●</span> Adresa ambulancie: Študentská 3579/16, 917 08 Trnava
              </p>
              <hr />
              <p className="text-gray-600">
                Špecializovaná ambulancia klinickej psychológie poskytuje pacientom psychodiagnostické vyšetrenia na žiadosť ošetrujúceho lekára a individuálnu psychoterapeutickú intervenciu zameranú na liečbu duševných porúch. Ambulancia poskytuje diagnostiku a terapiu pomocou biologickej spätnej väzby /biofeedback/, ktorá je zameraná na liečbu úzkostných stavov, stresu a ďalších psychosomatických ťažkostí. V rámci psychodiagnostiky ambulancia poskytuje klinickopsychologické vyšetrenia pacientov s rodovou dysfóriou. Taktiež vykonávame psychologické vyšetrenia o psychickej spôsobilosti na držanie strelných zbraní a streliva.
              </p>
            </div>
          </section>

          <div className="bg-green-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt</h2>
            <div className="space-y-4">

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Mobil</div>
                  <a href="tel:+421917242614" className="font-semibold hover:text-primary transition-colors">0917 242 614</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <a href="mailto:psycholog@zdravazupa.sk" className="font-semibold hover:text-primary transition-colors">psycholog@zdravazupa.sk</a>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-blue-800">V prípade, že Vám nedvíhame telefón alebo hneď neodpovedáme na email, momentálne sme zaneprázdnení starostlivosťou o pacientov. Prosím, skúste nás kontaktovať neskôr alebo nám zanechajte správu a my sa Vám ozveme hneď, ako to bude možné.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              ORDINAČNÉ HODINY
            </h2>
            <p className="mb-4 text-gray-600 italic">platnosť od: 01.10.2024</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["Pondelok", "07:00 – 11:30	| 12:00 – 15:00"],
                ["Utorok", "07:00 – 11:30	| 12:00 – 15:00"],
                ["Streda", "07:00 – 11:30	| 12:00 – 15:00"],
                ["Štvrtok", "07:00 – 11:30	| 12:00 – 15:00"],
                ["Piatok", "07:00 – 11:30	| 12:00 – 15:00"],
                ["Sobota", "neordinuje"],
                ["Nedeľa", "neordinuje"]
              ].map(([day, hours], i) => (
                <Fragment key={i}>
                  <div className="font-medium bg-gray-50 p-2 rounded">{day}:</div>
                  <div className="bg-gray-50 p-2 rounded text-primary">{hours}</div>
                </Fragment>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <FileText className="w-6 h-6" />
              DOKUMENTY NA STIAHNUTIE
            </h2>
            <div className="space-y-4">

              <a href="/Navrh_na_poskytovanie_stacionar_psychiatria.docx" 
                 className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <FileSpreadsheet className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Návrh na poskytovanie ošetrovateľskej starostlivosti</span>
              </a>

              <p className="text-gray-600 mt-4">
                Pre uľahčenie procesu poskytovania našich služieb sme pre Vás pripravili potrebné dokumenty na stiahnutie. Tieto formuláre sú dostupné vo formátoch vhodných pre elektronické vypĺňanie aj pre tlač. Prosíme o ich dôkladné vyplnenie pred prvou návštevou, čo nám pomôže efektívnejšie nastaviť plán starostlivosti podľa Vašich potrieb.
              </p>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary uppercase">CENNÍK ZDRAVOTNÝCH VÝKONOV A SLUŽIEB HRADENÝCH PACIENTOM ambulancie klinickej psychológie</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-3 bg-gray-50">Úkon</th>
                  <th className="text-right p-3 bg-gray-50">Cena</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b font-semibold bg-gray-50">
                  <td className="p-3" colSpan={2}>Cenník výkonov mimo úhrady zdravotnej poisťovne</td>
                </tr>
                {[
                  ["Individuálna terapia, poradenstvo /50min./", "50,- €"],
                  ["Individuálna terapia, poradenstvo (deti, študenti)", "35,- €"],
                  ["Skupinová psychoterapia", "15,- €"],
                  ["Skupinový nácvik relaxačných techník  ", "10,- €"]
                ].map(([service, price], i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">{service}</td>
                    <td className="text-right p-3">{price}</td>
                  </tr>
                ))}

                <tr className="border-b font-semibold bg-gray-50">
                  <td className="p-3" colSpan={2}>Biofeedback (pre samoplatcov)</td>
                </tr>
                {[
                  ["Biofeedback: Stresový profil", "50,- €"],
                  ["Biofeedback tréning", "40,- €"]
                ].map(([service, price], i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">{service}</td>
                    <td className="text-right p-3 w-40">{price}</td>
                  </tr>
                ))}

                <tr className="border-b font-semibold bg-gray-50">
                  <td className="p-3" colSpan={2}>Psychologické vyšetrenia (pre samoplatcov)</td>
                </tr>
                {[
                  ["Psychodiagnostické vyšetrenie /cca 1,5-2hod./ - pre samoplatcov", "150,- €"],
                  ["Psychologické vyšetrenie žiadateľov a držiteľov zbrane a streliva (do 5 pracovných dní)", "100,- €"],
                  ["Psychologické vyšetrenie žiadateľov a držiteľov zbrane a streliva (do 24 hodín)", "150,- €"],
                  ["Psychologické vyšetrenie pracovníkov SBS /bez zbrojného preukazu/ (do 5 pracovných dní)", "80,- €"],
                  ["Psychologické vyšetrenie pracovníkov SBS /bez zbrojného preukazu/ (do 24 hodín)", "120,- €"],
                  ["Psychologické vyšetrenie uchádzačov pre prácu v osobnom kontakte s deťmi", "100,- €"]
                ].map(([service, price], i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">{service}</td>
                    <td className="text-right p-3 w-40">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <ZP />
        <Benefits />

      </div>
    </div>
  );
}
