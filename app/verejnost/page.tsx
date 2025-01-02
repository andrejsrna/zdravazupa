export const metadata = {
  title: 'Pre verejnosť | Zdravá župa',
  description: 'Informácie o spoločnosti Zdravá župa s.r.o., poskytovateľovi zdravotnej starostlivosti v Trnavskom samosprávnom kraji. Ponúkame všeobecnú a špecializovanú ambulantnú starostlivosť, domácu ošetrovateľskú starostlivosť a hospicovú starostlivosť.',
  keywords: 'zdravotná starostlivosť, Trnava, TTSK, ambulancia, kardiológia, neurológia, domáca starostlivosť, hospic, pohotovosť'
}

export default function Verejnost() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">O nás</h1>

        <div className="grid gap-8 max-w-6xl mx-auto">
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                O spoločnosti
              </h2>
              <p className="text-muted-foreground">
                Spoločnosť Zdravá župa, s.r.o. bola pôvodne založená Trnavským samosprávnym krajom v roku 2021 za účelom boja proti koronavírusu v Trnavskom samosprávnom kraji (ďalej len „TTSK").
              </p>
              <p className="text-muted-foreground">
                V nadväznosti na potrebu zabezpečiť poskytovanie zdravotnej starostlivosti v nedostatkových špecializáciách sa naša spoločnosť v súčasnosti zameriava aj na poskytovanie kvalitnej a dobre dostupnej zdravotnej starostlivosti pre obyvateľov TTSK.
              </p>
              <p className="text-muted-foreground">
                V roku 2022 sme sa stali poskytovateľom zdravotnej starostlivosti v novom zdravotníckom stredisku, ktoré sa nachádza v zrekonštruovanom objekte na Študentskej ulici 3579/16 v Trnave, ako aj poskytovateľom pevnej ambulantnej pohotovostnej služby pre deti a dorast v priestoroch na Starohájskej ulici 436/1 v Trnave (na základe poverenia MZ SR).
              </p>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Naše ambulantné zdravotnícke zariadenia
            </h2>
            <ul className="list-none space-y-3">
              {[
                'vo všeobecnej ambulancii všeobecného lekára pre dospelých',
                'v stacionári pri všeobecnej ambulancii pre dospelých',
                'v špecializovanej kardiologickej ambulancii, s odborným zameraním kardiológia',
                'v špecializovanej neurologickej ambulancii s odborným zameraním neurológia',
                'v agentúre domácej ošetrovateľskej starostlivosti s odborným zameraním domáca ošetrovateľská starostlivosť',
                'v mobilnom hospici s odborným zameraním domáca hospicová starostlivosť',
                'v pevnej ambulantnej pohotovostnej službe pre deti a dorast'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Naše služby
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Naše zdravotnícke stredisko ponúka pacientom možnosť objednávať sa na vyšetrenie prostredníctvom elektronického systému, čím zaručuje efektívnu a pohodlnú organizáciu návštev lekárov.
              </p>
              <p className="text-muted-foreground">
                Svoj zdravotný stav, či preventívne prehliadky môžu u nás pacienti riešiť v rámci našich rozšírených ordinačných hodín.
              </p>
              <p className="text-muted-foreground">
                V spolupráci s Fakultnou nemocnicou Trnava sa snažíme zlepšovať kvalitu života pacientov a ich príbuzných prostredníctvom komplexnej paliatívnej starostlivosti a domácej ošetrovateľskej starostlivosti.
              </p>
              <p className="text-muted-foreground">
                V budúcnosti plánujeme rozšíriť našu ponuku o ďalšie zdravotnícke zariadenia v rôznych častiach kraja.
                Veríme, že odborným poskytovaním zdravotnej starostlivosti sa nám podarí prispieť k zlepšeniu kvality života obyvateľov Trnavského samosprávneho kraja.
              </p>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Na stiahnutie
            </h2>
            <div className="grid gap-4">
              <a href="/cv-konatelka.pdf" 
                 className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <span className="font-medium">CV konateľka Zdravej župy</span>
              </a>
              
              <a href="/infoocinnost.pdf" 
                 className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span className="font-medium">Informácia o činnosti Zdravá župa s.r.o. 09-2021 až 02-2022</span>
              </a>

              <a href="/infoocinnostolder.pdf" 
                 className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span className="font-medium">Informácia o činnosti Zdravá župa s.r.o. 03-2022 až 12-2022</span>
              </a>

              <a href="/zodpovedny-obstaravatel" 
                 className="flex items-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <span className="font-medium">Ocenenie Zodpovedný verejný obstarávateľ za rok 2022</span>
              </a>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Povinné zverejňovanie
            </h2>
            <p className="mb-6 text-muted-foreground">
              V rámci transparentosti spoločnosti Zdravá župa s.r.o. si môžete pozrieť na nasledujúcich linkoch dôležité údaje.
            </p>
            <div className="grid gap-4">
             

              <a href="https://crz.trnava-vuc.sk/1047065-sk/zdrava-zupa-sro/" 
                 className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span className="font-medium">Zverejňovanie objednávok a faktúr</span>
              </a>

              <a href="https://crz.gov.sk/2171273-sk/centralny-register-zmluv/?art_zs2=&art_predmet=&art_ico=&art_suma_spolu_od=&art_suma_spolu_do=&art_datum_zverejnene_od=&art_datum_zverejnene_do=&art_rezort=0&art_zs1=zdrav%C3%A1+%C5%BEupa&nazov=&art_ico1=&ID=2171273&odoslat=Vyh%C4%BEada%C5%A5&frm_id_frm_filter_3=624d469ee7dca" 
                 className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span className="font-medium">Zverejňovanie zmlúv od 31.3.2022</span>
              </a>

              <a href="https://crz.trnava-vuc.sk/1047065-sk/zdrava-zupa-sro/zmluvy/" 
                 className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="bg-primary rounded-full p-2 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span className="font-medium">Zverejňovanie zmlúv do 31.3.2022</span>
              </a>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Verejné obstarávanie
            </h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Spoločnosť Zdravá župa, s.r.o. je verejný obstarávateľ podľa § 7 ods. 1 písm. d) zákona č. 343/2015 Z. z. o verejnom obstarávaní a o zmene a doplnení niektorých zákonov v znení neskorších predpisov; zadávania zákaziek na dodanie tovarov, poskytnutie služieb a uskutočnenie stavebných prác, koncesií a súťaže návrhov sa realizuje v súlade s postupmi a pravidlami tohto zákona.
                </p>
                <p className="text-muted-foreground">
                  Na zadávanie zákaziek, evidenciu týchto zákaziek, ako aj na zabezpečenie s tým súvisiacich činností využíva informačný systém verejnej správy ELEKTRONICKÁ PLATFORMA. Elektronická platforma – Informačný systém verejnej správy (isepvo.sk)
                </p>
              </div>
              <div className="grid gap-4">
                <a href="https://www.uvo.gov.sk/vyhladavanie/vyhladavanie-profilov/detail/21317?cHash=0fa3541b1116ba14b7b645b1f056aa0e" 
                   className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Profil verejného obstarávateľa: Vyhľadávanie profilov - ÚVO (gov.sk)</span>
                </a>

                <a href="https://portal.eks.sk/SpravaObjednavatelov/VerejnyProfilObjednavatela/Detail/9055" 
                   className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Elektronický kontraktačný systém (elektronické trhovisko)</span>
                </a>

                <a href="/planvo.pdf" 
                   className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Plán verejného obstarávania na rok 2024</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
