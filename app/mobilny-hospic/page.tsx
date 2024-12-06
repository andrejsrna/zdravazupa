import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobilný hospic | Zdravá župa",
  description: "Poskytujeme komplexnú paliatívnu starostlivosť pacientom s nevyliečiteľným ochorením priamo v pohodlí ich domova. Služby sú plne hradené zdravotnými poisťovňami.",
  openGraph: {
    title: "Mobilný hospic | Zdravá župa",
    description: "Poskytujeme komplexnú paliatívnu starostlivosť pacientom s nevyliečiteľným ochorením priamo v pohodlí ich domova.",
    images: [
      {
        url: "/images/og-mobilny-hospic.jpg",
        width: 1200,
        height: 630,
        alt: "Mobilný hospic Zdravá župa",
      },
    ],
  },
};


export default function MobilnyHospic() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Mobilný hospic Zdravá župa, s.r.o.</h1>

          <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200 shadow-sm">
            <p className="text-lg">
              Poskytujeme komplexnú paliatívnu starostlivosť pacientom s nevyliečiteľným ochorením priamo v pohodlí ich domova. 
              Naša starostlivosť je plne hradená všetkými zdravotnými poisťovňami.
            </p>
          </div>

          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Ordinačné hodiny</h2>
              <p className="mb-4 text-gray-600">platnosť od: 17.04.2023</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      { day: 'Pondelok', hours: '8:00 – 16:00' },
                      { day: 'Utorok', hours: '15:00 – 19:00' },
                      { day: 'Streda', hours: '8:00 – 16:00' },
                      { day: 'Štvrtok', hours: '8:00 – 16:00' },
                      { day: 'Piatok', hours: '8:00 – 16:00' },
                      { day: 'Sobota', hours: 'neordinuje' },
                      { day: 'Nedeľa', hours: 'neordinuje' },
                    ].map((item, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-3 font-medium">{item.day}</td>
                        <td className="text-right p-3 text-primary">{item.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-sm mb-8">
            <p className="text-yellow-800">
              Návštevnú službu je potrebné dohodnúť telefonicky počas ordinačných hodín alebo vyplňte kedykoľvek kontaktný formulár.
            </p>
          </div>

          <div className="mb-8">
            <a href="#" className="text-primary hover:underline flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Návrh na poskytovanie mobilnej hospicovej starostlivosti (tlač, 75 kB)
            </a>
          </div>

          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Úlohy paliatívnej starostlivosti</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Zlepšiť kvalitu života pacienta a jeho rodiny včasnou diagnostikou a liečbou bolesti</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stabilizovať zdravotný a psychický stav pacienta</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Poskytnúť pomoc príbuzným a blízkym osobám pacienta</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Kontakt</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Pevná linka</div>
                    <a href="tel:033/2023523" className="font-semibold hover:text-primary">033/20 23 523</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Mobil</div>
                    <a href="tel:+421945458008" className="font-semibold hover:text-primary">+421 945 458 008</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <a href="mailto:mobilnyhospic@zdravazupa.sk" className="font-semibold hover:text-primary">mobilnyhospic@zdravazupa.sk</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
