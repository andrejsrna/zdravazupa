import Link from 'next/link';

export default function KurzyPrvejPomoci() {
  return (
    <Link href="/kurz-prvej-pomoci">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="medical-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M5,2.5h5v5h-5z M0,7.5h5v5h-5z" fill="currentColor"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#medical-pattern)"/>
          </svg>
        </div>

        <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Icon */}
          <div className="bg-white/90 p-4 rounded-full">
            <svg 
              className="w-12 h-12 text-blue-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Kurz prvej pomoci
            </h3>
            <p className="text-blue-100 text-lg mb-4">
              Naučte sa zachrániť život! Akreditované kurzy pre jednotlivcov aj firmy.
            </p>
            <div className="inline-flex items-center text-white font-medium">
              Zistiť viac
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Next course info */}
          <div className="bg-white/90 p-4 rounded-xl text-blue-900">
            <p className="font-semibold mb-1">Najbližší termín</p>
            <p className="text-blue-600">08.03.2025</p>
            <p className="text-sm text-blue-800">Trnava</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
