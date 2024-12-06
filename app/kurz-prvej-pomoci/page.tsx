export default function KurzPrvejPomoci() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Kurz prvej pomoci</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Dôležité informácie</h2>
            <div className="space-y-4">
              <a href="#" className="text-primary block">Rozhodnutie o vydaní osvedčenia o akreditácii</a>
              <a href="#" className="text-primary block">Skúšobný poriadok</a>
              <a href="#" className="text-primary block">Prihláška na kurz prvej pomoci</a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">CENNÍK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Cena kurzu u objednávateľa:</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">11 – 15 osôb</td>
                      <td className="text-right p-2">35,- € / osoba</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">6 – 10 osôb</td>
                      <td className="text-right p-2">45,- € / osoba</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cena kurzu u poskytovateľa:</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">11 – 15 osôb</td>
                      <td className="text-right p-2">30,- € / osoba</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">6 – 10 osôb</td>
                      <td className="text-right p-2">40,- € / osoba</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">KONTAKT</h2>
            <div className="space-y-2">
              <p>PhDr. Angelika Dudžáková, PhD., MPH</p>
              <p>tel.: <a href="tel:0910718277" className="text-primary">0910 718 277</a></p>
              <p>e-mail: <a href="mailto:kurzypp@zdravazupa.sk" className="text-primary">kurzypp@zdravazupa.sk</a></p>
            </div>
            
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p>V prípade, že Vám nedvíhame telefón alebo hneď neodpovedáme na email, momentálne sme na Kurze prvej pomoci, spätne Vás budeme kontaktovať.</p>
            </div>
          </section>
        </div>

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
