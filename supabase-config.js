const SUPABASE_URL = 'https://nykcrckrxunkrerjxczi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_sWqzLrWLF1d1_rSs-eLleA_ZApJzkHx';

// ตั้งชื่อ sb เพื่อไม่ให้ชนกับตัวแปร supabase ของไลบรารี
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);