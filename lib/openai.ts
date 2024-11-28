import { GiftSuggestion } from '@/types/gift'

export async function generateGiftSuggestions(
  messages: Array<{ role: 'user' | 'assistant', content: string }>
): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      throw new Error('Failed to generate response')
    }

    const data = await response.json()
    return data.content
  } catch (error) {
    console.error('Error generating gift suggestions:', error)
    return "I apologize, but I'm having trouble processing your request right now. Please try again in a moment."
  }
}