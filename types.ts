export interface PokemonCardType {
  id: string
  name: string
  type: string
  hp: number
  image: string
}

export interface DeckType {
  id: string
  name: string
  cards: PokemonCardType[]
}

export interface SortableCardProps {
  id: string
  card: PokemonCardType
  deckId?: string
  onRemove?: () => void
}

export interface SortableDeckProps {
  deck: DeckType
  returnCardToAvailable: (cardId: string, deckId: string) => void
}

export interface PokemonCardProps {
  card: PokemonCardType
}

