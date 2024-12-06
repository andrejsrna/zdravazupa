export default function ADOS() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Agentúra domácej ošetrovateľskej starostlivosti Zdravá župa, s.r.o.</h1>

        <section className="mb-12">
          <p className="text-lg mb-6">
            Služby ADOS sú určené čiastočne alebo úplne imobilným pacientom, ktorí potrebujú odbornú ošetrovateľskú alebo rehabilitačnú starostlivosť. Väčšina pacientov, ktorí využívajú služby ADOS, je chronicky chorých. Domáce ošetrovanie však poskytujú aj pri náhlych, či krátkodobých chorobách, po prepustení z hospitalizácie, po operáciách, prípadne po zákrokoch v rámci jednodňovej chirurgie, ktoré vyžadujú následnú ošetrovateľskú alebo rehabilitačnú starostlivosť.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pred prvou návštevou si prosím pripravte:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Posledné nálezy od lekára (prepúšťaciu nemocničnú správu, ambulantný nález a podobne), poprípade nám ich zašlite e-mailom.</li>
            <li>Indikujúcim lekárom je Váš všeobecný lekár. Akákoľvek starostlivosť sa má vykonávať pod dohľadom lekára, preto by nemalo chýbať odporúčanie od Vášho všeobecného lekára alebo iného odborného lekára, ktorý špecifikuje rozsah činností vykonávaných sestrou v domácom prostredí a odporučí kontroly pacienta.</li>
            <li>Váš obvodný lekár by Vám mal vypísať návrh na poskytovanie ošetrovateľskej starostlivosti.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Priebeh prvej návštevy:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>naštudujeme si lekárske správy;</li>
            <li>pacient absolvuje vyšetrenie zdravotnou sestrou;</li>
            <li>vypíšeme ošetrovateľskú dokumentáciu vrátane ošetrovateľských cieľov a plánov;</li>
            <li>začneme poskytovať služby.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Základné výkony v rámci domáceho ošetrovania sestrami</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ošetrovanie rán, preležanín a vredov predkolenia</li>
            <li>preväzy rán</li>
            <li>ošetrovanie stómií</li>
            <li>podávanie injekcií a infúzií</li>
            <li>starostlivosť o centrálny venózny katéter alebo venóznu linku</li>
            <li>starostlivosť o epidurálny katéter</li>
            <li>starostlivosť o sondu a výživa pacienta sondou</li>
            <li>starostlivosť o ezotracheálnu, nasotracheálnu a tracheostomickú kanylu</li>
            <li>cievkovanie (len ženy)</li>
            <li>starostlivosť o močový katéter</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">ORDINAČNÉ HODINY</h2>
          <p className="mb-4">platnosť od: 01.10.2024</p>
          <div className="grid grid-cols-2 gap-4">
            <div>Pondelok:</div><div>8:00 – 16:00</div>
            <div>Utorok:</div><div>8:00 – 16:00</div>
            <div>Streda:</div><div>14:00 – 19:00</div>
            <div>Štvrtok:</div><div>8:00 – 16:00</div>
            <div>Piatok:</div><div>7:30 – 16:00</div>
            <div>Sobota:</div><div>neordinuje</div>
            <div>Nedeľa:</div><div>neordinuje</div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">KONTAKTUJTE NÁS!</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">ZAVOLAJTE NÁM NA:</p>
              <p>033/20 23 523</p>
              <p>0908 429 588</p>
            </div>
            <div>
              <p className="font-semibold">ALEBO NÁM NAPÍŠTE NA:</p>
              <p>ados@zdravazupa.sk</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">CENNÍK</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Úkon</th>
                  <th className="text-right p-2">Cena</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b font-semibold">
                  <td className="p-2" colSpan={2}>Cenník výkonov mimo úhrady zdravotnej poisťovne</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Doprava zdravotníckeho materiálu z lekárne k pacientovi</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Cielená odborná inštruktáž a oboznámenie pacienta s obsluhou pomôcok</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Požičanie pomôcok – chodítko, vozík</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vybavenie žiadosti u praktického lekára / špecialistu, sprievodky, skúmavky, žiadanky</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Expresný príplatok za návštevu v byte pacienta v deň objednania</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Príplatok za každú návštevu v čase určenom pacientom</td>
                  <td className="text-right p-2">5,- €</td>
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
                  <td className="text-right p-2">10,- €</td>
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
                  <td className="p-2">Aplikácia liečiva do svalu, podkožne</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Aplikácia liečiva intravenózne</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Sledovanie infúzie, za každú začatú hodinu</td>
                  <td className="text-right p-2">5,- €</td>
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
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Odber kapilárnej krvi</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Odbery: TT, TN, výter z rekta, odber spúta</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Doprava biologického materiálu do laboratória</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Návšteva klienta v pracovnom čase (od 8:00 do 16:00)</td>
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
                  <td className="p-2">Poskytnutie predlekárskej pomoci pri náhlych stavoch ohrozujúcich život</td>
                  <td className="text-right p-2">25,- €</td>
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
                  <td className="text-right p-2">10,- €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
