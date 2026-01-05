import { createClient } from "@supabase/supabase-js"

let supabaseClient: any = null

export function getSupabaseClient() {
  if (supabaseClient) return supabaseClient

  supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return supabaseClient
}
