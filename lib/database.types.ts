export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      gift_lists: {
        Row: {
          id: string
          user_id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          created_at?: string
        }
      }
      saved_gifts: {
        Row: {
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
        Insert: {
          id?: string
          list_id: string
          name: string
          description: string
          price: number
          url: string
          image_url: string
          reason: string
          created_at?: string
        }
        Update: {
          id?: string
          list_id?: string
          name?: string
          description?: string
          price?: number
          url?: string
          image_url?: string
          reason?: string
          created_at?: string
        }
      }
      chat_history: {
        Row: {
          id: string
          user_id: string
          messages: Json[]
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          messages: Json[]
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          messages?: Json[]
          created_at?: string
        }
      }
    }
  }
}