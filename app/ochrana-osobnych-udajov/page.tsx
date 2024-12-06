import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | Zdravá župa",
  description: "Informácie o spracúvaní osobných údajov spoločnosťou Zdravá župa, s.r.o. v zmysle GDPR a zákona č. 18/2018 Z. z. o ochrane osobných údajov.",
  keywords: "ochrana osobných údajov, GDPR, spracúvanie osobných údajov, Zdravá župa",
  openGraph: {
    title: "Ochrana osobných údajov | Zdravá župa",
    description: "Informácie o spracúvaní osobných údajov spoločnosťou Zdravá župa, s.r.o.",
    url: "https://zdravazupa.sk/ochrana-osobnych-udajov",
    siteName: "Zdravá župa",
    locale: "sk_SK",
    type: "website",
  }
};


export default function OchranaOsobnychUdajov() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Ochrana osobných údajov</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">OBOZNÁMENIE K SPRACÚVANIU OSOBNÝCH ÚDAJOV SPOLOČNOSŤOU ZDRAVÁ ŽUPA, S.R.O.</h2>
            
            <p className="mb-4">
              Oboznámenie k spracúvaniu osobných údajov spoločnosťou Zdravá župa, s.r.o. v zmysle čl. 13 a čl. 14 nasl. Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov, ktorým sa zrušuje smernica 95/46/ES a v zmysle § 19 a § 20 zákona č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov
            </p>

            <h3 className="text-xl font-semibold mb-2">Prevádzkovateľ:</h3>
            <p className="mb-4">
              Zdravá župa, s.r.o. so sídlom Starohájska 10, 917 01 Trnava, IČO: 53 708 997 (ďalej aj ako „Prevádzkovateľ").
            </p>

            <h3 className="text-xl font-semibold mb-2">Kontaktné údaje Prevádzkovateľa a zodpovednej osoby Prevádzkovateľa</h3>
            <p className="mb-4">
              Vo veciach týkajúcich sa spracúvania a ochrany osobných údajov môžete kontaktovať zodpovednú osobu Prevádzkovateľa e-mailom na e-mailovej adrese prostredníctvom e-mailovej adresy <a href="mailto:zodpovednaosoba@zdravazupa.sk" className="text-primary">zodpovednaosoba@zdravazupa.sk</a>.
            </p>

            <h3 className="text-xl font-semibold mb-2">Všeobecné informácie</h3>
            <div className="space-y-4">
              <p>
                Prevádzkovateľ postupuje pri spracúvaní osobných údajov v súlade s nariadením Európskeho parlamentu a Rady Európskej Únie 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov, ktorým sa zrušuje smernica 95/46/ES (všeobecné nariadenie o ochrane údajov) (ďalej ako „Nariadenie") a so zákonom č. 18/2018 Z. z. o ochrane osobných údajov (ďalej ako „Zákon").
              </p>
              <p>
                Prevádzkovateľ získava osobné údaje priamo od Vás ako dotknutej osoby (ďalej aj ako „Dotknutá osoba") alebo od inej osoby, ktorá nám poskytne Vaše osobné údaje. Môže tak nastať situácia, ak Prevádzkovateľ získa osobné údaje aj od inej osoby, ako priamo od Vás, preto tento dokument poskytuje informácie všetkým Dotknutým osobám ako v zmysle čl. 13 Nariadenia, tak aj v zmysle čl. 14 Nariadenia/§ 19 a § 20 Zákona.
              </p>
              <p>
                Všetky osobné údaje, ktoré o Vás Prevádzkovateľ ako o dotknutej osobe spracováva sú spracovávané iba pre odôvodnené účely, po obmedzenú dobu a s využitím maximálnej možnej miery zabezpečenia, k čomu Prevádzkovateľ zároveň prijíma Internú smernicu o spracovávaní osobných údajov, ako aj bezpečnostné opatrenia uvedené v bezpečnostnej dokumentácii. Vo zverejnenom Zázname o spracovateľských činnostiach nájdete informácie o tom, aké osobné údaje o Vás spracovávame, za akým konkrétnym účelom, na akom právnom základe, komu môžeme Vaše osobné údaje poskytovať a predovšetkým aké máte v súvislosti so spracovaním Vašich osobných údajov práva.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-2 mt-8">Účely spracúvania osobných údajov</h3>
            <p className="mb-4">
              Prevádzkovateľ spracováva Vaše osobné údaje výlučne v súlade so zásadou zákonnosti, a to na účely spracovávania osobných údajov uvedené v Zázname o spracovateľských činnostiach, ak je u Prevádzkovateľa splnená aspoň jedna z nasledujúcich podmienok:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Plnenie zmluvných povinností</strong> – Prevádzkovateľ spracováva osobné údaje pri plnení zmluvy s Dotknutou osobou, v rozsahu potrebnom k plneniu zmluvných povinností.</li>
              <li><strong>Plnenie zákonných povinností</strong> – Prevádzkovateľ spracováva Vaše osobné údaje aj pri plnení zákonných povinností.</li>
              <li><strong>Ochrana životne dôležitých záujmov</strong> – k spracovávaniu Vašich osobných údajov môže prísť aj v prípade, ak Prevádzkovateľ chráni životne dôležité záujmy Dotknutej osoby.</li>
              <li><strong>Oprávnený záujem Prevádzkovateľa</strong> – Prevádzkovateľ spracováva osobné údaje aj na základe oprávneného záujmu.</li>
              <li><strong>Súhlas so spracovaním osobných údajov</strong> – Prevádzkovateľ spracováva osobné údaje aj na základe súhlasu Dotknutej osoby.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Práva Dotknutých osôb</h3>
            <div className="space-y-4">
              <p>Ako Dotknutá osoba môžete prostredníctvom žiadosti realizovať u Prevádzkovateľa Vaše práva, ktorými sú:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Právo na prístup</strong> - právo na poskytnutie kópie osobných údajov</li>
                <li><strong>Právo na nápravu</strong> - právo na opravu nepresných údajov</li>
                <li><strong>Právo na vymazanie</strong> - právo požiadať o vymazanie osobných údajov</li>
                <li><strong>Právo na obmedzenie spracovania</strong></li>
                <li><strong>Právo na prenosnosť údajov</strong></li>
                <li><strong>Právo namietať</strong></li>
                <li><strong>Právo odvolať súhlas</strong></li>
              </ul>
            </div>

            <div className="mt-8 text-sm">
              <p>V Trnave, dňa 15.11.2023</p>
              <p className="mt-4">PhDr. Lucia Šmidovičová, PhD., MPH</p>
              <p>konateľka</p>
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
    </div>
  );
}
