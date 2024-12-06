import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zdravá župa",
  description: "Zdravá župa, s. r. o.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Image 
                    src="/zzlogo.png"
                    alt="Logo Zdravá župa"
                    width={120}
                    height={60}
                  />
                </Link>
                <Link href="https://www.trnava-vuc.sk">
                  <Image 
                    src="/ttsklogo.png"
                    alt="Logo TTSK"
                    width={120}
                    height={60}
                  />
                </Link>
              </div>
              <MainMenu />
            </div>
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
