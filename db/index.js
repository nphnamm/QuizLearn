const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();


// Replace with your Supabase URL and anon key
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


module.exports = supabase;
