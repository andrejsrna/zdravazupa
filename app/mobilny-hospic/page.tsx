export default function MobilnyHospic() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Mobilný hospic Zdravá župa, s.r.o.</h1>

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">ORDINAČNÉ HODINY</h2>
            <p className="mb-4"><strong>Platnosť od:</strong> 17.04.2023</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Pondelok</td>
                    <td className="text-right p-2">8:00 – 16:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Utorok</td>
                    <td className="text-right p-2">15:00 – 19:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Streda</td>
                    <td className="text-right p-2">8:00 – 16:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Štvrtok</td>
                    <td className="text-right p-2">8:00 – 16:00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Piatok</td>
                    <td className="text-right p-2">8:00 – 16:00</td>
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

          <p className="mb-6">
            Návštevnú službu je potrebné dohodnúť telefonicky počas ordinačných hodín alebo vyplňte kedykoľvek kontaktný formulár.
          </p>

          <div className="mb-6">
            <a href="#" className="text-primary">Návrh na poskytovanie mobilnej hospicovej starostlivosti (tlač, 75 kB)</a>
          </div>

          <div className="mb-8">
            <p className="mb-4">
              Mobilný hospic alebo inými slovami domáca hospicová starostlivosť je ambulantné zdravotnícke zariadenie, 
              ktoré poskytuje komplexnú paliatívnu starostlivosť pacientom s nevyliečiteľným ochorením a zomierajúcim 
              pacientom v ich domácom prostredí.
            </p>

            <h3 className="text-xl font-semibold mb-2">Čo je úlohou paliatívnej starostlivosti?</h3>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">zlepšiť kvalitu života pacienta a jeho rodiny zoči - voči život ohrozujúcemu ochoreniu tým, že včas rozpozná, neodkladne diagnostikuje a lieči bolesti a iné fyzické, psychosociálne a duchovné problémy, a tak predchádza utrpeniu a zmierňuje ho</li>
              <li className="mb-2">stabilizovať zdravotný a psychický stav pacienta</li>
              <li>poskytnúť pomoc príbuzným a blízkym osobám pacienta v náročnej životnej situácii</li>
            </ul>

            <p className="mb-6">
              Nami poskytovaná domáca hospicová starostlivosť je plne hradená všetkými zmluvnými zdravotnými poisťovňami - 
              Union poisťovňa, a.s., Všeobecná zdravotná poisťovňa, a.s. a DÔVERA zdravotná poisťovňa, a. s..
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">KONTAKTUJTE NÁS!</h2>
            <p className="font-semibold mb-2">ZAVOLAJTE NÁM NA:</p>
            <p className="mb-4">
              <a href="tel:033/2023523" className="text-primary block">033/20 23 523</a>
              <a href="tel:+421945458008" className="text-primary block">+421 945 458 008</a>
            </p>
            <p className="font-semibold mb-2">ALEBO NÁM NAPÍŠTE NA:</p>
            <p>
              <a href="mailto:mobilnyhospic@zdravazupa.sk" className="text-primary">mobilnyhospic@zdravazupa.sk</a>
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
