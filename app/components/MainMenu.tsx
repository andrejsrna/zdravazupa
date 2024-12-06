'use client'

import Link from "next/link"
import { useState } from "react"

export default function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block fixed md:relative left-0 w-full md:w-auto bg-white md:bg-transparent z-50`}>
        <ul className="flex flex-col md:flex-row gap-6 p-4 md:p-0 text-gray-900">
          <li className="relative group">
            <Link href="#" className="hover:text-primary block" onClick={closeMenu}>
              Služby
            </Link>
            <ul className="md:absolute static md:hidden group-hover:md:block bg-gray-900 text-white border rounded-lg shadow-lg p-2 space-y-2 min-w-[300px]">
              <li>
                <Link href="/ambulancia-pre-dospelych" className="block hover:bg-primary/90 p-2 rounded" onClick={closeMenu}>
                  Ambulancia pre dospelých
                </Link>
              </li>
              <li>
                <Link href="/ados" className="block hover:bg-primary/90 p-2 rounded" onClick={closeMenu}>
                  Agentúra domácej ošetrovateľskej starostlivosti
                </Link>
              </li>
              <li>
                <Link href="/ambulantna-pohotovostna-sluzba-pre-deti-a-dorast" className="block hover:bg-primary/90 p-2 rounded" onClick={closeMenu}>
                  Ambulantná pohotovostná služba pre deti a dorast
                </Link>
              </li>
              <li>
                <Link href="/diabetologicka-ambulancia" className="block hover:bg-primary/90 p-2 rounded" onClick={closeMenu}>
                  Diabetologická ambulancia
                </Link>
              </li>
              <li>
                <Link href="/kardiologia-trnava" className="block hover:bg-primary/90 p-2 rounded" onClick={closeMenu}>
                  Kardiológická ambulancia
                </Link>
              </li>
              <li>
                <Link href="/mobilny-hospic" className="block hover:bg-primary/90 p-2 rounded" onClick={closeMenu}>
                  Mobilný hospic
                </Link>
              </li>
              <li>
                <Link href="/neurologicka-ambulancia-trnava-neurologia" className="block hover:bg-primary/90 p-2 rounded" onClick={closeMenu}>
                  Neurologická ambulancia
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/kurz-prvej-pomoci" className="hover:text-primary block" onClick={closeMenu}>
              Kurz prvej pomoci
            </Link>
          </li>
          <li>
            <Link href="/projekty" className="hover:text-primary block" onClick={closeMenu}>
              Projekty
            </Link>
          </li>
          <li>
            <Link href="/verejnost" className="hover:text-primary block" onClick={closeMenu}>
              Pre verejnosť
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}