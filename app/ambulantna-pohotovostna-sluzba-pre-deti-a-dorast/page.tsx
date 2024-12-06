export default function AmbulantnaPohotovostPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Ambulantná pohotovostná služba pre deti a dorast</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Informácie</h2>
          <div className="space-y-2">
            <p><strong>Poskytovateľ:</strong> Zdravá župa, s. r. o.</p>
            <p><strong>Miesto poskytovania:</strong> Starohájska 1 v Trnave</p>
            <p>Poskytovaná zdravotná starostlivosť je určená pre pacientov zo spádových oblastí Trnava a Hlohovec.</p>
            <p className="mt-4">Počas sviatkov je zdravotná starostlivosť poskytovaná v čase 07:00 – 22:00 hod.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <div className="space-y-2">
            <p><strong>Pevná linka:</strong> 033/55 86 896</p>
            <p><strong>Mobil:</strong> +421 948 331 758</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ordinačné hodiny</h2>
          <p className="mb-4"><strong>Platnosť od:</strong> 01.12.2022</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Pondelok</td>
                  <td className="text-right p-2">16:00 – 22:00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Utorok</td>
                  <td className="text-right p-2">16:00 – 22:00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Streda</td>
                  <td className="text-right p-2">16:00 – 22:00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Štvrtok</td>
                  <td className="text-right p-2">16:00 – 22:00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Piatok</td>
                  <td className="text-right p-2">16:00 – 22:00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Sobota</td>
                  <td className="text-right p-2">07:00 – 22:00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Nedeľa</td>
                  <td className="text-right p-2">07:00 – 22:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
