import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pryqprogeorulnaqvert.supabase.co'; // Replace with your actual Supabase URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeXFwcm9nZW9ydWxuYXF2ZXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NTk0MjQsImV4cCI6MjA1MzEzNTQyNH0.BJROWhLu3vmuTrQrx74waXINYzIbEfhyT-KPmuTR7t4'; // Replace with your actual Supabase key

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
