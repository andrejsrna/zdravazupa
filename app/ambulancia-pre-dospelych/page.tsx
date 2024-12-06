import Benefits from "../components/Benefits";
import ZP from "../components/ZP";

export default function AmbulanciaPreDospelych() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center">Ambulancia pre dospelých</h1>
        
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-primary">OTVORILI SME PRE VÁS NOVÚ AMBULANCIU</h2>
          <div className="space-y-3">
            <p className="text-xl font-medium">MUDr. Jana Idunková, MUDr. Mariana Čapeľová</p>
            <p className="text-gray-600">Poskytovateľ: Zdravá župa, s. r. o.</p>
            <p className="text-gray-600">Adresa ambulancie: Študentská 3579/16, 917 08 Trnava</p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">KONTAKT</h2>
            <div className="space-y-3">
              <p className="flex items-center"><span className="w-24">Pevná linka:</span> 033/20 23 523</p>
              <p className="flex items-center"><span className="w-24">Mobil:</span> 0910709355</p>
              <p className="flex items-center"><span className="w-24">E-mail:</span> vseobecnaambulancia@zdravazupa.sk</p>
              <p className="flex items-center"><span className="w-24">E-mail:</span> sestra@zdravazupa.sk</p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">ORDINAČNÉ HODINY</h2>
            <p className="mb-4 text-gray-600">platnosť od: 01.08.2022</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="font-medium">Pondelok:</div><div>7:00 – 19:00</div>
              <div className="font-medium">Utorok:</div><div>7:00 – 19:00</div>
              <div className="font-medium">Streda:</div><div>7:00 – 19:00</div>
              <div className="font-medium">Štvrtok:</div><div>7:00 – 19:00</div>
              <div className="font-medium">Piatok:</div><div>7:00 – 16:00</div>
              <div className="font-medium">Sobota:</div><div>neordinuje</div>
              <div className="font-medium">Nedeľa:</div><div>neordinuje</div>
            </div>
          </section>
        </div>

        <ZP />
        <Benefits />

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">ZDRAVOTNÉ OBVODY</h2>
          <p className="text-gray-600 leading-relaxed">
            Bazová ulica, Bratislavská ulica, Logistická ulica, Malženická cesta, Nám. Sv. Mikuláša, Námestie kráľovnej Konštancie, Prašná ulica, Priečna ulica, Rovná ulica, Spojná ulica, Stará ulica, Šrobárova ulica, Ulica Francisciho, Ulica Hospodárska, Ulica Jaderná, Ulica Jozefa Adamca, Ulica Jozefa Adamoviča, Ulica Ľudová, Ulica Mórica Beňovského, Ulica Radarová, Ulica Sama Chalupku, Ulica Sibírska, Ulica Štefana Fidlíka, Ulica Tehelná, Ulica Tich. Milkina, Včelárska ulica, Viktoríniho námestie, Zelený kríčok, Zimná ulica, Železničná ulica.
          </p>
          <p className="mt-4 font-semibold text-primary">Slobodná voľba lekára zostáva zachovaná.</p>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-primary">CENNÍK</h2>
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
                  <td className="text-right p-3">20,- €</td>
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
                  <td className="p-3">Prehliadka a posudok pred nástupom na špec. Kurz</td>
                  <td className="text-right p-3">25,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Prehliadka a posudok o zdrav. spôsobilosti pre držanie a nosenie zbraní, zbrojného pasu, pilotný, potápačský preukaz, extrémne športy</td>
                  <td className="text-right p-3">50,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Vstupná prehliadka, mimoriadna prehliadka v súvislosti s výkonom povolania, pred športovou súťažou, cestou do cudziny</td>
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
                  <td className="p-3">Potvrdenie o zdrav. spôsobilosti pre štúdium (SŠ, VŠ, SOU)</td>
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
                  <td className="p-3">1. Rozšírená preventívna prehliadka k základnej preventívnej prehliadke hradenej zo ZP 1x za 24 mesiacov -- rozšírené odbery biol. mat.+ iFOB test + EKG, ktoré nie je hradené zo ZP do 40rokov</td>
                  <td className="text-right p-3">50,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">2. Nadštandardná preventívna prehliadka k základnej preventívnej prehliadke hradenej zo ZP 1x za 24 mesiacov -- rozšírené odbery biol. mat.+ iFOB test + EKG + ABI, ktoré nie je hradené zo ZP do 40rokov</td>
                  <td className="text-right p-3">70,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">3. Mimoriadna (základná) preventívna prehliadka mimo preventívnej prehliadky hradenej zo ZP 1x za 24 mesiacov zo ZP -- základné odbery + vyšetrenie pacienta, EKG</td>
                  <td className="text-right p-3">65,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">4. Nadštandardná preventívna prehliadka mimo preventívnej prehliadky hradenej 1x za 24 mesiacov zo ZP -- rozšírené odbery biol. mat.+ iFOB test + EKG + ABI</td>
                  <td className="text-right p-3">100,- €</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold mt-12 mb-6 text-primary">Cenník zdravotných výkonov nehradených z verejného zdravotného poistenia</h3>
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
                  <td className="text-right p-3">20,- €</td>
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
                  <td className="p-3">Vyšetrenie hladiny glykémie (na vlastnú žiadosť pacienta – výsledok na počkanie)</td>
                  <td className="text-right p-3">2,- €</td>
                  <td className="text-right p-3">5,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Podanie 1 infúzie</td>
                  <td className="text-right p-3">5,- €</td>
                  <td className="text-right p-3">10,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Podanie 5 infúzii</td>
                  <td className="text-right p-3">20,- €</td>
                  <td className="text-right p-3">45,- €</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">Prenájom kyslíkového koncentrátora</td>
                  <td className="text-right p-3">70,- € / mesiac<br/>(finančná zábezpeka 200,- €)</td>
                  <td className="text-right p-3">80,- € / mesiac<br/>(finančná zábezpeka 200,- €)</td>
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
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
