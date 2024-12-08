'use client';

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
        // Fetch data from your App Router API endpoint
        const response = await axios.get('/api/person/list/');

        // Set the data to state
        setPersonData(response.data || []);
        setSupabaseStatus('Data loaded from API');
      } catch (error: unknown) {
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
  }, []);

  return { personData, errorMessage, supabaseStatus };
}
