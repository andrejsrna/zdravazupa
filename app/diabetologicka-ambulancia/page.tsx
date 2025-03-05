import { Fragment } from "react";
import Benefits from "../components/Benefits";
import ZP from "../components/ZP";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diabetologická ambulancia | Zdravá župa Trnava",
  description: "Diabetologická ambulancia v Trnave prijíma novodiagnostikovaných pacientov. Poskytujeme komplexnú diabetologickú starostlivosť v modernom zdravotníckom zariadení.",
  keywords: "diabetológia, diabetologická ambulancia, Trnava, Zdravá župa, diabetologické vyšetrenie, diabetes, cukrovka",
  openGraph: {
    title: "Diabetologická ambulancia | Zdravá župa Trnava",
    description: "Diabetologická ambulancia v Trnave prijíma novodiagnostikovaných pacientov. Poskytujeme komplexnú diabetologickú starostlivosť v modernom zdravotníckom zariadení.",
    url: "https://zdravazupa.sk/diabetologicka-ambulancia",
    siteName: "Zdravá župa",
    locale: "sk_SK",
    type: "website",
  }
};


export default function DiabetologickaAmbulancia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Diabetologická ambulancia</h1>

          <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-200 shadow-sm">
            <p className="text-xl font-semibold text-green-800 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              PRIJÍMAME NOVODIAGNOSTIKOVANÝCH PACIENTOV
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">Objednajte sa na vyšetrenie</h3>
              <p className="text-yellow-700">Na vyšetrenie sa môžete od 02.04.2024 objednať telefonicky počas ordinačných hodín.</p>
            </div>

          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm mb-8">
              <div className="space-y-3">
                <p className="flex items-center"><span className="font-semibold min-w-[240px]">Poskytovateľ:</span> Zdravá župa, s.r.o.</p>
                <p className="flex items-center"><span className="font-semibold min-w-[240px]">Adresa ambulancie:</span> Študentská 3579/16, 917 08 Trnava</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Mobil</div>
                    <a href="tel:+421918854867" className="font-semibold hover:text-primary transition-colors">+421 918 854 867</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">E-mail</div>
                    <a href="mailto:diabetolog@zdravazupa.sk" className="font-semibold hover:text-primary transition-colors">diabetolog@zdravazupa.sk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                ORDINAČNÉ HODINY
              </h2>
              <p className="mb-4 text-gray-600 italic">platnosť od: 01.02.2025</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["Pondelok", "07:00 – 12:30hod 13:00 – 18:00"],
                  ["Utorok", "neordinuje"],
                  ["Streda", "07:00 – 11:00hod 11:30 – 14:30"],
                  ["Štvrtok", "07:00 – 11:00hod 11:30 – 14:30"],
                  ["Piatok", "07:00 – 11:00hod"],
                  ["Sobota", "neordinuje"],
                  ["Nedeľa", "neordinuje"]
                ].map(([day, hours], i) => (
                  <Fragment key={i}>
                    <div className="font-medium bg-gray-50 p-2 rounded">{day}:</div>
                    <div className="bg-gray-50 p-2 rounded text-primary">{hours}</div>
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">CENNÍK ZDRAVOTNÝCH VÝKONOV A SLUŽIEB HRADENÝCH PACIENTOM DIABETOLOGICKEJ AMBULANCIE</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left p-3 bg-gray-50">Názov výkonu</th>
                      <th className="text-right p-3 bg-gray-50 w-32">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Komplexné vstupné diabetologické vyšetrenie (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                      <td className="text-right p-3 w-32">40,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Kontrolné diabetologické vyšetrenie (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                      <td className="text-right p-3 w-32">25,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vyšetrenie glykémie glukomerom na požiadanie (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                      <td className="text-right p-3 w-32">1,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Glukóza v prášku na OGTT (75g glukózy) (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                      <td className="text-right p-3 w-32">2,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Glukóza nápoj s príchoťou na OGTT (75g glukózy) (na žiadosť pacienta nad rámec úhrady ZP, samoplatca)</td>
                      <td className="text-right p-3 w-32">8,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Diabetická knižka</td>
                      <td className="text-right p-3 w-32">1,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Potvrdenie do lietadla v angličtine</td>
                      <td className="text-right p-3 w-32">10,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Odber biologického materiálu (na ��iadosť pacienta nad rámec úhrady ZP, samoplatca, bez ceny vlastného vyšetrenia)</td>
                      <td className="text-right p-3 w-32">15,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Ožarovanie rany lampou Bioptron: 1 impulz / 2 minúty</td>
                      <td className="text-right p-3 w-32">2,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Posudok špecialistu (pracovná spôsobilosť pred nástupom do zamestnania, na vlastnú žiadosť pacienta)</td>
                      <td className="text-right p-3 w-32">20,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vystavenie kópie lekárskej správy na žiadosť pacienta (originál je súčasťou zdravotného výkonu)</td>
                      <td className="text-right p-3 w-32">1,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vyhotovenie iných fotokópií - sadzba za 1 stranu formátu A4</td>
                      <td className="text-right p-3 w-32">1,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vyšetrenie CRP (výsledok na počkanie)</td>
                      <td className="text-right p-3 w-32">5,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Vyšetrenie INR (výsledok na počkanie)</td>
                      <td className="text-right p-3 w-32">5,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">EKG vyšetrenie</td>
                      <td className="text-right p-3 w-32">15,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Popis EKG vyšetrenia</td>
                      <td className="text-right p-3 w-32">5,- €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">ABI index (dôležitý rizikový marker ischemickej choroby dolných končatín – upchávanie tepien, predpovedá pravdepodobnosť výskytu srdcového infarktu alebo cievnej mozgovej príhody, vhodný pre rizikové skupiny fajčiari, diabetici)</td>
                      <td className="text-right p-3 w-32">30,- €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <ZP />
          <Benefits />
        </div>
      </div>
    </div>
  );
}
