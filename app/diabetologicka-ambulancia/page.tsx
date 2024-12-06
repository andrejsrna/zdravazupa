import Benefits from "../components/Benefits";
import ZP from "../components/ZP";

export default function DiabetologickaAmbulancia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Diabetologická ambulancia</h1>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-200 shadow-sm">
            <p className="text-xl font-semibold text-green-800 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              PRIJÍMAME NOVODIAGNOSTIKOVANÝCH PACIENTOV
            </p>
          </div>

          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm mb-8">
              <div className="space-y-3">
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Poskytovateľ:</span> Zdravá župa, s.r.o.</p>
                <p className="flex items-center"><span className="font-semibold min-w-[140px]">Adresa ambulancie:</span> Študentská 3579/16, 917 08 Trnava</p>
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
              <h2 className="text-2xl font-semibold mb-4 text-primary">Ordinačné hodiny</h2>
              <p className="mb-4 text-gray-600">platnosť od: 22.02.2024</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      { day: 'Pondelok', hours: '8:00 – 18:00' },
                      { day: 'Utorok', hours: '13:00 – 19:00' },
                      { day: 'Streda', hours: '13:00 – 19:00' },
                      { day: 'Štvrtok', hours: '10:00 – 14:00' },
                      { day: 'Piatok', hours: '10:00 – 14:00' },
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

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-2 text-yellow-800">Objednajte sa na vyšetrenie</h3>
              <p className="text-yellow-700">Na vyšetrenie sa môžete od 02.04.2024 objednať telefonicky počas ordinačných hodín.</p>
            </div>
          </section>

          <ZP />
          <Benefits />
        </div>
      </div>
    </div>
  );
}