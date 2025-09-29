export async function fetchPokemons(page = 1, limit = 10) {
  const res = await fetch(`http://127.0.0.1:8000/api/pokemons?page=${page}&limit=${limit}`);
  return res.json();
}
