import Benefits from "../components/Benefits";
import ZP from "../components/ZP";
import { Fragment } from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambulancia pre dospelých | Zdravá župa Trnava",
  description: "Nová ambulancia pre dospelých v Trnave. MUDr. Jana Idunková a MUDr. Mariana Čapeľová poskytujú komplexnú zdravotnú starostlivosť v modernom zdravotníckom zariadení.",
  keywords: "všeobecný lekár, ambulancia pre dospelých, Trnava, Zdravá župa, všeobecná ambulancia",
  openGraph: {
    title: "Ambulancia pre dospelých | Zdravá župa Trnava", 
    description: "Nová ambulancia pre dospelých v Trnave. MUDr. Jana Idunková a MUDr. Mariana Čapeľová poskytujú komplexnú zdravotnú starostlivosť v modernom zdravotníckom zariadení.",
    url: "https://zdravazupa.sk/ambulancia-pre-dospelych",
    siteName: "Zdravá župa",
    locale: "sk_SK",
    type: "website",
  }
};

export default function AmbulanciaPreDospelych() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-primary">Ambulancia pre dospelých</h1>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              ONLINE OBJEDNÁVKY
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <a href="https://www.objednatvysetrenie.sk/objednavka-vysetrenia.html?page_id=84263&zid=143417&druh_vysetrenia_id=26a5fa93-548c-432d-abad-e905c8350c9b" 
                 target="_blank"
                 className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                </div>
                <span className="font-medium">Všeobecné vyšetrenie, konzultácie</span>
              </a>
              
              <a href="https://www.objednatvysetrenie.sk/objednavka-vysetrenia.html?page_id=84263&zid=143417&druh_vysetrenia_id=c5ea56ba-e7d9-42f0-9aa3-2534f64ac9c4" 
                 target="_blank"
                 className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="font-medium">Preventívne / predoperačné vyšetrenie</span>
              </a>

              <a href="https://www.objednatvysetrenie.sk/objednavka-ereceptu.html?page_id=133125&zid=143417" 
                 target="_blank"
                 className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <span className="font-medium">eRecept</span>
              </a>

              <a href="https://www.objednatvysetrenie.sk/objednavka-vysetrenia.html?page_id=84263&zid=143417&druh_vysetrenia_id=dff909bd-d241-4b4b-bb7b-8ffad249329b" 
                 target="_blank"
                 className="flex items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <span className="font-medium">Odbery</span>
              </a>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform">
            <div className="space-y-3">
              <p className="text-xl font-medium bg-gradient-to-r from-primary/10 to-transparent p-2 rounded-lg">
                MUDr. Jana Idunková, MUDr. Mariana Čapeľová
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="text-primary">●</span> Poskytovateľ: Zdravá župa, s. r. o.
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="text-primary">●</span> Adresa ambulancie: Študentská 3579/16, 917 08 Trnava
              </p>
              <hr/>
              <p className="text-gray-600 mt-6">
                Ambulancia pre dospelých poskytuje komplexnú zdravotnú starostlivosť pacientom od 18 rokov veku. Zameriavame sa na preventívnu starostlivosť, diagnostiku a liečbu akútnych aj chronických ochorení, s dôrazom na individuálny prístup ku každému pacientovi.
              </p>
              <p className="text-gray-600 mt-4">
                Naša ambulancia je vybavená moderným zdravotníckym zariadením a poskytuje široké spektrum vyšetrení vrátane preventívnych prehliadok, predoperačných vyšetrení, EKG vyšetrení a základných laboratórnych odberov. Kladieme dôraz na prevenciu a včasnú diagnostiku ochorení.
              </p>
            </div>
          </section>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              ORDINAČNÉ HODINY
            </h2>
            <p className="mb-4 text-gray-600 italic">platnosť od: 01.08.2022</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["Pondelok", "7:00 – 19:00"],
                ["Utorok", "7:00 – 19:00"],
                ["Streda", "7:00 – 19:00"],
                ["Štvrtok", "7:00 – 19:00"],
                ["Piatok", "7:00 – 16:00"],
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

          <div className="bg-green-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Pevná linka</div>
                  <a href="tel:033/20 23 523" className="font-semibold hover:text-primary transition-colors">033/20 23 523</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Mobil</div>
                  <a href="tel:0910709355" className="font-semibold hover:text-primary transition-colors">0910 709 355</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <a href="mailto:vseobecnaambulancia@zdravazupa.sk" className="font-semibold hover:text-primary transition-colors">vseobecnaambulancia@zdravazupa.sk</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <a href="mailto:sestra@zdravazupa.sk" className="font-semibold hover:text-primary transition-colors">sestra@zdravazupa.sk</a>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-blue-800">V prípade, že Vám nedvíhame telefón alebo hneď neodpovedáme na email, momentálne sme zaneprázdnení starostlivosťou o pacientov. Prosím, skúste nás kontaktovať neskôr alebo nám zanechajte správu a my sa Vám ozveme hneď, ako to bude možné.</p>
              </div>
            </div>
          </div>

          <section className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">ZDRAVOTNÉ OBVODY</h2>
            <p className="text-gray-600 leading-relaxed">
              Bazová ulica, Bratislavská ulica, Logistická ulica, Malženická cesta, Nám. Sv. Mikuláša, Námestie kráľovnej Konštancie, Prašná ulica, Priečna ulica, Rovná ulica, Spojná ulica, Stará ulica, Šrobárova ulica, Ulica Francisciho, Ulica Hospodárska, Ulica Jaderná, Ulica Jozefa Adamca, Ulica Jozefa Adamoviča, Ulica Ľudová, Ulica Mórica Beňovského, Ulica Radarová, Ulica Sama Chalupku, Ulica Sibírska, Ulica Štefana Fidlíka, Ulica Tehelná, Ulica Tich. Milkina, Včelárska ulica, Viktoríniho námestie, Zelený kríčok, Zimná ulica, Železničná ulica.
            </p>
            <p className="mt-4 font-semibold text-primary">Slobodná voľba lekára zostáva zachovaná.</p>
          </section>
        </div>

        <ZP />
        <Benefits />

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-primary">CENNÍK ZDRAVOTNÝCH VÝKONOV A SLUŽIEB HRADENÝCH PACIENTOM AMBULANCIE VŠEOBECNÉHO LEKÁRA PRE DOSPELÝCH</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-3 bg-gray-50">Úkon</th>
                  <th className="text-right p-3 bg-gray-50">Cena</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Prehliadka a posudok o zdrav. spôsobilosti na vedenie motorového vozidla I. skup.</td>
                  <td className="text-right p-3 w-40">20,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Prehliadka a posudok o zdrav. spôsobilosti na vedenie motorového vozidla II. skup.</td>
                  <td className="text-right p-3">30,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Prehliadka a posudok pre pracovníkov SBS služby</td>
                  <td className="text-right p-3">25,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Prehliadka a posudok pred nástupom na špec. kurz</td>
                  <td className="text-right p-3">25,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Prehliadka a posudok o zdrav. spôsobilosti pre držanie a nosenie zbraní, zbrojného pasu, pilotný, potápačský preukaz, extrémne športy</td>
                  <td className="text-right p-3">50,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vstupná prehliadka, mimoriadna prehliadka v súvislosti s výkonom povolania, pred športovou súťažou, cestou do cudziny</td>
                  <td className="text-right p-3">25,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Posúdenie spôsobilosti na prácu na žiadosť zamestnávateľa alebo pacienta</td>
                  <td className="text-right p-3">25,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vystavenie zdravotného preukazu pre pracovníkov vykonávajúcich epidemiologicky závažné činnosti</td>
                  <td className="text-right p-3">15,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Lekárska správa na žiadosť pacienta, na žiadosť komerčnej poisťovne (podľa počtu strán)</td>
                  <td className="text-right p-3">15,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vystavenie posudku pre potreby súdu, občiansko – právne, trestno – právne, správne konanie, iné administratívne úkony na žiadosť pacienta</td>
                  <td className="text-right p-3">15,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyšetrenie pred aplikáciou očkovacej látky nehradenej zo zdravotného poistenia + aplikácia očkovacej látky nehradená ZP</td>
                  <td className="text-right p-3">10,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Predoperačné vyšetrenie bez zdravotnej indikácie (bez EKG a odberov biologického materiálu)</td>
                  <td className="text-right p-3">30,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Potvrdenie o zdrav. spôsobilosti pre štúdium (SŠ, VŠ, SOU), brigády</td>
                  <td className="text-right p-3">5,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Potvrdenie o zdrav. spôsobilosti pre kurzy a brigády</td>
                  <td className="text-right p-3">10,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vystavenie náhradných hlásení, tlačív PN pri strate, storne PN, vystavovanie tlačív PN a potvrdení o trvaní PN, ak to nehradí sociálna poisťovňa</td>
                  <td className="text-right p-3">5,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyšetrenie nekapitovaného pacienta na vlastnú žiadosť</td>
                  <td className="text-right p-3">30,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyšetrenie pacienta (nie neodkladného stavu) bez poistného vzťahu v SR</td>
                  <td className="text-right p-3">30,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyšetrenie INR (výsledok na počkanie)</td>
                  <td className="text-right p-3">6,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Tlakomerový holter (24 hodín)</td>
                  <td className="text-right p-3">10,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Podanie 1 infúzie (spoluúčasť pacienta za likvidáciu biologického odpadu)</td>
                  <td className="text-right p-3">2,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyhotovenie iných fotokópií - sadzba za 1 stranu formátu A4</td>
                  <td className="text-right p-3">1,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyhotovenie kópie žiadanky (pri strate)</td>
                  <td className="text-right p-3">3,- €</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-12 mb-6 text-primary">Preventívne prehliadky</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">1. Rozšírená preventívna prehliadka k základnej preventívnej prehliadke hradenej zo ZP 1x za 24 mesiacov<br/>- rozšírené odbery biol. mat., INR, + iFOB test + EKG, ktoré nie je hradené zo ZP do 40rokov</td>
                  <td className="text-right p-3">50,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">2. Nadštandardná preventívna prehliadka k základnej preventívnej prehliadke hradenej zo ZP 1x za 24 mesiacov<br/>- rozšírené odbery biol. mat., INR + iFOB test + EKG + ABI, ktoré nie je hradené zo ZP do 40rokov</td>
                  <td className="text-right p-3">70,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">3. Mimoriadna (základná) preventívna prehliadka mimo preventívnej prehliadky hradenej zo ZP 1x za 24 mesiacov zo ZP<br/>- základné odbery + vyšetrenie pacienta, EKG</td>
                  <td className="text-right p-3">65,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">4. Nadštandardná preventívna prehliadka mimo preventívnej prehliadky hradenej 1x za 24 mesiacov zo ZP<br/>- rozšírené odbery biol. mat., INR, + iFOB test + EKG + ABI</td>
                  <td className="text-right p-3">100,- €</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-12 mb-6 text-primary">Cenník zdravotn��ch výkonov nehradených z verejného zdravotného poistenia</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="p-3 text-left bg-gray-50">Úkon</th>
                  <th className="p-3 text-right bg-gray-50">kapitovaní pacienti<br/>(pacienti Zdravá župa, s.r.o.)</th>
                  <th className="p-3 text-right bg-gray-50">nekapitovaní pacienti<br/>(vyšetrenie na vlastnú žiadosť)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">EKG na žiadosť pacienta mimo indikácie</td>
                  <td className="text-right p-3">15,- €</td>
                  <td className="text-right p-3">30,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">EKG popis na žiadosť pacienta mimo indikácie</td>
                  <td className="text-right p-3">5,- €</td>
                  <td className="text-right p-3">10,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">ABI index na žiadosť pacienta mimo indikácie<br/>(dôležitý rizikový marker ischemickej choroby dolných končatín – upchávanie tepien, predpovedá pravdepodobnosť výskytu srdcového infarktu alebo cievnej mozgovej príhody, vhodný pre rizikové skupiny fajčiari, diabetici)<br/>(na vlastnú žiadosť pacienta – výsledok na počkanie)</td>
                  <td className="text-right p-3">20,- €</td>
                  <td className="text-right p-3">30,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Spirometria na žiadosť pacienta mimo indikácie<br/>(na vlastnú žiadosť pacienta, výsledok do 2 pracovných dní)</td>
                  <td className="text-right p-3">30,- €</td>
                  <td className="text-right p-3">40,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyšetrenie CRP (na vlastnú žiadosť pacienta, výsledok na počkanie)</td>
                  <td className="text-right p-3">5,- €</td>
                  <td className="text-right p-3">10,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyšetrenie INR (na vlastnú žiadosť pacienta, výsledok na počkanie)</td>
                  <td className="text-right p-3">5,- €</td>
                  <td className="text-right p-3">10,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vyšetrenie hladiny glykémie (na vlastnú žiadosť pacienta – výsledok na počkanie)</td>
                  <td className="text-right p-3">2,- €</td>
                  <td className="text-right p-3">5,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Podanie 1 infúzie (na vlastnú žiadosť pacienta, alebo indikáciu iného lekára)</td>
                  <td className="text-right p-3">5,- €</td>
                  <td className="text-right p-3">10,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Podanie 5 infúzii (na vlastnú žiadosť pacienta, alebo indikáciu iného lekára)</td>
                  <td className="text-right p-3">20,- €</td>
                  <td className="text-right p-3">45,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Prenájom kyslíkového koncentrátora</td>
                  <td className="text-right p-3">30,- € / mesiac</td>
                  <td className="text-right p-3">40,- € / mesiac</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Tlakomerový holter (24 hodín) - (na vlastnú žiadosť pacienta)</td>
                  <td className="text-right p-3">20,- €</td>
                  <td className="text-right p-3">40,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">FOB test<br/>mimo preventívnej prehliadky na žiadosť pacienta mimo indikácie (výsledok na počkanie)</td>
                  <td className="text-right p-3">10,- €</td>
                  <td className="text-right p-3">15,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Covid Ag test (výsledok na počkanie)</td>
                  <td className="text-right p-3">10,- €</td>
                  <td className="text-right p-3">15,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Covid – určenie hladiny protilátok IgM, IgG<br/>(na vlastnú žiadosť pacienta, výsledok na počkanie)</td>
                  <td className="text-right p-3">10,- €</td>
                  <td className="text-right p-3">20,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Covid Ag test (ZP 24 - kapitovaný)</td>
                  <td className="text-right p-3">5,- €</td>
                  <td className="text-right p-3">-</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Covid Ag test (ZP 24 - nekapitovaný)</td>
                  <td className="text-right p-3">-</td>
                  <td className="text-right p-3">15,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Infúzia vitamínom C 7,5g<br/>(Infúzia s vitamínom C je skvelý spôsob, ako posilniť imunitný systém a doplniť energiu. Vitamín C je známy svojimi antioxidačnými vlastnosťami, čo znamená, že pomáha bojovať proti voľným radikálom a chráni vaše bunky pred poškodením. Zároveň je esenciálnou zložkou pri tvorbe kolagénu a karnitínu, preto je nevyhnutný pre zdravú a pokožku a pleť. Okrem toho, vďaka jeho antioxidačným vlastnostiam, má protirakovinové účinky, preto sa používa aj ako podporná liečba pri onkologických ochoreniach)<br/>Zloženie: 500ml fyziologického roztoku, 7,5g vitamín C<br/>Trvanie: 45-60minút</td>
                  <td className="text-right p-3">25,- €</td>
                  <td className="text-right p-3">30,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Infúzna terapia vitamínom C 7,5g (10x)<br/>10 x infúzna terapia fyziologickým roztokom a vitamínom C 7,5g v rozpise na mesiac: prvé dva týždne infúzia 3 x do týždňa, dva týždne 2 x do týždňa.<br/>(Infúzia s vitamínom C je skvelý spôsob, ako posilniť imunitný systém a doplniť energiu. Vitamín C je známy svojimi antioxidačnými vlastnosťami, čo znamená, že pomáha bojovať proti voľným radikálom a chráni vaše bunky pred poškodením. Zároveň je esenciálnou zložkou pri tvorbe kolagénu a karnitínu, preto je nevyhnutný pre zdravú a pokožku a pleť. Okrem toho, vďaka jeho antioxidačným vlastnostiam, má protirakovinové účinky, preto sa používa aj ako podporná liečba pri onkologických ochoreniach)<br/>Zloženie: 500ml fyziologického roztoku, 7,5g vitamín C<br/>Trvanie: 45-60minút</td>
                  <td className="text-right p-3">240,- €</td>
                  <td className="text-right p-3">280,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Infúzia na regeneráciu pečene<br/>Infúzia je vhodná na podporu a regeneráciu nervového systému, aj ako podpora pri neurologických ochoreniach. Zostavili sme ju tak, aby poskytovala potrebné vitamíny a minerály pre zdravie a správnu funkciu nervov. Obsahuje vysoké dávky vitamínov skupiny B, najmä B12 a B6, ktoré sú kriticky dôležité pre nervovú regeneráciu neurotransmisiu. Vďaka tomu pomáha pri obnove nervových zakončení, pri ochoreniach, ktoré súvisia s vyššou spotrebou vitamínov B-komplexu (napr. ochorenia pečene, alkoholizmus).<br/>Zloženie: 500ml fyziologického roztoku, vitamín B1, B6, B12<br/>Trvanie: 45-60minút</td>
                  <td className="text-right p-3">30,- €</td>
                  <td className="text-right p-3">35,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Infúzia pri bolestiach svalov, kĺbov, chrbtice<br/>Magnézium - jeho nedostatok môže narúšať všetky orgány a telové systémy. Jeho nedostatok má za následok napríklad zvýšené kazenie zubov, svalové kŕče a slabosť, poruchy srdcovej činnosti, psychické poruchy, bolesti hlavy, migrény, depresia a iné... Milgamma N - je liek, ktorý používame pri príznakoch nadmerného preťaženia, v rekonvalescencii (napr. zotavenie sa po chorobe), pri bolestiach svalov, zápale nervov, reumatických ťažkostí a podobne.<br/>Infúzia je vhodná ak: ste pod tlakom a stresom, cítite sa psychicky a fyzicky vyčerpane, máte bolesti svalov, kĺbov, kŕče, zápal nervov, pociťujete bolesti hlavy, podráždenosť, zlosť, nepokoj, úzkosť, máte nervové ochorenia, poruchy spánku, migrény, stres, depresiu alebo žalúdočné problémy, máte reumatické bolesti, vyskočenú platničku, pásový opar, máte pocit tŕpnutia a mravčenia (oblasť úst, tváre, končeky prstov a nôh), mykanie malých svalov (okolo očí, úst), kardiologické príznaky (pocit búšenia srdca, zvieranie hrude) a závraty.<br/>Zloženie: 500ml fyziologického roztoku, milgamma NA, 10% MgSO4<br/>Trvanie: 45-60minút</td>
                  <td className="text-right p-3">30,- €</td>
                  <td className="text-right p-3">35,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Infúzia na detox organizmu a podporu imunity<br/>Skvelá voľba pre tých, ktorí hľadajú účinný spôsob, ako podporiť detoxikáciu tela a zároveň doplniť dôležité živiny pre celkové zdravie a pohodu.<br/>Infúzia poskytuje komplex vitamínov A, D, E, K. V tejto infúzií je špeciálne zvýšená dávka selénu, čo je obzvlášť dôležité pri podpore imunitného systému a eliminácií voľných radikálov, takže táto kombinácia zaručuje maximálnu detoxikáciu a regeneráciu organizmu. Podporuje zrak, srdce, svaly, imunitný systém, zdravie kože a kostí. Táto infúzia obsahuje samostatný selén (selenase), čo zvyšuje cenu infúzie. Selén je nevyhnutný minerál, ktorý zohráva významnú úlohu pri vykonávaní viacerých dôležitých procesov v tele. Telo si ho však nedokáže vyrobiť samo, preto je jeho suplementácia obzvlášť dôležitá pre osoby, ktoré chcú dosiahnuť optimálne zdravie.<br/>Zloženie: 500ml fyziologického roztoku, vitamín D, vitamín K, vitamín A, vitamín E, Selén<br/>Trvanie: 45-60minút</td>
                  <td className="text-right p-3">200,- €</td>
                  <td className="text-right p-3">250,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Oxygenoterapia<br/>Oxygenoterapia priaznivo pôsobí na psychiku, posilňuje imunitný systém pri infekciách a celkovom chronickom oslabení organizmu. Táto terapia je vhodná po náročnej fyzickej či psychickej záťaži.<br/>Trvanie: 60minút</td>
                  <td className="text-right p-3">25,- €</td>
                  <td className="text-right p-3">30,- €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
