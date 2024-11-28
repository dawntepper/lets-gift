"use client"

import { useState } from "react"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { ChatHeader } from "./chat-header"
import { generateGiftSuggestions } from "@/lib/openai"
import { useToast } from "@/components/ui/use-toast"

const WELCOME_MESSAGE = {
  role: 'assistant' as const,
  content: "👋 Hi! I'm your Gift Advisor, and I'm here to help you find the perfect gift! Tell me about who you're shopping for - their interests, hobbies, or what makes them unique. Don't forget to mention your budget if you have one in mind. The more details you share, the better I can help!"
}

export function ChatContainer() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([WELCOME_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    const userMessage = { role: 'user' as const, content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")

    try {
      const aiResponse = await generateGiftSuggestions([...messages, userMessage])
      const aiMessage = { role: 'assistant' as const, content: aiResponse }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error processing message:', error)
      toast({
        title: "Error",
        description: "Failed to process your message. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-card rounded-lg shadow-lg overflow-hidden">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput 
        input={input} 
        setInput={setInput} 
        onSubmit={handleSubmit}
        isLoading={isLoading} 
      />
    </div>
  )
}