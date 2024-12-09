import { Button } from "@/components/ui/button";
import { Metadata } from "next";

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
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Agentúra domácej ošetrovateľskej starostlivosti Zdravá župa, s.r.o.</h1>

          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <p className="text-lg mb-6">
                Služby ADOS sú určené čiastočne alebo úplne imobilným pacientom, ktorí potrebujú odbornú ošetrovateľskú alebo rehabilitačnú starostlivosť. Väčšina pacientov, ktorí využívajú služby ADOS, je chronicky chorých. Domáce ošetrovanie však poskytujú aj pri náhlych, či krátkodobých chorobách, po prepustení z hospitalizácie, po operáciách, prípadne po zákrokoch v rámci jednodňovej chirurgie, ktoré vyžadujú následnú ošetrovateľskú alebo rehabilitačnú starostlivosť.
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Pred prvou návštevou si prosím pripravte:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posledné nálezy od lekára (prepúšťaciu nemocničnú správu, ambulantný nález a podobne), poprípade nám ich zašlite e-mailom.</li>
                <li>Indikujúcim lekárom je Váš všeobecný lekár. Akákoľvek starostlivosť sa má vykonávať pod dohľadom lekára, preto by nemalo chýbať odporúčanie od Vášho všeobecného lekára alebo iného odborného lekára, ktorý špecifikuje rozsah činností vykonávaných sestrou v domácom prostredí a odporučí kontroly pacienta.</li>
                <li>Váš obvodný lekár by Vám mal vypísať návrh na poskytovanie ošetrovateľskej starostlivosti.</li>
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Priebeh prvej návštevy:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>naštudujeme si lekárske správy;</li>
                <li>pacient absolvuje vyšetrenie zdravotnou sestrou;</li>
                <li>vypíšeme ošetrovateľskú dokumentáciu vrátane ošetrovateľských cieľov a plánov;</li>
                <li>začneme poskytovať služby.</li>
              </ul>
            </section>
          </div>

          <section className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Základné výkony v rámci domáceho ošetrovania sestrami</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Ošetrovanie rán, preležanín a vredov predkolenia</li>
                <li>preväzy rán</li>
                <li>ošetrovanie stómií</li>
                <li>podávanie injekcií a infúzií</li>
                <li>starostlivosť o centrálny venózny katéter alebo venóznu linku</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2">
                <li>starostlivosť o epidurálny katéter</li>
                <li>starostlivosť o sondu a výživa pacienta sondou</li>
                <li>starostlivosť o ezotracheálnu, nasotracheálnu a tracheostomickú kanylu</li>
                <li>cievkovanie (len ženy)</li>
                <li>starostlivosť o močový katéter</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">ORDINAČNÉ HODINY</h2>
            <p className="mb-4 text-gray-600">platnosť od: 01.10.2024</p>
            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="font-medium">Pondelok:</div><div>8:00 – 16:00</div>
              <div className="font-medium">Utorok:</div><div>8:00 – 16:00</div>
              <div className="font-medium">Streda:</div><div>14:00 – 19:00</div>
              <div className="font-medium">Štvrtok:</div><div>8:00 – 16:00</div>
              <div className="font-medium">Piatok:</div><div>7:30 – 16:00</div>
              <div className="font-medium">Sobota:</div><div>neordinuje</div>
              <div className="font-medium">Nedeľa:</div><div>neordinuje</div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">KONTAKTUJTE NÁS!</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">ZAVOLAJTE NÁM NA:</p>
                <p className="text-xl">033/20 23 523</p>
                <p className="text-xl">0908 429 588</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">ALEBO NÁM NAPÍŠTE NA:</p>
                <p className="text-xl">ados@zdravazupa.sk</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Dokumenty na stiahnutie</h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start text-left whitespace-normal py-4" asChild>
                <a href="/navrh-na-poskytovanie-osetrovatelskej-starostlivosti.doc">
                  Návrh na poskytovanie ošetrovateľskej starostlivosti (elektronicky) 
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left whitespace-normal py-4" asChild>
                <a href="/navrh-na-poskytovanie-osetrovatelskej-starostlivosti.docx">
                  Návrh na poskytovanie ošetrovateľskej starostlivosti (tlač)
                </a>
              </Button>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">CENNÍK ZDRAVOTNÝCH VÝKONOV A SLUŽIEB HRADENÝCH PACIENTOM AGENTÚRY DOMÁCEJ OŠETROVATEĽSKEJ STAROSTLIVOSTI</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-2 border-b">Úkon</th>
                    <th className="text-right p-2 border-b">Cena</th>
                  </tr>
                </thead>
                <tbody>
                <tr className="border-b font-semibold">
                  <td className="p-2" colSpan={2}>Cenník výkonov mimo úhrady zdravotnej poisťovne</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Doprava zdravotníckeho materiálu a liečiv z lekárne k pacientovi</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Cielená odborná inštruktáž a oboznámenie pacienta s obsluhou pomôcok</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Požičanie pomôcok – chodítko, vozík / mesiac</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Prenájom kyslíkového koncentrátora / mesiac</td>
                  <td className="text-right p-2">30,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vybavenie žiadosti u praktického lekára / špecialistu, sprievodky, skúmavky, žiadanky</td>
                  <td className="text-right p-2">20,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Expresný príplatok za návštevu v byte pacienta v deň objednania</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Príplatok za každú návštevu v čase určenom pacientom</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Príplatok za infúznu terapiu nad 1 hodinu v domácom prostredí</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Ožarovanie rany lampou Bioptron: 1 impulz / 2 minúty</td>
                  <td className="text-right p-2">2,- €</td>
                </tr>
                <tr className="border-b font-semibold">
                  <td className="p-2" colSpan={2}>Cenník výkonov mimo odporúčania lekára na vlastnú žiadosť</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Príjem pacienta (klienta) do ADOS a odobratie sesterskej anamnézy</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Poučenie príbuzných alebo členov skupiny, komunity (ako samostatný výkon)</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vypracovanie plánu komplexnej ošetrovateľskej starostlivosti</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Priebežné hodnotenie komplexnej ošetrovateľskej starostlivosti a zmena plánu ošetrovateľskej starostlivosti</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vyhodnotenie komplexnej ošetrovateľskej starostlivosti a komplexná správa</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Odborný nácvik potrebných výkonov pri ošetrovaní chorého v domácnosti do 30 minút</td>
                  <td className="text-right p-2">20,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Ošetrovateľská hygiena</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Starostlivosť o chorého s permanentným katétrom vrátane výmeny</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Starostlivosť o chorého s kaválnym katétrom alebo s intravenóznou kanylou</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Starostlivosť o chorého s ezotracheálnou, nasotracheálnou, tracheostomickou kanylou</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Starostlivosť o pacienta s epidurálnym katétrom</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Výživa bezvládneho chorého, za jeden výkon do 10 minút</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Výživa pacienta sondou, za jeden výkon</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Zavedenie alebo výmena nasogastrickej sondy</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Očistná klyzma</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Kontinuálne sledovanie klinického stavu pacienta (meranie vitálnych funkcií) za hodinu</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Odmeranie vitálnych funkcií</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Sledovanie diurézy, za každých 12 hodín</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Cievkovanie ženy</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Výmena stomického setu s následnou toaletou pri stómiách</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Čistenie tracheálnej kanyly</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Aplikácia neinjekčnej liečby</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Bandáž dolných končatín</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Aplikácia terapeutického celotelového zábalu alebo liečivého kúpeľa</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Aplikácia liečiva do svalu, podkožne na základe ordinácie lekára</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Aplikácia liečiva intravenózne na základe ordinácie lekára</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Podávanie liečiva infúznou pumpou (za hodinu)</td>
                  <td className="text-right p-2">20,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Nácvik podávania inzulínu</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Ošetrovateľská starostlivosť zameraná na prevenciu dekubitov</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Ošetrenie chorého s dekubitom do 5cm2 (odstránenie zvyškov masti, toaleta, preväz)</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Ošetrenie chorého s dekubitom nad 5cm2 (odstránenie zvyškov masti, toaleta, preväz)</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Výplach oka</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Preväz rany do 5cm2</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Preväz rany nad 5cm2</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Ošetrovateľská rehabilitácia do 30 minút</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Odsávanie pacienta</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vyšetrenie moču indikátorovým médiom</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Odber krvi venepunkciou</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Odber kapilárnej krvi</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Odbery: TT, TN, výter z rekta, odber spúta</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Doprava biologického materiálu do laboratória</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Návšteva klienta v pracovnom čase (od 8:00 do 15:00)</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Návšteva klienta mimo pracovný čas</td>
                  <td className="text-right p-2">20,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Konzultácia sestry o jednom klientovi s ošetrujúcim lekárom</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Verbálna intervencia pri psychosomatických ťažkostiach u pacienta</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Usmernenie spôsobu života pacienta s nádorovým ochorením</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Ošetrenie dutiny ústnej u onkologického pacienta, alebo u pacienta s imunodeficitom</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Kontrola glykémie glukomerom</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Výber stehov z operačnej rany po konzultácii s operatérom</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Doprava k pacientovi motorovým vozidlom (cena za km)</td>
                  <td className="text-right p-2">1,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">EKG vyšetrenie v domácom prostredí bez popisu s vytlačeným záznamom (cena bez dopravy k pacientovi)</td>
                  <td className="text-right p-2">20,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">INR vyšetrenie z kapilárnej krvi v domácom prostredí (výsledok na počkanie) (cena bez dopravy k pacientovi)</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vyšetrenie sestrou v domácom prostredí (spísanie anamnézy, meranie krvného tlaku, pulzu, telesnej teploty, hodnoty krvného cukru, stanovenie hladiny kyslíka, EKG vyšetrenie bez popisu s vytlačeným grafickým záznamom na odporúčanie lekára, vyšetrenie moču indikačným prúžkom na vylúčenie močovej infekcie, vytlačenie sesterskej správy, v cene je aj odber biologického materiálu po ordinácii lekára, cena bez dopravy k pacientovi)</td>
                  <td className="text-right p-2">50,- €</td>
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
