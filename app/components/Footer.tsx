export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <ul className="space-y-2">
              <li><a href="/ochrana-osobnych-udajov" className="hover:text-white">Ochrana osobných údajov</a></li>
              <li><a href="/spraccinn.xlsx" className="hover:text-white">Záznamy o spracovateľských činnostiach</a></li>
              <li><a href="mailto:info@zdravazupa.sk" className="hover:text-white">Technický prevádzkovateľ</a></li>
              <li><a href="/verejnost" className="hover:text-white">Verejnosť</a></li>
              <li><a href="/protispol.pdf" className="hover:text-white">Protispoločenská činnosť</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="mb-2">Zriaďovateľ: Trnavský samosprávny kraj</p>
            <p className="mb-2">Kontakt: Zdravá župa, s. r. o., Starohájska 10 917 01 Trnava</p>
            <p className="mb-2">IČO: 53708997, DIČ: 2121488468</p>
            <p>Okresný súd Trnava, oddiel: Sro, vložka č. 48993/T</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
