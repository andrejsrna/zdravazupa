import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Moderné zdravotnícke zariadenie v Trnave</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Trnavský samosprávny kraj v piatok 21. októbra 2022 predstavil priestory nového zdravotníckeho strediska, ktoré sa nachádza v zrekonštruovaných priestoroch bývalého školského internátu na Študentskej 16 v Trnave.
          </p>
          <button className="btn">Zobraziť viac</button>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Naše zdravotnícke zariadenia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Ambulancia pre dospelých", href: "/ambulancia-pre-dospelych" },
              { name: "Agentúra domácej ošetrovateľskej starostlivosti", href: "/ados" },
              { name: "Ambulantná pohotovostná služba pre deti a dorast", href: "/ambulantna-pohotovostna-sluzba-pre-deti-a-dorast" },
              { name: "Diabetologická ambulancia", href: "/diabetologicka-ambulancia" },
              { name: "Kardiológická ambulancia", href: "/kardiologia-trnava" },
              { name: "Mobilný hospic", href: "/mobilny-hospic" },
              { name: "Neurologická ambulancia", href: "/neurologicka-ambulancia-trnava-neurologia" }
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
                  <h3 className="font-medium">{service.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Important Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Dôležité odkazy</h2>
          <p className="text-muted-foreground mb-4">Pozrite si dôležité odkazy, ktoré by vás mohli zaujímať.</p>
          <div className="space-y-4">
            {[
              { name: "Aktuálna neprítomnosť lekárov a ich zastupovanie", href: "https://www.e-vuc.sk/e-vuc/pre-poskytovatelov-zdravotnej-starostlivosti/vsetky-nepritomnosti-v-ambulancii-v-kraji/aktualne-nepritomnosti-v-ambulancii.html?page_id=66268&kraj=406" },
              { name: "Objednajte sa na vyšetrenie", href: "https://www.objednatvysetrenie.sk/?utm_source=evuc&utm_medium=banner&utm_campaign=evuc" },
              { name: "Je Vaše dieťa choré? Neviete sa skontaktovať s jeho pediatrom?", href: "https://pediatridetom.sk/" },
              { name: "Zdravie – Ústredný portál verejnej správy", href: "https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_zdravie" },
              { name: "Národný portál zdravia", href: "https://www.npz.sk" },
              { name: "Najbližšia lekáreň, ambulantná pohotovosť alebo nemocnica", href: "https://www.e-vuc.sk/ttsk/zdravotnictvo" }
            ].map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">V rámci poskytovania zdravotnej starostlivosti Vám ponúkame:</h2>
          <p className="text-lg mb-8">preventívne programy s využitím moderného prístrojového vybavenia</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EKG",
                description: "vyšetrenie dokáže odhaliť závažné srdcové poruchy ešte skôr, než pocítite príznaky. EKG krivka môže prezradiť aj zväčšenie srdca, jeho neprekrvenie, infarkt, známky preťaženia pľúcnych ciev."
              },
              {
                title: "ABI",
                description: "meranie ABI prispieva k odhaleniu systémového aterosklerotického postihnutia artérií a tým znižuje riziko fatálnej srdcovej a mozgovocievnej príhody"
              },
              {
                title: "Spirometria",
                description: "základná vyšetrovacia metóda na určenie pľúcnych funkcií. Je určená na diagnostiku pľúcnych ochorení a kontrolu liečby."
              },
              {
                title: "CRP",
                description: "vyšetrenie slúži na rozlíšenie vírusového a bakteriálneho ochorenia, pomáha tak zabrániť nadmernému užívaniu antibiotík."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Vaše auto si môžete pohodlne zaparkovať na vyhradených miestach",
            "Vstup do našich priestorov je bezbariérový",
            "Spolupracujeme so všetkými positovňami"
          ].map((facility, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card hover:bg-accent transition-colors">
              <p className="text-center">{facility}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
