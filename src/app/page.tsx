import PokemonDeckBuilder from "@/components/pokemon-deck-builder"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Pokémon Deck Builder
        </h1>
        <p className="text-center text-gray-600 mb-8">Sleep kaarten naar je decks en organiseer je collectie</p>
        <PokemonDeckBuilder />
      </div>
    </main>
  )
}

