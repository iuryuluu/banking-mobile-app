import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const SUPABASE_URL = 'https://hlqubwiqnbqmfvjbdbtw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscXVid2lxbmJxbWZ2amJkYnR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNDgwOTUsImV4cCI6MjA3OTkyNDA5NX0.V8XMRx3sFtgKQbFt1zvrAzNt_jAX5mlT-RzcRxYw6N4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY); 