const { createClient }  = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseClient = createClient(process.env.SB_PROJECT_URL, process.env.SB_API_KEY )

module.exports = supabaseClient;