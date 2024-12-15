require('dotenv').config();

import { createClient } from '@supabase/supabase-js'

const url = process.env.DB_URL;
const key = process.env.DB_ANON_KEY;
export const supabase = createClient(url, key);