'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Top section with logo and main content */}
        <div className="py-12 border-b border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and company info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Link href="https://trnava-vuc.sk">
                  <Image
                    src="/ttsklogo.png"
                    alt="TTSK Logo"
                    width={120}
                    height={60}
                    className="bg-white p-2 rounded-lg"
                  />
                </Link>
              </div>
              <p className="text-sm">
                Zdravá župa, s. r. o. je spoločnosť založená Trnavským samosprávnym krajom s cieľom poskytovať kvalitnú zdravotnú starostlivosť pre obyvateľov regiónu.
              </p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors group"
              >
                <svg 
                  className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                Naspäť na vrch stránky
              </button>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Dôležité odkazy</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/ochrana-osobnych-udajov" className="hover:text-primary transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Ochrana osobných údajov
                  </a>
                </li>
                <li>
                  <a href="/spraccinn.xlsx" className="hover:text-primary transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Záznamy o spracovateľských činnostiach
                  </a>
                </li>
                <li>
                  <a href="/verejnost" className="hover:text-primary transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Verejnosť
                  </a>
                </li>
                <li>
                  <a href="/protispol.pdf" className="hover:text-primary transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Protispoločenská činnosť
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Kontaktné informácie</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-white">Adresa</p>
                    <p className="text-sm">Zdravá župa, s. r. o.</p>
                    <p className="text-sm">Starohájska 10</p>
                    <p className="text-sm">917 01 Trnava</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="text-sm">IČO: 53708997</p>
                    <p className="text-sm">DIČ: 2121488468</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <p className="text-sm">Okresný súd Trnava, oddiel: Sro, vložka č. 48993/T</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="py-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Zdravá župa, s. r. o. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}
