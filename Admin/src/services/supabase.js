
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pawsnawtwiosanqixvam.supabase.co';
const supabaseKey =
  'sb_publishable_tcIafQ8sbSEllV-AZ4RmNA_0-D3GGFS';

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
