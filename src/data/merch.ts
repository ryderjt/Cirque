export type MerchItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  url: string;
};

export const merch: MerchItem[] = [
  {
    id: "poster-01",
    name: "Fragments Poster",
    price: "$45",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description: "Limited edition giclée print on archival matte paper.",
    url: "https://cirque.works"
  },
  {
    id: "hoodie-01",
    name: "Basalt Hoodie",
    price: "$85",
    image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&w=1200&q=80",
    description: "Heavyweight fleece hoodie with embroidered crest.",
    url: "https://cirque.works"
  },
  {
    id: "tee-01",
    name: "Lantern Tee",
    price: "$48",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    description: "Super-soft organic cotton tee with metallic ink.",
    url: "https://cirque.works"
  },
  {
    id: "zine-01",
    name: "Afterimage Zine",
    price: "$32",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
    description: "60-page risograph zine featuring stills and essays.",
    url: "https://cirque.works"
  }
];
