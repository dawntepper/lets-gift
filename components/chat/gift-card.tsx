"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import { GiftSuggestion } from "@/types/gift"

type GiftCardProps = {
  gift: GiftSuggestion
  isSelected: boolean
  onSelect: (id: string) => void
}

export function GiftCard({ gift, isSelected, onSelect }: GiftCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={gift.imageUrl} 
          alt={gift.name}
          className="object-cover w-full h-full"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm ${
            isSelected ? 'text-destructive' : ''
          }`}
          onClick={() => onSelect(gift.id)}
        >
          <Heart className="h-4 w-4" fill={isSelected ? "currentColor" : "none"} />
        </Button>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{gift.name}</h3>
          <Badge variant="secondary">${gift.price}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{gift.description}</p>
        <div className="pt-2">
          <Button variant="outline" className="w-full" asChild>
            <a href={gift.url} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}