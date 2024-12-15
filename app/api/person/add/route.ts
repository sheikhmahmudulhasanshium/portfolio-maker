import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

interface PersonPayload {
  full_name: string | null;
  nick_name: string | null;
  phone: string | null;
  email: string | null;
  designation?: string | null;
  work_description?: string | null;
}

export async function POST(request: Request) {
  try {
    const data: PersonPayload = await request.json();

    const { full_name, nick_name, phone, email } = data;
    if (!full_name || !nick_name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: full_name, nick_name, phone, or email' },
        { status: 400 }
      );
    }

    const payload = {
      id: uuidv4(),
      ...data,
      created_at: new Date().toISOString(),
    };

    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const response = await fetch(`${SUPABASE_URL}/rest/v1/person`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY ?? '',
        Authorization: `Bearer ${SUPABASE_ANON_KEY ?? ''}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.message || 'Failed to add person' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Person added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error adding person:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const full_name = url.searchParams.get('full_name');
    const nick_name = url.searchParams.get('nick_name');
    const phone = url.searchParams.get('phone');
    const email = url.searchParams.get('email');

    if (!full_name || !nick_name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required query parameters: full_name, nick_name, phone, or email' },
        { status: 400 }
      );
    }

    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const response = await fetch(`${SUPABASE_URL}/rest/v1/person?full_name=eq.${full_name}&nick_name=eq.${nick_name}&phone=eq.${phone}&email=eq.${email}`, {
      method: 'GET',
      headers: {
        apikey: SUPABASE_ANON_KEY ?? '',
        Authorization: `Bearer ${SUPABASE_ANON_KEY ?? ''}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.message || 'Failed to fetch person' }, { status: response.status });
    }

    const person = await response.json();
    return NextResponse.json(person, { status: 200 });
  } catch (error) {
    console.error('Unexpected error fetching person:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
