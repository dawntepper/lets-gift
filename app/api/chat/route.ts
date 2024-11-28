import OpenAI from 'openai'
import { NextResponse } from 'next/server'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const SYSTEM_PROMPT = `You are a helpful and friendly gift advisor. Your goal is to help users find the perfect gifts for their loved ones. 

When suggesting gifts:
- Ask clarifying questions about the recipient's interests, age, and preferences
- Consider the user's budget
- Provide thoughtful explanations for why each gift would be suitable
- Be conversational and empathetic
- If the user's request is unclear, ask for more details

Keep responses concise but warm and helpful.`

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OpenAI API key is not configured' },
      { status: 500 }
    )
  }

  try {
    const { messages } = await req.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ]
    })

    return NextResponse.json({
      content: completion.choices[0].message.content
    })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}