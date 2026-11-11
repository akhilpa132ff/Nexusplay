import { createClient } from "https://esm.sh/@supabase/supabase-js@2.80.0";

const SUPABASE_URL = "https://kytumfmsvzvqjixcuqok.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3z083Wwx3Nef2lVac7f_sA_v6EZWueo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});