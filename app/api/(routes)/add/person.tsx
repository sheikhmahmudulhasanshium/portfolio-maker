'use client';
import React, { useState, useEffect } from 'react';
import ApiProvider from '@/components/providers/api-code-provider';
import { UserRoundPlus } from 'lucide-react';
import { AddPersonForm } from '@/components/modals/add-person-form';
import { useSearchParams } from 'next/navigation';

const AddPersonPage = () => {
  const [dynamicLink, setDynamicLink] = useState('/api/person/add?');
  const searchParams = useSearchParams();

  // Function to update the link dynamically
  const updateLink = (formData: Record<string, string>) => {
    const query = new URLSearchParams(formData).toString();
    setDynamicLink(`/api/person/add?${query}`);
  };

  // Effect to parse URL query params and update the link initially
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const queryObject: Record<string, string> = {};
    params.forEach((value, key) => {
      queryObject[key] = value;
    });

    // Update the link with existing URL parameters
    if (Object.keys(queryObject).length > 0) {
      updateLink(queryObject);
    }
  }, [searchParams]);

  return (
    <div className="py-8 flex items-center justify-center" id="add-person">
      <ApiProvider
        providerName={
          <div className="flex gap-2 items-center">
            <UserRoundPlus /> <p>Add Person</p>
          </div>
        }
        link={dynamicLink} // Dynamic link passed here
        description="This adds person to the person database"
        custom_form={
          <AddPersonForm updateLink={updateLink} /> // Pass `updateLink` to the form
        }
      />
    </div>
  );
};

export default AddPersonPage;
