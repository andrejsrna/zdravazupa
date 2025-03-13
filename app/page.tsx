import Image from 'next/image'
import Link from 'next/link'
import Benefits from './components/Benefits'
import Foto from './components/Foto'
import ZP from './components/ZP'
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold mb-4">
              Moderné zdravotnícke zariadenie v Trnave
            </h1>
            <p className="text-lg text-muted-foreground">
              Trnavský samosprávny kraj v piatok 21. októbra 2022 predstavil
              priestory nového zdravotníckeho strediska, ktoré sa nachádza v
              zrekonštruovaných priestoroch bývalého školského internátu na
              Študentskej 16 v Trnave.
            </p>
          </div>
          <div className="md:w-1/2 w-full relative h-[300px] md:h-[400px]">
            <Image
              src="/budova.jpg"
              alt="Budova zdravotníckeho zariadenia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="mb-16 py-16 bg-primary/10 relative">
        <div className="absolute inset-0 bg-[url('/medical-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">
            Naše zdravotnícke zariadenia
          </h2>
          <p className="text-muted-foreground mb-8">
            Poskytujeme komplexnú zdravotnú starostlivosť pod jednou strechou.
            Naše moderné ambulancie sú vybavené špičkovými zariadeniami a tímom
            skúsených odborníkov.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Ambulancia pre dospelých',
                description:
                  'Všeobecná ambulancia poskytujúca preventívnu a liečebnú starostlivosť pre dospelých pacientov.',
                href: '/ambulancia-pre-dospelych',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              },
              {
                name: 'ADOS',
                description:
                  'Agentúra domácej ošetrovateľskej starostlivosti poskytuje odbornú zdravotnú starostlivosť v domácom prostredí.',
                href: '/ados',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ),
              },
              {
                name: 'Pohotovosť pre deti a dorast',
                description:
                  'Ambulantná pohotovostná služba poskytujúca neodkladnú zdravotnú starostlivosť pre deti a mladistvých.',
                href: '/ambulantna-pohotovostna-sluzba-pre-deti-a-dorast',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                name: 'Diabetologická ambulancia',
                description:
                  'Špecializovaná ambulancia pre diagnostiku a liečbu cukrovky a jej komplikácií.',
                href: '/diabetologicka-ambulancia',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
              },
              {
                name: 'Kardiologická ambulancia',
                description:
                  'Komplexná starostlivosť o pacientov s ochoreniami srdca a cievneho systému.',
                href: '/kardiologia-trnava',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
              },
              {
                name: 'Mobilný hospic',
                description:
                  'Paliatívna starostlivosť poskytovaná pacientom v terminálnom štádiu ochorenia v domácom prostredí.',
                href: '/mobilny-hospic',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ),
              },
              {
                name: 'Neurologická ambulancia',
                description:
                  'Diagnostika a liečba ochorení nervového systému pod vedením skúsených neurológov.',
                href: '/neurologicka-ambulancia-trnava-neurologia',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
              },
              {
                name: 'Psycho-sociálne centrum',
                description:
                  'Komplexná psychologická a sociálna podpora pre pacientov a ich rodiny.',
                href: '/psycho-socialne-centrum',
                isNew: true,
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
              },
              {
                name: 'Psychiatrická ambulancia',
                description:
                  'Služby v oblasti psychiatrie, konzultácie, diagnostiku a liečbu psychických problémov.',
                href: '/psychiatricka-ambulancia',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="group p-6 rounded-xl border bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-lg relative">
                  {service.isNew && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-xs font-semibold rounded-full">
                      Nové
                    </div>
                  )}
                  <div className="flex flex-col gap-4">
                    <div className="text-primary bg-primary/10 p-3 rounded-lg w-fit">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-primary font-medium mt-2 group-hover:translate-x-2 transition-transform">
                      Zistiť viac
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Links */}
      <div className="container mx-auto px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Dôležité odkazy</h2>
          <p className="text-muted-foreground mb-4">
            Pozrite si dôležité odkazy, ktoré by vás mohli zaujímať.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: 'Aktuálna neprítomnosť lekárov a ich zastupovanie',
                href:
                  'https://www.e-vuc.sk/e-vuc/pre-poskytovatelov-zdravotnej-starostlivosti/vsetky-nepritomnosti-v-ambulancii-v-kraji/aktualne-nepritomnosti-v-ambulancii.html?page_id=66268&kraj=406',
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                name: 'Objednajte sa na vyšetrenie',
                href:
                  'https://www.objednatvysetrenie.sk/?utm_source=evuc&utm_medium=banner&utm_campaign=evuc',
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                name:
                  'Je Vaše dieťa choré? Neviete sa skontaktovať s jeho pediatrom?',
                href: 'https://pediatridetom.sk/',
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
              },
              {
                name: 'Zdravie – Ústredný portál verejnej správy',
                href:
                  'https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_zdravie',
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
              {
                name: 'Národný portál zdravia',
                href: 'https://www.npz.sk',
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
              },
              {
                name:
                  'Najbližšia lekáreň, ambulantná pohotovosť alebo nemocnica',
                href: 'https://www.e-vuc.sk/ttsk/zdravotnictvo',
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group p-4 rounded-lg border bg-card hover:bg-accent transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                      {link.icon}
                    </div>
                    <span className="flex-grow group-hover:text-primary transition-colors duration-300">
                      {link.name}
                    </span>
                    <svg
                      className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Foto />

        <Benefits />
        <ZP />
      </div>
    </div>
  )
}
