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
              Trnavský kraj postupne spúšťa fungovanie novovybudovaného Psycho-sociálneho centra, ktoré sídli v areáli zdravotníckeho zariadenia Zdravá župa na Študentskej ulici v Trnave.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg my-6">
              <p className="text-primary font-medium">
                Pre pacientov je k dispozícií psychiatrická ambulancia, v ktorej ordinuje MUDr. Kamila Dobošová.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt a objednávanie</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="font-medium">E-mail</div>
                  <div className="text-primary">psychiater@zdravazupa.sk</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="font-medium">Telefón</div>
                  <div className="text-primary">+421 917 242 621</div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-blue-800">
                  Záujemcovia sa môžu objednať od utorka 4. februára 2025.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Dôležité informácie</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Psychiatrický stacionár</h3>
                <p className="text-gray-600">Otvorenie od pondelka 10. februára 2025. Pacienti budú môcť využívať jeho služby len na základe odporúčania psychiatra.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Spádová oblasť</h3>
                <p className="text-gray-600">Prioritne pre obyvateľov okresov Trnava, Hlohovec a Piešťany. Pri voľnej kapacite aj pre obyvateľov ďalších okresov kraja.</p>
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
            "Zdravotníctvo je pre mňa dôležitou županskou témou a do tejto oblasti určite patrí aj starostlivosť o duševném zdraví. Považujem za nevyhnutné sa o téme duševného zdravia rozprávať nahlas."
            <footer className="mt-2 font-medium text-primary">- Jozef Viskupič, trnavský župan</footer>
          </blockquote>
        </section>

        <ZP />
        <Benefits />
      </div>
    </div>
  );
}
