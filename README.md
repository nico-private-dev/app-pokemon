# FILE: README.MD CONTENTS
This is a Next.js project for searching and displaying Pokémon using the PokeAPI.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd app-pokemon
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- **src/app/api/pokemon/route.ts**: Handles API requests to fetch Pokémon data from the PokeAPI.
- **src/app/globals.css**: Contains global CSS styles for the application.
- **src/app/layout.tsx**: Defines the root layout of the application.
- **src/app/page.tsx**: Main entry point for the application, rendering the home page.
- **src/app/pokemon/[name]/page.tsx**: Handles dynamic routing for individual Pokémon pages.
- **src/app/pokemon/page.tsx**: Renders a list of Pokémon or a search interface.
- **src/components/PokemonCard.tsx**: Displays individual Pokémon cards.
- **src/components/PokemonList.tsx**: Displays a list of Pokémon using the PokemonCard component.
- **src/components/SearchForm.tsx**: Allows users to input a Pokémon name for searching.
- **src/lib/pokemon.ts**: Contains utility functions for interacting with the PokeAPI.
- **src/types/index.ts**: Defines TypeScript types and interfaces for Pokémon data structures.

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [PokeAPI Documentation](https://pokeapi.co/docs/v2) - Explore the PokeAPI for Pokémon data.

## Deploy on Vercel

For deployment, you can use the [Vercel Platform](https://vercel.com) to easily deploy your Next.js app. Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.