import { NextResponse } from 'next/server';

// Load Supabase environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const data = await request.json();

    // Destructure and validate required fields
    const { full_name, nick_name, phone, email, designation, work_description } = data;
    if (!full_name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: full_name, phone, or email' },
        { status: 400 }
      );
    }

    // Prepare the payload for Supabase
    const payload = {
      full_name,
      nick_name,
      phone,
      email,
      designation: designation || null,
      work_description: work_description || null,
      created_at: new Date().toISOString(),
    };

    // Log payload and URL for debugging
    console.log('Payload:', payload);
    console.log('Supabase URL:', SUPABASE_URL);

    // Make the API request to Supabase
    const response = await fetch(`${SUPABASE_URL}/rest/v1/person`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY ?? '',
        Authorization: `Bearer ${SUPABASE_ANON_KEY ?? ''}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal', // Optional: Minimize the response
      },
      body: JSON.stringify(payload),
    });

    // Handle the response
    if (!response.ok) {
      const error = await response.json();
      console.error('Error from Supabase:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to add person' },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'Person added successfully' }, { status: 200 });
  } catch (error) {
    // Catch unexpected errors
    console.error('Unexpected error adding person:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
