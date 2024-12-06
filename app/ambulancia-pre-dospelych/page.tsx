export default function AmbulanciaPreDospelych() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Ambulancia pre dospelých</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">OTVORILI SME PRE VÁS NOVÚ AMBULANCIU</h2>
          <div className="space-y-2">
            <p className="text-xl">MUDr. Jana Idunková, MUDr. Mariana Čapeľová</p>
            <p>Poskytovateľ: Zdravá župa, s. r. o.</p>
            <p>Adresa ambulancie: Študentská 3579/16, 917 08 Trnava</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">KONTAKT</h2>
          <div className="space-y-2">
            <p>pevná linka: 033/20 23 523</p>
            <p>mobil: 0910709355</p>
            <p>e-mail: vseobecnaambulancia@zdravazupa.sk</p>
            <p>e-mail: sestra@zdravazupa.sk</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">ORDINAČNÉ HODINY</h2>
          <p className="mb-4">platnosť od: 01.08.2022</p>
          <div className="grid grid-cols-2 gap-2">
            <div>Pondelok:</div><div>7:00 – 19:00</div>
            <div>Utorok:</div><div>7:00 – 19:00</div>
            <div>Streda:</div><div>7:00 – 19:00</div>
            <div>Štvrtok:</div><div>7:00 – 19:00</div>
            <div>Piatok:</div><div>7:00 – 16:00</div>
            <div>Sobota:</div><div>neordinuje</div>
            <div>Nedeľa:</div><div>neordinuje</div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">V rámci poskytovania zdravotnej starostlivosti Vám ponúkame:</h2>
          <p className="mb-6">preventívne programy s využitím moderného prístrojového vybavenia</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">EKG</h3>
              <p>vyšetrenie dokáže odhaliť závažné srdcové poruchy ešte skôr, než pocítite príznaky. EKG krivka môže prezradiť aj zväčšenie srdca, jeho neprekrvenie, infarkt, známky preťaženia pľúcnych ciev.</p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">ABI</h3>
              <p>meranie ABI prispieva k odhaleniu systémového aterosklerotického postihnutia artérií a tým znižuje riziko fatálnej srdcovej a mozgovocievnej príhody</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">Spirometria</h3>
              <p>základná vyšetrovacia metóda na určenie pľúcnych funkcií. Je určená na diagnostiku pľúcnych ochorení a kontrolu liečby.</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">CRP</h3>
              <p>vyšetrenie slúži na rozlíšenie vírusového a bakteriálneho ochorenia, pomáha tak zabrániť nadmernému užívaniu antibiotík.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 rounded-lg border bg-card">
              <p>Vaše auto si môžete pohodlne zaparkovať na vyhradených miestach</p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card">
              <p>Vstup do našich priestorov je bezbariérový</p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <p>V dohodnutom čase zabezpečíme podanie infúznej terapie po ordinácii Vášho lekára špecialistu</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">ZDRAVOTNÉ OBVODY</h2>
          <p className="text-lg">
            Bazová ulica, Bratislavská ulica, Logistická ulica, Malženická cesta, Nám. Sv. Mikuláša, Námestie kráľovnej Konštancie, Prašná ulica, Priečna ulica, Rovná ulica, Spojná ulica, Stará ulica, Šrobárova ulica, Ulica Francisciho, Ulica Hospodárska, Ulica Jaderná, Ulica Jozefa Adamca, Ulica Jozefa Adamoviča, Ulica Ľudová, Ulica Mórica Beňovského, Ulica Radarová, Ulica Sama Chalupku, Ulica Sibírska, Ulica Štefana Fidlíka, Ulica Tehelná, Ulica Tich. Milkina, Včelárska ulica, Viktoríniho námestie, Zelený kríčok, Zimná ulica, Železničná ulica.
          </p>
          <p className="mt-4 font-semibold">Slobodná voľba lekára zostáva zachovaná.</p>
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
                <tr className="border-b">
                  <td className="p-2">Prehliadka a posudok o zdrav. spôsobilosti na vedenie motorového vozidla I. skup.</td>
                  <td className="text-right p-2">20,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Prehliadka a posudok o zdrav. spôsobilosti na vedenie motorového vozidla II. skup.</td>
                  <td className="text-right p-2">30,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Prehliadka a posudok pre pracovníkov SBS služby</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Prehliadka a posudok pred nástupom na špec. Kurz</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Prehliadka a posudok o zdrav. spôsobilosti pre držanie a nosenie zbraní, zbrojného pasu, pilotný, potápačský preukaz, extrémne športy</td>
                  <td className="text-right p-2">50,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vstupná prehliadka, mimoriadna prehliadka v súvislosti s výkonom povolania, pred športovou súťažou, cestou do cudziny</td>
                  <td className="text-right p-2">50,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vstupná prehliadka, mimoriadna prehliadka v súvislosti s výkonom povolania, pred športovou súťažou, cestou do cudziny</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Posúdenie spôsobilosti na prácu na žiadosť zamestnávateľa alebo pacienta</td>
                  <td className="text-right p-2">25,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Lekárska správa na žiadosť pacienta, na žiadosť komerčnej poisťovne (podľa počtu strán)</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vystavenie posudku pre potreby súdu, občiansko – právne, trestno – právne, správne konanie, iné administratívne úkony na žiadosť pacienta</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vyšetrenie pred aplikáciou očkovacej látky nehradenej zo zdravotného poistenia + aplikácia očkovacej látky nehradená ZP</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Potvrdenie o zdrav. spôsobilosti pre štúdium (SŠ, VŠ, SOU)</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vystavenie náhradných hlásení, tlačív PN pri strate, storne PN, vystavovanie tlačív PN a potvrdení o trvaní PN, ak to nehradí sociálna poisťovňa</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vyšetrenie nekapitovaného pacienta na vlastnú žiadosť</td>
                  <td className="text-right p-2">30,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vyšetrenie pacienta (nie neodkladného stavu) bez poistného vzťahu v SR</td>
                  <td className="text-right p-2">30,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">1. Rozšírená preventívna prehliadka k základnej preventívnej prehliadke hradenej zo ZP 1x za 24 mesiacov -- rozšírené odbery biol. mat.+ iFOB test + EKG, ktoré nie je hradené zo ZP do 40rokov</td>
                  <td className="text-right p-2">50,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">2. Nadštandardná preventívna prehliadka k základnej preventívnej prehliadke hradenej zo ZP 1x za 24 mesiacov -- rozšírené odbery biol. mat.+ iFOB test + EKG + ABI, ktoré nie je hradené zo ZP do 40rokov</td>
                  <td className="text-right p-2">70,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">3. Mimoriadna (základná) preventívna prehliadka mimo preventívnej prehliadky hradenej zo ZP 1x za 24 mesiacov zo ZP -- základné odbery + vyšetrenie pacienta, EKG</td>
                  <td className="text-right p-2">65,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">4. Nadštandardná preventívna prehliadka mimo preventívnej prehliadky hradenej 1x za 24 mesiacov zo ZP -- rozšírené odbery biol. mat.+ iFOB test + EKG + ABI</td>
                  <td className="text-right p-2">100,- €</td>
                </tr>
              </tbody>
            </table>
          <h3 className="text-xl font-semibold mt-8 mb-4">Cenník zdravotných výkonov nehradených z verejného zdravotného poistenia</h3>
            <table className="w-full border">
              <thead>
                <tr className="bg-muted">
                  <th className="p-2 text-left">Úkon</th>
                  <th className="p-2 text-right">kapitovaní pacienti<br/>(pacienti Zdravá župa, s.r.o.)</th>
                  <th className="p-2 text-right">nekapitovaní pacienti<br/>(vyšetrenie na vlastnú žiadosť)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">EKG na žiadosť pacienta mimo indikácie</td>
                  <td className="text-right p-2">15,- €</td>
                  <td className="text-right p-2">20,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">ABI index na žiadosť pacienta mimo indikácie<br/>(dôležitý rizikový marker ischemickej choroby dolných končatín – upchávanie tepien, predpovedá pravdepodobnosť výskytu srdcového infarktu alebo cievnej mozgovej príhody, vhodný pre rizikové skupiny fajčiari, diabetici)<br/>(na vlastnú žiadosť pacienta – výsledok na počkanie)</td>
                  <td className="text-right p-2">20,- €</td>
                  <td className="text-right p-2">30,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Spirometria na žiadosť pacienta mimo indikácie<br/>(na vlastnú žiadosť pacienta, výsledok do 2 pracovných dní)</td>
                  <td className="text-right p-2">30,- €</td>
                  <td className="text-right p-2">40,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vyšetrenie CRP (na vlastnú žiadosť pacienta, výsledok na počkanie)</td>
                  <td className="text-right p-2">5,- €</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Vyšetrenie hladiny glykémie (na vlastnú žiadosť pacienta – výsledok na počkanie)</td>
                  <td className="text-right p-2">2,- €</td>
                  <td className="text-right p-2">5,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Podanie 1 infúzie</td>
                  <td className="text-right p-2">5,- €</td>
                  <td className="text-right p-2">10,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Podanie 5 infúzii</td>
                  <td className="text-right p-2">20,- €</td>
                  <td className="text-right p-2">45,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Prenájom kyslíkového koncentrátora</td>
                  <td className="text-right p-2">70,- € / mesiac<br/>(finančná zábezpeka 200,- €)</td>
                  <td className="text-right p-2">80,- € / mesiac<br/>(finančná zábezpeka 200,- €)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Tlakomerový holter (24 hodín) - (na vlastnú žiadosť pacienta)</td>
                  <td className="text-right p-2">20,- €</td>
                  <td className="text-right p-2">40,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">FOB test<br/>mimo preventívnej prehliadky na žiadosť pacienta mimo indikácie (výsledok na počkanie)</td>
                  <td className="text-right p-2">10,- €</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Covid Ag test (výsledok na počkanie)</td>
                  <td className="text-right p-2">10,- €</td>
                  <td className="text-right p-2">15,- €</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Covid – určenie hladiny protilátok IgM, IgG<br/>(na vlastnú žiadosť pacienta, výsledok na počkanie)</td>
                  <td className="text-right p-2">10,- €</td>
                  <td className="text-right p-2">20,- €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground">
          <p>Zriaďovateľ: Trnavský samosprávny kraj</p>
          <p>Kontakt: Zdravá župa, s. r. o., Starohájska 10 917 01 Trnava</p>
          <p>IČO: 53708997, DIČ: 2121488468</p>
          <p>Okresný súd Trnava, oddiel: Sro, vložka č. 48993/T</p>
        </footer>
      </div>
    </div>
  );
}
