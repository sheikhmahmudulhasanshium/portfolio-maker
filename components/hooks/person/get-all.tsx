import { useState, useEffect } from 'react';
import axios from 'axios';
import { Person } from '@/lib/types';

export function useGetAllPersonInfo() {
  const [personData, setPersonData] = useState<Person[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [supabaseStatus, setSupabaseStatus] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using Axios to call Supabase REST API endpoint
        const response = await axios.get('https://jfsoxcyoecckgglkiujv.supabase.co/rest/v1/person', {
          headers: {
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, // Replace with your actual Supabase anon key
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`, // Replace with your actual Supabase anon key
            'Content-Type': 'application/json',
          },
          params: {
            select: '*' // Equivalent of `.select('*')` in Supabase
          }
        });

        // Setting the data to state
        setPersonData(response.data || []);
        setSupabaseStatus('Data loaded from Supabase');
      } catch (error: unknown) {
        // Type assertion for the error
        if (error instanceof Error) {
          setSupabaseStatus('Error loading data');
          setErrorMessage(error.message || 'Unknown error');
        } else {
          setSupabaseStatus('Error loading data');
          setErrorMessage('Unknown error');
        }
      }
    };

    fetchData();
  }, []);  // Empty dependency array ensures it runs once on mount

  return { personData, errorMessage, supabaseStatus };
}
