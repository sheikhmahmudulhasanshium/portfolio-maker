import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//console.log(supabaseUrl)
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key is missing from environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
