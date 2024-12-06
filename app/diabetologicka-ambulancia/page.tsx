export default function DiabetologickaAmbulancia() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Diabetologická ambulancia</h1>
        
        <div className="bg-green-100 p-4 rounded-lg mb-8">
          <p className="text-lg font-semibold text-gray-900">PRIJÍMAME NOVODIAGNOSTIKOVANÝCH PACIENTOV</p>
        </div>

        <section className="mb-12">
          <div className="mb-6">
            <p><strong>Poskytovateľ:</strong> Zdravá župa, s.r.o.</p>
            <p><strong>Adresa ambulancie:</strong> Študentská 3579/16, 917 08 Trnava</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">KONTAKT</h2>
            <p>mobil: <a href="tel:+421918854867" className="text-primary">+421 918 854 867</a></p>
            <p>e-mail: <a href="mailto:diabetolog@zdravazupa.sk" className="text-primary">diabetolog@zdravazupa.sk</a></p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">ORDINAČNÉ HODINY</h2>
            <p className="mb-4"><strong>Platnosť od:</strong> 22.02.2024</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Pondelok</td>
                    <td className="text-right p-2">8:00 – 18:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Utorok</td>
                    <td className="text-right p-2">13:00 – 19:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Streda</td>
                    <td className="text-right p-2">13:00 – 19:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Štvrtok</td>
                    <td className="text-right p-2">10:00 – 14:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Piatok</td>
                    <td className="text-right p-2">10:00 – 14:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Sobota</td>
                    <td className="text-right p-2">neordinuje</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Nedeľa</td>
                    <td className="text-right p-2">neordinuje</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border mb-8">
            <h3 className="text-xl font-semibold mb-2">Objednajte sa na vyšetrenie</h3>
            <p>Na vyšetrenie sa môžete od 02.04.2024 objednať telefonicky počas ordinačných hodín.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">ZDRAVOTNÉ POISŤOVNE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <p>Vaše auto si môžete pohodlne zaparkovať na vyhradených miestach</p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card">
              <p>Vstup do našich priestorov je bezbariérový</p>
            </div>
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
  );
}