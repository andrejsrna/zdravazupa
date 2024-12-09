import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekty | Zdravá župa",
  description: "Prehľad projektov realizovaných v rámci zdravotníckeho zariadenia Zdravá župa v Trnave, vrátane Psycho-sociálneho centra, ADOS a Mobilného hospicu.",
  openGraph: {
    title: "Projekty | Zdravá župa",
    description: "Prehľad projektov realizovaných v rámci zdravotníckeho zariadenia Zdravá župa v Trnave, vrátane Psycho-sociálneho centra, ADOS a Mobilného hospicu.",
    images: [
      {
        url: "/images/og-projekty.jpg",
        width: 1200,
        height: 630,
        alt: "Projekty Zdravej župy",
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 