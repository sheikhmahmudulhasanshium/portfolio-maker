import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    
  try {
    // Fetch data from Supabase
    const response = await axios.get('https://jfsoxcyoecckgglkiujv.supabase.co/rest/v1/person', {
      headers: {
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      params: {
        select: '*', // Fetch all records
      },
    });

    // Return the data as JSON
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Supabase:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Supabase' }, { status: 500 });
  }
}
