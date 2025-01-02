import { Metadata } from "next";
import Benefits from "../components/Benefits";
import ZP from "../components/ZP";
import { Fragment } from "react";
import { FileText, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "ADOS | Zdravá župa",
  description: "Agentúra domácej ošetrovateľskej starostlivosti poskytuje odbornú ošetrovateľskú a rehabilitačnú starostlivosť pacientom v domácom prostredí. Služby sú plne hradené zdravotnými poisťovňami.",
  keywords: "ADOS, domáca ošetrovateľská starostlivosť, ošetrovanie rán, preväzy, injekcie, infúzie, Zdravá župa",
  openGraph: {
    title: "ADOS | Zdravá župa",
    description: "Agentúra domácej ošetrovateľskej starostlivosti poskytuje odbornú ošetrovateľskú a rehabilitačnú starostlivosť pacientom v domácom prostredí.",
    url: "https://zdravazupa.sk/ados",
    siteName: "Zdravá župa",
    locale: "sk_SK",
    type: "website",
  }
};

export default function ADOS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-primary">Agentúra domácej ošetrovateľskej starostlivosti</h1>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              O SLUŽBE
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Služby ADOS sú určené čiastočne alebo úplne imobilným pacientom, ktorí potrebujú odbornú ošetrovateľskú alebo rehabilitačnú starostlivosť. Väčšina pacientov, ktorí využívajú služby ADOS, je chronicky chorých.
              </p>
              <p className="text-gray-600">
                Domáce ošetrovanie poskytujeme aj pri náhlych, či krátkodobých chorobách, po prepustení z hospitalizácie, po operáciách, prípadne po zákrokoch v rámci jednodňovej chirurgie, ktoré vyžadujú následnú ošetrovateľskú alebo rehabilitačnú starostlivosť.
              </p>
            </div>
          </section>

          <div className="bg-green-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Pevná linka</div>
                  <a href="tel:033/20 23 523" className="font-semibold hover:text-primary transition-colors">033/20 23 523</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Mobil</div>
                  <a href="tel:0908429588" className="font-semibold hover:text-primary transition-colors">0908 429 588</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <a href="mailto:ados@zdravazupa.sk" className="font-semibold hover:text-primary transition-colors">ados@zdravazupa.sk</a>
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
                ["Pondelok", "8:00 – 16:00"],
                ["Utorok", "8:00 – 16:00"],
                ["Streda", "14:00 – 19:00"],
                ["Štvrtok", "8:00 – 16:00"],
                ["Piatok", "7:30 – 16:00"],
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
              <a href="/navrh-na-poskytovanie-osetrovatelskej-starostlivosti.doc" 
                 className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <FileSpreadsheet className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Návrh na poskytovanie ošetrovateľskej starostlivosti (elektronicky)</span>
              </a>

              <a href="/navrh-na-poskytovanie-osetrovatelskej-starostlivosti.docx" 
                 className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <FileSpreadsheet className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Návrh na poskytovanie ošetrovateľskej starostlivosti (tlač)</span>
              </a>
              <p className="text-gray-600 mt-4">
                Pre uľahčenie procesu poskytovania našich služieb sme pre Vás pripravili potrebné dokumenty na stiahnutie. Tieto formuláre sú dostupné vo formátoch vhodných pre elektronické vypĺňanie aj pre tlač. Prosíme o ich dôkladné vyplnenie pred prvou návštevou, čo nám pomôže efektívnejšie nastaviť plán starostlivosti podľa Vašich potrieb.
              </p>
            </div>
          </section>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              PRED PRVOU NÁVŠTEVOU
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Posledné nálezy od lekára (prepúšťaciu nemocničnú správu, ambulantný nález a podobne), poprípade nám ich zašlite e-mailom.</li>
              <li>Indikujúcim lekárom je Váš všeobecný lekár. Akákoľvek starostlivosť sa má vykonávať pod dohľadom lekára, preto by nemalo chýbať odporúčanie od Vášho všeobecného lekára alebo iného odborného lekára, ktorý špecifikuje rozsah činností vykonávaných sestrou v domácom prostredí a odporučí kontroly pacienta.</li>
              <li>Váš obvodný lekár by Vám mal vypísať návrh na poskytovanie ošetrovateľskej starostlivosti.</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              PRIEBEH PRVEJ NÁVŠTEVY
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>naštudujeme si lekárske správy;</li>
              <li>pacient absolvuje vyšetrenie zdravotnou sestrou;</li>
              <li>vypíšeme ošetrovateľskú dokumentáciu vrátane ošetrovateľských cieľov a plánov;</li>
              <li>začneme poskytovať služby.</li>
            </ul>
          </section>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            ZÁKLADNÉ VÝKONY
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Ošetrovanie rán, preležanín a vredov predkolenia</li>
              <li>preväzy rán</li>
              <li>ošetrovanie stómií</li>
              <li>podávanie injekcií a infúzií</li>
              <li>starostlivosť o centrálny venózny katéter alebo venóznu linku</li>
            </ul>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>starostlivosť o epidurálny katéter</li>
              <li>starostlivosť o sondu a výživa pacienta sondou</li>
              <li>starostlivosť o ezotracheálnu, nasotracheálnu a tracheostomickú kanylu</li>
              <li>cievkovanie (len ženy)</li>
              <li>starostlivosť o močový katéter</li>
            </ul>
          </div>
        </section>

        <ZP />
        <Benefits />

        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">CENNÍK ZDRAVOTNÝCH VÝKONOV A SLUŽIEB HRADENÝCH PACIENTOM AGENTÚRY DOMÁCEJ OŠETROVATEĽSKEJ STAROSTLIVOSTI</h2>
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
                  ["Doprava zdravotníckeho materiálu a liečiv z lekárne k pacientovi", "10,- €"],
                  ["Cielená odborná inštruktáž a oboznámenie pacienta s obsluhou pomôcok", "10,- €"],
                  ["Požičanie pomôcok – chodítko, vozík / mesiac", "25,- €"],
                  ["Prenájom kyslíkového koncentrátora / mesiac", "30,- €"],
                  ["Vybavenie žiadosti u praktického lekára / špecialistu, sprievodky, skúmavky, žiadanky", "20,- €"],
                  ["Expresný príplatok za návštevu v byte pacienta v deň objednania", "10,- €"],
                  ["Príplatok za každú návštevu v čase určenom pacientom", "5,- €"],
                  ["Príplatok za infúznu terapiu nad 1 hodinu v domácom prostredí", "10,- €"],
                  ["Ožarovanie rany lampou Bioptron: 1 impulz / 2 minúty", "2,- €"]
                ].map(([service, price], i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3">{service}</td>
                    <td className="text-right p-3">{price}</td>
                  </tr>
                ))}

                <tr className="border-b font-semibold bg-gray-50">
                  <td className="p-3" colSpan={2}>Cenník výkonov mimo odporúčania lekára na vlastnú žiadosť</td>
                </tr>
                {[
                  ["Príjem pacienta (klienta) do ADOS a odobratie sesterskej anamnézy", "10,- €"],
                  ["Poučenie príbuzných alebo členov skupiny, komunity (ako samostatný výkon)", "10,- €"],
                  ["Vypracovanie plánu komplexnej ošetrovateľskej starostlivosti", "10,- €"],
                  ["Priebežné hodnotenie komplexnej ošetrovateľskej starostlivosti a zmena plánu ošetrovateľskej starostlivosti", "10,- €"],
                  ["Vyhodnotenie komplexnej ošetrovateľskej starostlivosti a komplexná správa", "10,- €"],
                  ["Odborný nácvik potrebných výkonov pri ošetrovaní chorého v domácnosti do 30 minút", "20,- €"],
                  ["Ošetrovateľská hygiena", "10,- €"],
                  ["Starostlivosť o chorého s permanentným katétrom vrátane výmeny", "10,- €"],
                  ["Starostlivosť o chorého s kaválnym katétrom alebo s intravenóznou kanylou", "5,- €"],
                  ["Starostlivosť o chorého s ezotracheálnou, nasotracheálnou, tracheostomickou kanylou", "5,- €"],
                  ["Starostlivosť o pacienta s epidurálnym katétrom", "5,- €"],
                  ["Výživa bezvládneho chorého, za jeden výkon do 10 minút", "5,- €"],
                  ["Výživa pacienta sondou, za jeden výkon", "5,- €"],
                  ["Zavedenie alebo výmena nasogastrickej sondy", "10,- €"],
                  ["Očistná klyzma", "25,- €"],
                  ["Kontinuálne sledovanie klinického stavu pacienta (meranie vitálnych funkcií) za hodinu", "10,- €"],
                  ["Odmeranie vitálnych funkcií", "10,- €"],
                  ["Sledovanie diurézy, za každých 12 hodín", "15,- €"],
                  ["Cievkovanie ženy", "10,- €"],
                  ["Výmena stomického setu s následnou toaletou pri stómiách", "10,- €"],
                  ["Čistenie tracheálnej kanyly", "15,- €"],
                  ["Aplikácia neinjekčnej liečby", "5,- €"],
                  ["Bandáž dolných končatín", "5,- €"],
                  ["Aplikácia terapeutického celotelového zábalu alebo liečivého kúpeľa", "25,- €"],
                  ["Aplikácia liečiva do svalu, podkožne na základe ordinácie lekára", "5,- €"],
                  ["Aplikácia liečiva intravenózne na základe ordinácie lekára", "15,- €"],
                  ["Podávanie liečiva infúznou pumpou (za hodinu)", "20,- €"],
                  ["Nácvik podávania inzulínu", "10,- €"],
                  ["Ošetrovateľská starostlivosť zameraná na prevenciu dekubitov", "10,- €"],
                  ["Ošetrenie chorého s dekubitom do 5cm2 (odstránenie zvyškov masti, toaleta, preväz)", "5,- €"],
                  ["Ošetrenie chorého s dekubitom nad 5cm2 (odstránenie zvyškov masti, toaleta, preväz)", "10,- €"],
                  ["Výplach oka", "10,- €"],
                  ["Preväz rany do 5cm2", "5,- €"],
                  ["Preväz rany nad 5cm2", "10,- €"],
                  ["Ošetrovateľská rehabilitácia do 30 minút", "25,- €"],
                  ["Odsávanie pacienta", "10,- €"],
                  ["Vyšetrenie moču indikátorovým médiom", "5,- €"],
                  ["Odber krvi venepunkciou", "15,- €"],
                  ["Odber kapilárnej krvi", "5,- €"],
                  ["Odbery: TT, TN, výter z rekta, odber spúta", "10,- €"],
                  ["Doprava biologického materiálu do laboratória", "5,- €"],
                  ["Návšteva klienta v pracovnom čase (od 8:00 do 15:00)", "10,- €"],
                  ["Návšteva klienta mimo pracovný čas", "20,- €"],
                  ["Konzultácia sestry o jednom klientovi s ošetrujúcim lekárom", "10,- €"],
                  ["Verbálna intervencia pri psychosomatických ťažkostiach u pacienta", "15,- €"],
                  ["Usmernenie spôsobu života pacienta s nádorovým ochorením", "10,- €"],
                  ["Ošetrenie dutiny ústnej u onkologického pacienta, alebo u pacienta s imunodeficitom", "10,- €"],
                  ["Kontrola glykémie glukomerom", "5,- €"],
                  ["Výber stehov z operačnej rany po konzultácii s operatérom", "15,- €"],
                  ["Doprava k pacientovi motorovým vozidlom (cena za km)", "1,- €"],
                  ["EKG vyšetrenie v domácom prostredí bez popisu s vytlačeným záznamom (cena bez dopravy k pacientovi)", "20,- €"],
                  ["INR vyšetrenie z kapilárnej krvi v domácom prostredí (výsledok na počkanie) (cena bez dopravy k pacientovi)", "10,- €"],
                  ["Vyšetrenie sestrou v domácom prostredí (spísanie anamnézy, meranie krvného tlaku, pulzu, telesnej teploty, hodnoty krvného cukru, stanovenie hladiny kyslíka, EKG vyšetrenie bez popisu s vytlačeným grafickým záznamom na odporúčanie lekára, vyšetrenie moču indikačným prúžkom na vylúčenie močovej infekcie, vytlačenie sesterskej správy, v cene je aj odber biologického materiálu po ordinácii lekára, cena bez dopravy k pacientovi)", "50,- €"]
                ].map(([service, price], i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3">{service}</td>
                    <td className="text-right p-3 w-40">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
