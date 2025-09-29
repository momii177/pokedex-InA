A Pokédex application built with Laravel and Next.js.
The backend fetches and aggregates Pokémon data from PokeAPI, while the frontend displays it in a scrollable layout with Pokémon filter (name) search bar and banners.

See https://pokeapi.co/docs/v2 for Poke API integratation

Project Structure:-
Backend: Laravel
Frontend: Next JS

Prerequisites
Make sure you have installed:
PHP >= 8.2 (for Laravel 12)
Composer >= 2.8.11 (for PHP dependencies)
Node.js >= npm 11.4.2 (for Next.js)
Git (to clone repository)

Backend Installation Guide:
# Go into backend folder
cd backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run local server
php artisan serve

# Endpoint API
GET http://127.0.0.1:8000/api/pokemons?page=1&limit=10
Feedback Sample:
[
  {
    "name": "ivysaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "types": ["grass", "poison"],
    "height": 10,
    "weight": 130
  }
]


Frontend Installtion Guide:
# Go into frontend folder
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
