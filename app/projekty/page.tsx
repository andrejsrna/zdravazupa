"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Projekty() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    { src: "/psc.jpeg", alt: "Psycho-sociálne centrum" },
    { src: "/ados.jpeg", alt: "ADOS Zdravá župa Trnava" },
    { src: "/moho.jpeg", alt: "Mobilný hospic Zdravá župa Trnava" },
    { src: "/posil.png", alt: "Národný projekt Ministerstva zdravotníctva SR" }
  ];

  const openImageLightbox = (index: number) => {
    setLightboxIndex(index);
    setOpenLightbox(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projekty</h1>

        <div className="grid gap-12 max-w-6xl mx-auto">
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                  Psycho-sociálne centrum v Trnave
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Vybudovaním psycho-sociálnych centier sa vytvorí moderná 12I03-21-V16-00012 a dostupná starostlivosť o duševné zdravie, ktorá stavia na silnej medzirezortnej spolupráci. Špecificky je potrebné zmodernizovať systém psychiatrickej a psychologickej zdravotno-sociálnej starostlivosti, posilniť podporu duševného zdravia a prevenciu vzniku porúch, posilniť zdravotno-sociálnu starostlivosť a zvýšiť jej dostupnosť.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/psc.pdf">
                      Zobraziť viac
                    </Link>
                  </Button>
                  <Link 
                    href="https://www.health.gov.sk/Clanok?plan-obnovy" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Health.gov.sk - Plán obnovy a odolnosti
                  </Link>
                </div>
              </div>
              <div 
                className="relative aspect-[4/3] w-full rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow" 
                onClick={() => openImageLightbox(0)}
              >
                <Image 
                  src="/psc.jpeg" 
                  alt="Psycho-sociálne centrum" 
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                  ADOS Zdravá župa Trnava
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Agentúra domácej ošetrovateľskej starostlivosti (ADOS) je moderné zdravotnícke zariadenie ambulantného typu. Poskytuje komplexnú ošetrovateľskú starostlivosť o pacienta v jeho prirodzenom sociálnom prostredí.
                </p>
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/ados.pdf">
                    Zobraziť viac
                  </Link>
                </Button>
                <Link 
                    href="https://www.health.gov.sk/Clanok?plan-obnovy" 
                    className="block pt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Health.gov.sk - Plán obnovy a odolnosti
                  </Link>
              </div>
              <div 
                className="relative aspect-[4/3] w-full rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow" 
                onClick={() => openImageLightbox(1)}
              >
                <Image 
                  src="/ados.jpg" 
                  alt="ADOS Zdravá župa Trnava" 
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                  Mobilný hospic Zdravá župa Trnava
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Mobilný hospic je zdravotnícke zariadenie, ktoré poskytuje paliatívnu starostlivosť pacientom s nevyliečiteľným ochorením v terminálnom štádiu v ich domácom prostredí.
                </p>
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/moho.pdf">
                    Zobraziť viac
                  </Link>
                </Button>
                <Link 
                    href="https://www.health.gov.sk/Clanok?plan-obnovy" 
                    className="block pt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Health.gov.sk - Plán obnovy a odolnosti
                  </Link>
              </div>
              <div 
                className="relative aspect-[4/3] w-full rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow" 
                onClick={() => openImageLightbox(2)}
              >
                <Image 
                  src="/moho.jpeg" 
                  alt="Mobilný hospic Zdravá župa Trnava" 
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                Národný projekt Ministerstva zdravotníctva SR
              </h2>
              <div className="relative w-full max-w-2xl h-[100px] mb-6">
                <Image 
                  src="/posil.png" 
                  alt="Národný projekt Ministerstva zdravotníctva SR" 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mb-6 text-muted-foreground max-w-2xl">
                Posilnenie a dobudovanie siete mobilných odberových miest.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <Link href="https://www.health.gov.sk/?Vyzva-Posilnenie-dlhodobej-zdravotnej-starostlivosti">
                  Zobraziť viac
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        index={lightboxIndex}
        slides={images}
      />
    </div>
  );
}
