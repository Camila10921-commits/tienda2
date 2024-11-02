const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function fetchPokemons(limit = 20) {
  const response = await fetch(`${BASE_URL}?limit=${limit}`);
  const data = await response.json();
  return data.results; // Devuelve solo la lista de Pokémon
}

export async function fetchPokemonDetails(name) {
  const response = await fetch(`${BASE_URL}/${name}`);
  return response.json(); // Devuelve detalles del Pokémon
}
