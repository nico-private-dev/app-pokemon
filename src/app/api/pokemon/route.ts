import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pokemonName = searchParams.get('name');

  if (!pokemonName) {
    return NextResponse.json({ error: 'Name parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      return NextResponse.json({ error: 'Pokémon not found' }, { status: 404 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}