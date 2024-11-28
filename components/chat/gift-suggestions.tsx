"use client"

import { useState } from "react"
import { ShoppingBag, PlusCircle } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { GiftCard } from "./gift-card"
import { GiftSuggestion } from "@/types/gift"

export function GiftSuggestions() {
  const [suggestions, setSuggestions] = useState<GiftSuggestion[]>([])
  const [selectedGifts, setSelectedGifts] = useState<string[]>([])

  const toggleGiftSelection = (giftId: string) => {
    setSelectedGifts(prev => 
      prev.includes(giftId) 
        ? prev.filter(id => id !== giftId)
        : [...prev, giftId]
    )
  }

  return (
    <div className="w-[400px] bg-card rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Gift Suggestions</h2>
        </div>
        {selectedGifts.length > 0 && (
          <Button size="sm" variant="outline" className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Save to List
          </Button>
        )}
      </div>
      
      <ScrollArea className="h-[calc(100vh-13rem)]">
        <div className="p-4 grid gap-4">
          {suggestions.map((gift) => (
            <GiftCard
              key={gift.id}
              gift={gift}
              isSelected={selectedGifts.includes(gift.id)}
              onSelect={toggleGiftSelection}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}