export const metadata = {
  title: 'Pre verejnosť | Zdravá župa',
  description: 'Informácie o spoločnosti Zdravá župa s.r.o., poskytovateľovi zdravotnej starostlivosti v Trnavskom samosprávnom kraji. Ponúkame všeobecnú a špecializovanú ambulantnú starostlivosť, domácu ošetrovateľskú starostlivosť a hospicovú starostlivosť.',
  keywords: 'zdravotná starostlivosť, Trnava, TTSK, ambulancia, kardiológia, neurológia, domáca starostlivosť, hospic, pohotovosť'
}




export default function Verejnost() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">O nás</h1>

        <div className="space-y-8">
          <section>
            <div className="space-y-4">
              <p>
                Spoločnosť Zdravá župa, s.r.o. bola pôvodne založená Trnavským samosprávnym krajom v roku 2021 za účelom boja proti koronavírusu v Trnavskom samosprávnom kraji (ďalej len „TTSK").
              </p>
              <p>
                V nadväznosti na potrebu zabezpečiť poskytovanie zdravotnej starostlivosti v nedostatkových špecializáciách sa naša spoločnosť v súčasnosti zameriava aj na poskytovanie kvalitnej a dobre dostupnej zdravotnej starostlivosti pre obyvateľov TTSK.
              </p>
              <p>
                V roku 2022 sme sa stali poskytovateľom zdravotnej starostlivosti v novom zdravotníckom stredisku, ktoré sa nachádza v zrekonštruovanom objekte na Študentskej ulici 3579/16 v Trnave, ako aj poskytovateľom pevnej ambulantnej pohotovostnej služby pre deti a dorast v priestoroch na Starohájskej ulici 436/1 v Trnave (na základe poverenia MZ SR).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Zdravotnú starostlivosť poskytujeme vo svojich ambulantných zdravotníckych zariadeniach:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>vo všeobecnej ambulancii všeobecného lekára pre dospelých,</li>
              <li>v stacionári pri všeobecnej ambulancii pre dospelých,</li>
              <li>v špecializovanej kardiologickej ambulancii, s odborným zameraním kardiológia,</li>
              <li>v špecializovanej neurologickej ambulancii s odborným zameraním neurológia,</li>
              <li>v agentúre domácej ošetrovateľskej starostlivosti s odborným zameraním domáca ošetrovateľská starostlivosť,</li>
              <li>v mobilnom hospici s odborným zameraním domáca hospicová starostlivosť,</li>
              <li>v pevnej ambulantnej pohotovostnej službe pre deti a dorast.</li>
            </ul>
          </section>

          <section>
            <div className="space-y-4">
              <p>
                Naše zdravotnícke stredisko ponúka pacientom možnosť objednávať sa na vyšetrenie prostredníctvom elektronického systému, čím zaručuje efektívnu a pohodlnú organizáciu návštev lekárov.
              </p>
              <p>
                Svoj zdravotný stav, či preventívne prehliadky môžu u nás pacienti riešiť v rámci našich rozšírených ordinačných hodín.
              </p>
              <p>
                V spolupráci s Fakultnou nemocnicou Trnava sa snažíme zlepšovať kvalitu života pacientov a ich príbuzných prostredníctvom komplexnej paliatívnej starostlivosti a domácej ošetrovateľskej starostlivosti.
              </p>
              <p>
                V budúcnosti plánujeme rozšíriť našu ponuku o ďalšie zdravotnícke zariadenia v rôznych častiach kraja.
                Veríme, že odborným poskytovaním zdravotnej starostlivosti sa nám podarí prispieť k zlepšeniu kvality života obyvateľov Trnavského samosprávneho kraja.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Na stiahnutie</h2>
            <div className="space-y-2">
              <a href="/cv-konatelka.pdf" className="text-primary underline block">CV konateľka Zdravej župy</a>
              <a href="/infoocinnost.pdf" className="text-primary underline block">Informácia o činnosti Zdravá župa s.r.o. 09-2021 až 02-2022</a>
              <a href="/infoocinnostolder.pdf" className="text-primary underline block">Informácia o činnosti Zdravá župa s.r.o. 03-2022 až 12-2022</a>
              <a href="/zodpovedny-obstaravatel" className="text-primary underline block">Ocenenie Zodpovedný verejný obstarávateľ za rok 2022</a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Povinné zverejňovanie</h2>
            <p className="mb-4">
              V rámci transparentosti spoločnosti Zdravá župa s.r.o. si môžete pozrieť na nasledujúcich linkoch dôležité údaje.
            </p>
            <div className="space-y-2">
              <a href="https://crz.trnava-vuc.sk/1047065-sk/zdrava-zupa-sro/" className="text-primary underline block">Zverejňovanie zmlúv, objednávok a faktúr do 31.3.2022</a>
              <a href="https://crz.trnava-vuc.sk/1047065-sk/zdrava-zupa-sro/" className="text-primary underline block">Zverejňovanie objednávok a faktúr</a>
              <a href="https://crz.gov.sk/2171273-sk/centralny-register-zmluv/?art_zs2=&art_predmet=&art_ico=&art_suma_spolu_od=&art_suma_spolu_do=&art_datum_zverejnene_od=&art_datum_zverejnene_do=&art_rezort=0&art_zs1=zdrav%C3%A1+%C5%BEupa&nazov=&art_ico1=&ID=2171273&odoslat=Vyh%C4%BEada%C5%A5&frm_id_frm_filter_3=624d469ee7dca" className="text-primary underline block">Zverejňovanie zmlúv</a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Verejné obstarávanie</h2>
            <div className="space-y-4">
              <p>
                Spoločnosť Zdravá župa, s.r.o. je verejný obstarávateľ podľa § 7 ods. 1 písm. d) zákona č. 343/2015 Z. z. o verejnom obstarávaní a o zmene a doplnení niektorých zákonov v znení neskorších predpisov; zadávania zákaziek na dodanie tovarov, poskytnutie služieb a uskutočnenie stavebných prác, koncesií a súťaže návrhov sa realizuje v súlade s postupmi a pravidlami tohto zákona.
              </p>
              <p>
                Na zadávanie zákaziek, evidenciu týchto zákaziek, ako aj na zabezpečenie s tým súvisiacich činností využíva informačný systém verejnej správy ELEKTRONICKÁ PLATFORMA. Elektronická platforma – Informačný systém verejnej správy (isepvo.sk)
              </p>
              <div className="space-y-2">
                <a href="https://www.uvo.gov.sk/vyhladavanie/vyhladavanie-profilov/detail/21317?cHash=0fa3541b1116ba14b7b645b1f056aa0e" className="text-primary underline   block">Profil verejného obstarávateľa: Vyhľadávanie profilov - ÚVO (gov.sk)</a>
                <a href="https://portal.eks.sk/SpravaObjednavatelov/VerejnyProfilObjednavatela/Detail/9055" className="text-primary underline block">Elektronický kontraktačný systém (elektronické trhovisko): Detail objednávateľa - Elektronický kontraktačný systém (eks.sk)</a>
                <a href="/planvo.pdf" className="text-primary underline block">Plán verejného obstarávania na rok 2024</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
