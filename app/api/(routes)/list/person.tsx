'use client'
import CodeSnippet from "@/app/components/code-snippet";
import { useGetAllPersonInfo } from "@/components/hooks/person/get-all";
import ApiProvider from "@/components/providers/api-code-provider";
import { List } from "lucide-react";

const ListPersonPage = () => {
  const {   personData,supabaseStatus, errorMessage} = useGetAllPersonInfo();
  //console.log(personData);
  const personCount=personData.length
  return (
    <div className="py-8 flex items-center justify-center" id="list">
      <ApiProvider
        providerName={<div className="flex gap-2 items-center"><List /> <p>Person List</p></div>}
        link="/api/person/list/"
        description="This provides list of person in json format"
        additional={
          <div className="flex flex-col gap-2">
            <p className="text-xl">Example:</p>
            {(!supabaseStatus||errorMessage)&&<p className="text-red-500">{errorMessage}</p>}
            {!errorMessage&&<CodeSnippet data={personData} note={`// Showing Results: (${personCount}) ${personCount>1?'rows':'row'}`}/>}
          </div>}
      />
    </div>
  );
};

export default ListPersonPage;
