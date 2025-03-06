"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableCard } from "@/src/components/sortable-card"
import { GripVertical, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/src/components/ui/badge"
import type { SortableDeckProps } from "@/types"

export function SortableDeck({ deck, returnCardToAvailable }: SortableDeckProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: deck.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Card ref={setNodeRef} style={style} className="relative bg-white border-0 shadow-lg overflow-hidden">
      <div className="absolute left-4 top-4 cursor-grab active:cursor-grabbing" {...attributes} {...listeners}>
        <GripVertical className="h-5 w-5 text-purple-400" />
      </div>

      <CardHeader className="pl-12 pb-3 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <CardTitle className="text-purple-800">{deck.name}</CardTitle>
          <Badge variant="outline" className="ml-2 bg-purple-100 text-purple-800 border-purple-200">
            {deck.cards.length} kaarten
          </Badge>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-full hover:bg-purple-100 transition-colors"
          type="button"
        >
          {isCollapsed ? (
            <ChevronDown className="h-5 w-5 text-purple-500" />
          ) : (
            <ChevronUp className="h-5 w-5 text-purple-500" />
          )}
        </button>
      </CardHeader>

      {!isCollapsed && (
        <CardContent>
          <div className="p-4 border rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 min-h-[150px]">
            {deck.cards.length === 0 ? (
              <p className="text-center text-purple-300 italic">Sleep kaarten naar dit deck</p>
            ) : (
              <SortableContext items={deck.cards.map((card) => card.id)} strategy={horizontalListSortingStrategy}>
                <div className="flex flex-wrap gap-3 overflow-x-auto pb-2">
                  {deck.cards.map((card) => (
                    <SortableCard
                      key={card.id}
                      id={card.id}
                      card={card}
                      deckId={deck.id}
                      onRemove={() => returnCardToAvailable(card.id, deck.id)}
                    />
                  ))}
                </div>
              </SortableContext>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  )
}

