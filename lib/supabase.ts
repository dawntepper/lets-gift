import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type GiftList = {
  id: string
  user_id: string
  name: string
  created_at: string
}

export type SavedGift = {
  id: string
  list_id: string
  name: string
  description: string
  price: number
  url: string
  image_url: string
  reason: string
  created_at: string
}