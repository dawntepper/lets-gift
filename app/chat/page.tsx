"use client"

import { ChatContainer } from "@/components/chat/chat-container"
import { GiftSuggestions } from "@/components/chat/gift-suggestions"

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] gap-4">
      <ChatContainer />
      <GiftSuggestions />
    </div>
  )
}