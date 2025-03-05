import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    
    if (name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      
      if (!response.ok) {
        return NextResponse.json({ error: "Pokémon not found" }, { status: 404 });
      }
      
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      
      if (!response.ok) {
        return NextResponse.json({ error: "Failed to fetch Pokémon list" }, { status: 500 });
      }
      
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}