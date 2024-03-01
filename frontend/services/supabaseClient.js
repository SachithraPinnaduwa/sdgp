
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://khphpzkadjqzekugihph.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtocGhwemthZGpxemVrdWdpaHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5MjI3ODYsImV4cCI6MjAyNDQ5ODc4Nn0.emn97sOzVh32Mqnoqit9G8OGlDrIWM1XpXv-tk0IvVM"
export const supabase = createClient(supabaseUrl, supabaseKey)