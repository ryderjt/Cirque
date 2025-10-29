/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        glacial: "#E2D5C3",
        basalt: "#1A1A1A",
        tarn: "#C8A86E",
        slate: "#7B8A92",
        lichen: "#6D7E6C"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      backgroundImage: {
        grain: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WAcAAn8B9JWGTHwAAAAASUVORK5CYII=')"
      }
    }
  },
  plugins: []
};
