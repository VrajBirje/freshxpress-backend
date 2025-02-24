// config/db.js
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://yngeytacikdqtyumcfnc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluZ2V5dGFjaWtkcXR5dW1jZm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyOTE3MzUsImV4cCI6MjA1NTg2NzczNX0.nDgzTQ8dZB7ixeT-C1zOe8F_4rb8FHPmp8ZktTUgvBI";
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("✅ Supabase Connected Successfully!", supabase);

module.exports = supabase;