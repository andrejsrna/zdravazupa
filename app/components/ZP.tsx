import Image from "next/image";

export default function ZdravotnePoistovne() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Zdravotné poisťovne</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Všeobecná zdravotná poisťovňa */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
            <div className="aspect-square relative bg-white p-8">
              <Image
                src="/vszplogo.jpg"
                alt="Všeobecná zdravotná poisťovňa"
                fill
                className="object-contain p-4 transition-opacity group-hover:opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">VšZP</h3>
              </div>
            </div>
          </div>

          {/* Dôvera */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
            <div className="aspect-square relative bg-white p-8">
              <Image
                src="/doveralogo.jpg"
                alt="Dôvera zdravotná poisťovňa"
                fill
                className="object-contain p-4 transition-opacity group-hover:opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Dôvera</h3>
              </div>
            </div>
          </div>

          {/* Union */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105">
            <div className="aspect-square relative bg-white p-8">
              <Image
                src="/unionlogo.webp"
                alt="Union zdravotná poisťovňa"
                fill
                className="object-contain p-4 transition-opacity group-hover:opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Union</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
