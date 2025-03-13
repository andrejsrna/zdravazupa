import { Fragment } from 'react'
import Benefits from '../components/Benefits'
import ZP from '../components/ZP'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psychiatrická ambulancia | Zdravá župa Trnava',
  description:
    'Psychiatrická ambulancia v Trnave poskytuje služby v oblasti psychiatrie. Konzultácie, diagnostika a liečba rôznych psychických problémov v modernom zdravotníckom zariadení.',
  keywords:
    'psychiatria, psychiatrická ambulancia, Trnava, Zdravá župa, psychiatrické vyšetrenie, depresia, úzkosti',
  openGraph: {
    title: 'Psychiatrická ambulancia | Zdravá župa Trnava',
    description:
      'Psychiatrická ambulancia v Trnave poskytuje služby v oblasti psychiatrie. Konzultácie, diagnostika a liečba rôznych psychických problémov v modernom zdravotníckom zariadení.',
    url: 'https://zdravazupa.sk/psychiatricka-ambulancia',
    siteName: 'Zdravá župa',
    locale: 'sk_SK',
    type: 'website',
  },
}

export default function PsychiatrickaAmbulancia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Psychiatrická ambulancia
          </h1>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200 shadow-sm">
            <p className="text-lg text-blue-800">
              Psychiatrická ambulancia je zdravotnícke zariadenie kde sa
              poskytujú služby v oblasti psychiatrie. V ambulancii sa pacienti
              môžu podrobiť konzultáciám, diagnostike a liečbe rôznych
              psychických problémov, ako sú depresia, úzkosti, schizofrénia,
              poruchy osobnosti.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-2 text-yellow-800">
              Objednajte sa na vyšetrenie
            </h3>
            <p className="text-yellow-700">
              Na vyšetrenie sa môžete objednať telefonicky počas ordinačných
              hodín. Nepreberáme pacientov z iných psychiatrických ambulancií.
            </p>
          </div>

          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm mb-8">
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="font-semibold min-w-[240px]">
                    Poskytovateľ:
                  </span>{' '}
                  Zdravá župa, s.r.o.
                </p>
                <p className="flex items-center">
                  <span className="font-semibold min-w-[240px]">
                    Adresa ambulancie:
                  </span>{' '}
                  Študentská 3579/16, 917 08 Trnava
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Kontakt
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Telefón</div>
                    <a
                      href="tel:+421917242621"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      +421 917 242 621
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">E-mail</div>
                    <a
                      href="mailto:psychiater@zdravazupa.sk"
                      className="font-semibold hover:text-primary transition-colors"
                    >
                      psychiater@zdravazupa.sk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                ORDINAČNÉ HODINY
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ['Pondelok', '07:00 – 12:00 | 12:30 – 15:00'],
                  ['Utorok', '07:00 – 12:00 | 12:30 – 15:00'],
                  ['Streda', '07:00 – 12:00 | 12:30 – 15:00'],
                  ['Štvrtok', '07:00 – 12:00 | 12:30 – 15:00'],
                  ['Piatok', 'neordinuje'],
                  ['Sobota', 'neordinuje'],
                  ['Nedeľa', 'neordinuje'],
                ].map(([day, hours], i) => (
                  <Fragment key={i}>
                    <div className="font-medium bg-gray-50 p-2 rounded">
                      {day}:
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-primary">
                      {hours}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                Dôležité informácie
              </h2>
              <div className="space-y-4">
                <p className="text-blue-800">
                  Na vyšetrenie je potrebné si doniesť:
                </p>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>doterajšie lekárske správy od iných odborníkov</li>
                  <li>v prípade potreby okuliare</li>
                  <li>načúvací prístroj</li>
                </ul>
                <p className="text-blue-800">Výmenný lístok nie je potrebný.</p>
              </div>
            </div>
          </section>

          <ZP />
          <Benefits />
        </div>
      </div>
    </div>
  )
}
