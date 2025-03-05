/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-normal',
    'bg-fire',
    'bg-water',
    'bg-electric',
    'bg-grass',
    'bg-ice',
    'bg-fighting',
    'bg-poison',
    'bg-ground',
    'bg-flying',
    'bg-psychic',
    'bg-bug',
    'bg-rock',
    'bg-ghost',
    'bg-dragon',
    'bg-dark',
    'bg-steel',
    'bg-fairy'
  ],
  theme: {
    extend: {
      colors: {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        electric: '#F8D030',
        grass: '#A7B723',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC'
      },
    },
  },
  plugins: [],
}