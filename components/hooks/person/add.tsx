import { Person } from '@/lib/types';
import { useState } from 'react';

export const useAddPersonInfo = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addPerson = async (personData: Person) => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/person/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personData),
      });

      if (response.ok) {
        setSuccessMessage('Person added successfully');
      } else {
        const error = await response.json();
        setErrorMessage(error?.message || 'Failed to add person');
      }
    } catch (error) {
      setErrorMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return { addPerson, loading, successMessage, errorMessage };
};
