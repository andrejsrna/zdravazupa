"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export default function Foto() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    {
      src: "/budova.jpg",
      alt: "Budova Psycho-sociálneho centra",
    },
    {
      src: "/psc-2.jpg", 
      alt: "Interiér čakárne",
    },
    {
      src: "/psc-3.jpg",
      alt: "Ambulancia psychológa", 
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl mb-16 transition-shadow">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Fotogaléria</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative h-48 sm:h-64 cursor-pointer"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full rounded-lg shadow-md hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images}
      />
    </section>
  );
}