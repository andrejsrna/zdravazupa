import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekty | Zdravá župa",
  description: "Prehľad projektov realizovaných v rámci zdravotníckeho zariadenia Zdravá župa v Trnave, vrátane Psycho-sociálneho centra, ADOS a Mobilného hospicu.",
  openGraph: {
    title: "Projekty | Zdravá župa",
    description: "Prehľad projektov realizovaných v rámci zdravotníckeho zariadenia Zdravá župa v Trnave, vrátane Psycho-sociálneho centra, ADOS a Mobilného hospicu.",
    images: [
      {
        url: "/images/og-projekty.jpg",
        width: 1200,
        height: 630,
        alt: "Projekty Zdravej župy",
      },
    ],
  },
};

export default function Projekty() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Projekty</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Psycho-sociálne centrum v Trnave</h2>
            <p className="mb-4">
              Vybudovaním psycho-sociálnych centier sa vytvorí moderná 12I03-21-V16-00012 a dostupná starostlivosť o duševné zdravie, ktorá stavia na silnej medzirezortnej spolupráci. Špecificky je potrebné zmodernizovať systém psychiatrickej a psychologickej zdravotno-sociálnej starostlivosti, posilniť podporu duševného zdravia a prevenciu vzniku porúch, posilniť zdravotno-sociálnu starostlivosť a zvýšiť jej dostupnosť.
            </p>
            <div className="space-y-2">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://www.health.gov.sk/Clanok?plan-obnovy">
                  ZOBRAZIŤ VIAC
                </Link>
              </Button>
              <Link href="https://www.health.gov.sk/Clanok?plan-obnovy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Health.gov.sk - Plán obnovy a odolnosti</Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Projekt „ADOS Zdravá župa Trnava"</h2>
            <p className="mb-4">
              Je spolufinancovaný z finančných prostriedkov mechanizmu na podporu obnovy a odolnosti poskytnutých formou pomoci de minimis v súlade s pravidlami EÚ pre pomoc de minimis a zákonom č. 358/2015 Z. z. o úprave niektorých vzťahov v oblasti štátnej pomoci a minimálnej pomoci a o zmene a doplnení niektorých zákonov (zákon o štátnej pomoci) a so schémou pomoci de minimis na podporu rozšírenia a obnovy kapacít následnej starostlivosti a ošetrovateľskej starostlivosti uplatňovanej pri vykonávaní Plánu obnovy a odolnosti SR č. DM – 11/2022 v celkovej výške poskytovanej štátnej pomoci/minimálnej pomoci 39 535,64 EUR bez DPH, v súlade s nariadením Komisie EÚ č. 1407/2013 z 18. decembra 2013 o uplatňovaní článkov 107 a 108 Zmluvy o fungovaní Európskej únie na pomoc de minimis zverejneného v Úradnom vestníku dňa 24.12.2013 (Ú. V. EÚ L 352, 24.12.2013, s. 1).
            </p>
            <div className="space-y-2">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/ADOS_Zdrava-zupa_Trnava_info.pdf">
                  ZOBRAZIŤ VIAC
                </Link>
              </Button>
              <Link href="https://www.health.gov.sk/Clanok?plan-obnovy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Health.gov.sk - Plán obnovy a odolnosti</Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Projekt „Mobilný hospic Zdravá župa Trnava"</h2>
            <p className="mb-4">
              Je spolufinancovaný z finančných prostriedkov mechanizmu na podporu obnovy a odolnosti poskytnutých formou pomoci de minimis v súlade s pravidlami EÚ pre pomoc de minimis a zákonom č. 358/2015 Z. z. o úprave niektorých vzťahov v oblasti štátnej pomoci a minimálnej pomoci a o zmene a doplnení niektorých zákonov (zákon o štátnej pomoci) a so schémou pomoci de minimis na podporu rozšírenia a obnovy kapacít následnej starostlivosti a ošetrovateľskej starostlivosti uplatňovanej pri vykonávaní Plánu obnovy a odolnosti SR č. DM – 9/2022 v celkovej výške poskytovanej štátnej pomoci/minimálnej pomoci 39 978,08 EUR bez DPH, v súlade s nariadením Komisie EÚ č. 1407/2013 z 18. decembra 2013 o uplatňovaní článkov 107 a 108 Zmluvy o fungovaní Európskej únie na pomoc de minimis zverejneného v Úradnom vestníku dňa 24.12.2013 (Ú. V. EÚ L 352, 24.12.2013, s. 1).
            </p>
            <div className="space-y-2">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/MOHO_Zdrava-zupa-Trnava_info.pdf">
                  ZOBRAZIŤ VIAC
                </Link>
              </Button>
              <Link href="https://www.health.gov.sk/Clanok?plan-obnovy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Health.gov.sk - Plán obnovy a odolnosti</Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Národný projekt Ministerstva zdravotníctva SR „Posilnenie dlhodobej zdravotnej starostlivosti"</h2>
            <p className="mb-4">
              Zdravá župa, s.r.o. zapojená do projektu v pozícii Užívateľa - MZ SR poskytuje na základe Zmluvy Užívateľovi finančné prostriedky ako štátnu pomoc vo forme náhrady za poskytovanie služieb všeobecného hospodárskeho záujmu podľa Schémy štátnej pomoci na podporu posilnenia dlhodobej zdravotnej starostlivosti a paliatívnej zdravotnej starostlivosti - schéma štátnej pomoci vo forme náhrady za služby všeobecného hospodárskeho záujmu v znení Dodatku č. 1, č. ŠP SVHZ – 1/2022, OV 40/2022, 28.2.2022; a v súlade s Rozhodnutím Komisie č. 2012/21/EÚ z 20. decembra 2011 o uplatňovaní článku 106 ods. 2 Zmluvy o fungovaní EÚ na štátnu pomoc vo forme náhrady za službu vo verejnom záujme udeľovanej niektorým podnikom povereným poskytovaním služieb všeobecného hospodárskeho záujmu (Ú. v. EÚ L 7/3, 11.1.2012).
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://www.health.gov.sk/?Vyzva-Posilnenie-dlhodobej-zdravotnej-starostlivosti">
                  ZOBRAZIŤ VIAC
                </Link>
              </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
