export default function NeurologickaAmbulancia() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Neurologická ambulancia</h1>

        <div className="bg-green-100 p-4 rounded-lg mb-8">
          <p className="text-lg font-semibold text-gray-900">PRIJÍMAME NOVÝCH PACIENTOV</p>
          <p className="text-lg font-semibold text-gray-900">OTVORILI SME PRE VÁS OD 01.08.2023 NOVÚ AMBULANCIU</p>
        </div>

        <section className="mb-12">
          <div className="mb-6">
            <p><strong>Poskytovateľ:</strong> Zdravá župa, s.r.o.</p>
            <p><strong>MUDr. Šimášková Ivana</strong></p>
            <p><strong>Adresa ambulancie:</strong> Študentská 3579/16, 917 08 Trnava</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">KONTAKT</h2>
            <p>mobil: <a href="tel:+421917801230" className="text-primary">+421 917 801 230</a></p>
            <p>e-mail: <a href="mailto:neurolog@zdravazupa.sk" className="text-primary">neurolog@zdravazupa.sk</a></p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">ORDINAČNÉ HODINY</h2>
            <p className="mb-4"><strong>Platnosť od:</strong> 01.08.2023</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Pondelok</td>
                    <td className="text-right p-2">7:30 – 14:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Utorok</td>
                    <td className="text-right p-2">7:30 – 14:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Streda</td>
                    <td className="text-right p-2">7:30 – 14:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Štvrtok</td>
                    <td className="text-right p-2">7:30 – 16:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Piatok</td>
                    <td className="text-right p-2">7:30 – 15:00</td>
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
            <p>Na vyšetrenie sa môžete od 01.08.2023 objednať telefonicky počas ordinačných hodín.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">ZDRAVOTNÉ POISŤOVNE</h2>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">CENNÍK</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Úkon</th>
                    <th className="p-2 text-right">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Komplexné vstupné neurologické vyšetrenie<br/>(na žiadosť pacienta nad rámec úhrady ZP,samoplatca)</td>
                    <td className="text-right p-2">50,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Kontrolné neurologické vyšetrenie<br/>(na žiadosť pacienta nad rámec úhrady ZP,samoplatca)</td>
                    <td className="text-right p-2">25,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Podanie obstreku<br/>(na žiadosť pacienta nad rámec úhrady ZP,samoplatca)</td>
                    <td className="text-right p-2">15,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Podanie 1 infúzie<br/>(na žiadosť pacienta nad rámec úhrady ZP,samoplatca)</td>
                    <td className="text-right p-2">10,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Podanie 5 infúzii<br/>(na žiadosť pacienta nad rámec úhrady ZP,samoplatca)</td>
                    <td className="text-right p-2">45,- €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <p>
              Neurologická ambulancia poskytuje aj ambulantnú infúznu terapiu. Ide o moderný spôsob ambulantnej liečby u indikovaných ochorení, najmä pre pacientov, ktorí si nemôžu z časových resp. rodinných (osobných) dôvodov dovoliť hospitalizáciu. Ambulantná infúzna liečba je podávaná pacientom s akútnymi a chronickými ochoreniami pohybového aparátu a chrbtice, pri ochoreniach periférnych nervov, pri poruchách prekrvenia končatín, pri liečbe osteoporózy a pri iných diagnózach.
            </p>
            <p>
              Pacienti sú objednávaní na konkrétny termín. Skúsená zdravotná sestra aplikuje liečbu na základe indikácie lekárov neurologickej a všeobecnej ambulancie. Jedná sa o celé spektrum liečby – analgetické infúzie, infúzie kortikoidov, vazoaktívne infúzie, liečba i.v. imunoglobulínom, vitamínová a nootropná liečba... Pacienti sú počas podávania infúznej terapie pod dohľadom zdravotnej sestry.
            </p>
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
