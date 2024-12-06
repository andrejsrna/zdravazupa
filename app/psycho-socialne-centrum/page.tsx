import Benefits from "../components/Benefits";
import Foto from "../components/Foto";
import ZP from "../components/ZP";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psycho-sociálne centrum | Zdravá župa",
  description: "Nové moderné centrum poskytujúce psychiatrickú ambulanciu, ambulanciu klinického psychológa, psychiatrický stacionár a sociálne poradenstvo v Trnave.",
  openGraph: {
    title: "Psycho-sociálne centrum | Zdravá župa",
    description: "Nové moderné centrum poskytujúce psychiatrickú ambulanciu, ambulanciu klinického psychológa, psychiatrický stacionár a sociálne poradenstvo v Trnave.",
    images: [
      {
        url: "/images/og-psycho-socialne-centrum.jpg", // Make sure this image exists
        width: 1200,
        height: 630,
        alt: "Psycho-sociálne centrum v Trnave",
      },
    ],
  },
};
export default function PsychoSocialneCentrum() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Psycho-sociálne centrum
        </h1>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform">
          <h2 className="text-3xl font-semibold mb-6 text-primary flex items-center gap-2">
            <span className="inline-block w-2 h-8 bg-primary rounded-full"></span>
            NOVÉ MODERNÉ CENTRUM
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Trnavský samosprávny kraj v pondelok 2. decembra 2024 predstavil novovybudované priestory Psycho-sociálneho centra, ktoré sa nachádza na Študentskej ulici v Trnave. Centrum bude pacientom poskytovať služby psychiatrickej ambulancie, ambulancie klinického psychológa, psychiatrický stacionár a sociálne poradenstvo.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg my-6">
              <p className="text-primary font-medium">
                Kraj do tohto pilotného projektu investoval takmer 1,8 milióna eur, pričom naň použil aj nenávratný finančný príspevok z Plánu obnovy a odolnosti SR.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Poskytované služby</h2>
            <ul className="space-y-3">
              {[
                "Psychiatrická ambulancia",
                "Ambulancia klinického psychológa",
                "Psychiatrický stacionár",
                "Sociálne poradenstvo"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Dôležité informácie</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Spádová oblasť</h3>
                <p className="text-gray-600">Prioritne pre obyvateľov okresov Trnava, Hlohovec a Piešťany. Pri voľnej kapacite aj pre obyvateľov ďalších okresov kraja.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Začiatok prevádzky</h3>
                <p className="text-gray-600">Predpokladaný začiatok prevádzky bude v priebehu januára.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Adresa</h3>
                <p className="text-gray-600">Študentská ulica, Trnava (areál zdravotníckeho zariadenia Zdravá župa)</p>
              </div>
            </div>
          </section>
        </div>

        <Foto />

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600">
            "Zdravotníctvo je pre mňa dôležitou županskou témou a do tejto oblasti určite patrí aj starostlivosť o duševné zdravie. Považujem za nevyhnutné sa o téme duševného zdravia rozprávať nahlas."
            <footer className="mt-2 font-medium text-primary">- Jozef Viskupič, trnavský župan</footer>
          </blockquote>
        </section>

        <ZP />
        <Benefits />
      </div>
    </div>
  );
}
