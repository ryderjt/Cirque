export type Film = {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  year: string;
};

export const films: Film[] = [
  {
    title: "Fragments of Dawn",
    description: "Meditations on light, memory, and the forgotten avant-garde.",
    thumbnail: "https://images.unsplash.com/photo-1526481280695-3c469928cfeb?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    year: "2024"
  },
  {
    title: "The Weight of Marble",
    description: "A journey through sculpted histories and the philosophy of permanence.",
    thumbnail: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    year: "2023"
  },
  {
    title: "Lanterns in the Fog",
    description: "Tracing collective memory through mist and shoreline rituals.",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    year: "2023"
  },
  {
    title: "Afterimage",
    description: "Analogue recollections and the persistence of vision.",
    thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    year: "2022"
  }
];
