
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pawsnawtwiosanqixvam.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhd3NuYXd0d2lvc2FucWl4dmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMjc5MDksImV4cCI6MjA3ODcwMzkwOX0.OslbzmDDoiOroHs9O4Z0f_A-fMIom3RNFxEwFmk9jwc';

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
