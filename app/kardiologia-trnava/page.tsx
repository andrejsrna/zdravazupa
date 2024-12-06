export default function KardiologickaAmbulancia() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Kardiologická ambulancia</h1>

        <div className="bg-green-100 p-4 rounded-lg mb-8">
          <p className="text-lg font-semibold text-gray-900">PRIJÍMAME NOVÝCH PACIENTOV</p>
          <p className="text-lg font-semibold text-gray-900">OTVORILI SME PRE VÁS NOVÚ AMBULANCIU</p>
        </div>

        <section className="mb-12">
          <div className="mb-6">
            <p><strong>Poskytovateľ:</strong> Zdravá župa, s.r.o.</p>
            <p><strong>Adresa ambulancie:</strong> Študentská 3579/16, 917 08 Trnava</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">KONTAKT</h2>
            <p>mobil: <a href="tel:+421945464720" className="text-primary">+421 945 464 720</a></p>
            <p>e-mail: <a href="mailto:kardiolog@zdravazupa.sk" className="text-primary">kardiolog@zdravazupa.sk</a></p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">ORDINAČNÉ HODINY</h2>
            <p className="mb-4"><strong>Platnosť od:</strong> 13.02.2023</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Pondelok</td>
                    <td className="text-right p-2">15:00 – 19:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Utorok</td>
                    <td className="text-right p-2">15:00 – 19:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Streda</td>
                    <td className="text-right p-2">8:00 – 18:30</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Štvrtok</td>
                    <td className="text-right p-2">neordinuje</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Piatok</td>
                    <td className="text-right p-2">neordinuje</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Sobota</td>
                    <td className="text-right p-2">8:00 - 18:00</td>
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
            <p>Na vyšetrenie je potrebné sa objednať telefonicky počas ordinačných hodín.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">ZDRAVOTNÉ POISŤOVNE</h2>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">CENNÍK</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Úkon</th>
                    <th className="text-right p-2">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Vstupné kardiologické vyšetrenie + EKG na žiadosť pacienta nad rámec úhrady ZP, samoplatca</td>
                    <td className="text-right p-2">50,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Kontrolné kardiologické vyšetrenie + EKG na žiadosť pacienta nad rámec úhrady ZP, samoplatca</td>
                    <td className="text-right p-2">25,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">EKG vyšetrenie s popisom na žiadosť pacienta nad rámec úhrady ZP, samoplatca</td>
                    <td className="text-right p-2">25,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Echokardiografické vyšetrenie na žiadosť pacienta nad rámec úhrady ZP</td>
                    <td className="text-right p-2">75,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">24-hodinové Holter EKG meranie, vrátane administratívy na žiadosť pacienta nad rámec úhrady ZP, samoplatca</td>
                    <td className="text-right p-2">50,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">24-hodinové Holter TK meranie, vrátane administratívy na žiadosť pacienta nad rámec úhrady ZP, samoplatca</td>
                    <td className="text-right p-2">30,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Posudok špecialistu o pracovnej spôsobilosti pred nástupom do zamestnania, na vlastnú žiadosť pacienta</td>
                    <td className="text-right p-2">20,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Odber biologického materiálu na žiadosť pacienta nad rámec úhrady ZP, samoplatca (bez ceny vlastného vyšetrenia)</td>
                    <td className="text-right p-2">15,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Vystavenie kópie lekárskej správy na žiadosť pacienta (originál je súčasťou zdravotného výkonu)</td>
                    <td className="text-right p-2">1,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      Komplexné kardiologické vyšetrenie (samoplatca, na vlastnú žiadosť pacienta)<br/>
                      Komplexné kardiologické vyšetrenie zahŕňa:<br/>
                      • Základné vyšetrenie: anamnéza, fyzikálne vyšetrenie,<br/>
                      základné antropometrické vyšetrenie, meranie pulzu a tlaku krvi<br/>
                      • Laboratórne vyšetrenie: sedimentácia erytrocytov, krvný obraz<br/>
                      základné biochemické parametre, chemické vyšetrenie moču<br/>
                      • Elektrokardiografia (EKG) – grafický záznam činnosti srdca<br/>
                      • Echokardiografické vyšetrenie – ultrazvukové vyšetrenie činnosti srdca<br/>
                      • Zhodnotenie vyšetrení, konzultácie<br/>
                      • Lekárska správa – pre klienta so zisteným nálezom, odporučenie režimových opatrení a prípadného liečebného postupu
                    </td>
                    <td className="text-right p-2">150,- €</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">
                      Komplexné kardiologické vyšetrenie bez odberov (samoplatca, na vlastnú žiadosť pacienta)<br/>
                      Komplexné kardiologické vyšetrenie zahŕňa:<br/>
                      • Základné vyšetrenie: anamnéza, fyzikálne vyšetrenie,<br/>
                      základné antropometrické vyšetrenie, meranie pulzu a tlaku krvi<br/>
                      • Elektrokardiografia (EKG) – grafický záznam činnosti srdca<br/>
                      • Echokardiografické vyšetrenie – ultrazvukové vyšetrenie činnosti srdca<br/>
                      • Zhodnotenie vyšetrení, konzultácie<br/>
                      • Lekárska správa – pre klienta so zisteným nálezom, odporučenie režimových opatrení a prípadného liečebného postupu
                    </td>
                    <td className="text-right p-2">130,- €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <footer className="text-center text-sm text-muted-foreground">
            <p>Zriaďovateľ: Trnavský samosprávny kraj</p>
            <p>Kontakt: Zdravá župa, s. r. o., Starohájska 10 917 01 Trnava</p>
            <p>IČO: 53708997, DIČ: 2121488468</p>
            <p>Okresný súd Trnava, oddiel: Sro, vložka č. 48993/T</p>
          </footer>
        </section>
      </div>
    </div>
  );
}
