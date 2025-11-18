import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sheroeacjbsubbuylbql.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZXJvZWFjamJzdWJidXlsYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3ODY3ODYsImV4cCI6MjA3ODM2Mjc4Nn0.1M-oQN6WrLu_lrefmTvgaZhWspGAx-OzVEFIUOnSyjE";

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
