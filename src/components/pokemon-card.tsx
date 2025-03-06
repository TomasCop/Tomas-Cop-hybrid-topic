import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const typeColors = {
  Fire: {
    bg: "bg-gradient-to-br from-red-500 to-orange-500",
    text: "text-white",
    border: "border-red-400",
  },
  Water: {
    bg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    text: "text-white",
    border: "border-blue-400",
  },
  Grass: {
    bg: "bg-gradient-to-br from-green-500 to-emerald-500",
    text: "text-white",
    border: "border-green-400",
  },
  Electric: {
    bg: "bg-gradient-to-br from-yellow-400 to-amber-500",
    text: "text-gray-800",
    border: "border-yellow-400",
  },
  Psychic: {
    bg: "bg-gradient-to-br from-purple-500 to-fuchsia-500",
    text: "text-white",
    border: "border-purple-400",
  },
  Fighting: {
    bg: "bg-gradient-to-br from-orange-700 to-red-700",
    text: "text-white",
    border: "border-orange-600",
  },
  Fairy: {
    bg: "bg-gradient-to-br from-pink-400 to-rose-400",
    text: "text-white",
    border: "border-pink-300",
  },
  Normal: {
    bg: "bg-gradient-to-br from-gray-400 to-slate-400",
    text: "text-white",
    border: "border-gray-300",
  },
  Ghost: {
    bg: "bg-gradient-to-br from-indigo-700 to-violet-800",
    text: "text-white",
    border: "border-indigo-600",
  },
  Dark: {
    bg: "bg-gradient-to-br from-gray-800 to-gray-900",
    text: "text-white",
    border: "border-gray-700",
  },
  Steel: {
    bg: "bg-gradient-to-br from-gray-500 to-slate-600",
    text: "text-white",
    border: "border-gray-400",
  },
  Ice: {
    bg: "bg-gradient-to-br from-blue-300 to-cyan-300",
    text: "text-gray-800",
    border: "border-blue-200",
  },
  Dragon: {
    bg: "bg-gradient-to-br from-indigo-600 to-blue-700",
    text: "text-white",
    border: "border-indigo-500",
  },
  Poison: {
    bg: "bg-gradient-to-br from-purple-700 to-fuchsia-800",
    text: "text-white",
    border: "border-purple-600",
  },
  Ground: {
    bg: "bg-gradient-to-br from-amber-700 to-yellow-800",
    text: "text-white",
    border: "border-amber-600",
  },
  Rock: {
    bg: "bg-gradient-to-br from-amber-600 to-yellow-700",
    text: "text-white",
    border: "border-amber-500",
  },
  Bug: {
    bg: "bg-gradient-to-br from-lime-600 to-green-700",
    text: "text-white",
    border: "border-lime-500",
  },
  Flying: {
    bg: "bg-gradient-to-br from-sky-400 to-blue-500",
    text: "text-white",
    border: "border-sky-300",
  },
}

export function PokemonCard({ card }) {
  const typeStyle = typeColors[card.type] || {
    bg: "bg-gradient-to-br from-gray-500 to-gray-600",
    text: "text-white",
    border: "border-gray-400",
  }

  return (
    <div className="flex flex-col items-center rounded-lg overflow-hidden border shadow-sm">
      <div className="relative w-full h-20 mb-1 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
        <Image src={card.image || "/placeholder.svg"} alt={card.name} fill className="object-contain p-1" />
      </div>
      <div className="w-full bg-white p-1.5">
        <h3 className="text-xs font-bold truncate w-full text-center text-gray-800">{card.name}</h3>
        <div className="flex items-center justify-between w-full mt-1">
          <Badge className={`text-xs ${typeStyle.bg} ${typeStyle.text} border-0 px-1.5 py-0`}>{card.type}</Badge>
          <span className="text-xs font-medium bg-red-50 text-red-600 px-1 rounded">HP {card.hp}</span>
        </div>
      </div>
    </div>
  )
}

