"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent } from "@/src/components/ui/card"
import { PokemonCard } from "@/src/components/pokemon-card"
import { X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import type { SortableCardProps } from "@/types"
import type { MouseEvent } from "react"

export function SortableCard({ id, card, deckId, onRemove }: SortableCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
    data: {
      type: "card",
      card,
      deckId,
    },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 1,
  }

  const handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onRemove) {
      onRemove()
    }
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className="w-[130px] cursor-grab active:cursor-grabbing relative group hover:shadow-xl transition-all duration-200 border-0 shadow-md"
    >
      <CardContent className="p-2" {...attributes} {...listeners}>
        <PokemonCard card={card} />

        {deckId && onRemove && (
          <Button
            variant="destructive"
            size="icon"
            className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            onClick={handleRemove}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

