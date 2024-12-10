'use client'
import React from 'react';
import ApiProvider from "@/components/providers/api-code-provider";
import { UserRoundPlus } from 'lucide-react';
import { AddPersonForm } from '@/components/modals/add-person-form';
import CodeSnippet from '@/app/components/code-snippet';
import { useGetAllPersonInfo } from '@/components/hooks/person/get-all';

const AddPersonPage = () => {
  const {   personData,supabaseStatus, errorMessage} = useGetAllPersonInfo();
  //console.log(personData);
  const personCount=personData.length

  return (
    <div className="py-8 flex items-center justify-center" id="add-person">
      <ApiProvider
        providerName={
          <div className="flex gap-2 items-center">
            <UserRoundPlus /> <p>Add Person</p>
          </div>
        }
        link="/api/person/add/"
        description="This adds person in person database"
        custom_form={
          <AddPersonForm/>
        }
        additional={
          <div className="flex flex-col gap-2">
            <p className="text-xl">Example:</p>
            {(!supabaseStatus||errorMessage)&&<p className="text-red-500">{errorMessage}</p>}
            {!errorMessage&&<CodeSnippet data={personData} note={`// Showing Results: (${personCount}) ${personCount>1?'rows':'row'}`}/>}
                   </div>
        }
      />

      
    </div>
  );
};

export default AddPersonPage;
