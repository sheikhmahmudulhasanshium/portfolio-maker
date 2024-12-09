'use client'
import CodeSnippet from "@/app/components/code-snippet";
import { useGetAllSubProjectInfo } from "@/components/hooks/sub-project/get-all";
import ApiProvider from "@/components/providers/api-code-provider";
import { List } from "lucide-react";

const ListSubProjectPage = () => {
  const {   subprojectData, supabaseStatus, errorMessage } = useGetAllSubProjectInfo();
  //console.log(projectData);
  const subprojectCount=subprojectData.length
  return (
    <div className="py-8 flex items-center justify-center" id="list">
      <ApiProvider
        providerName={<div className="flex gap-2 items-center"><List /> <p>Sub-Project List</p></div>}
        link="/api/sub-project/list/"
        description="This provides list of sub-project in json format"
        additional={
          <div className="flex flex-col gap-2">
            <p className="text-xl">Example:</p>
            {(!supabaseStatus||errorMessage)&&<p className="text-red-500">{errorMessage}</p>}
            {!errorMessage&&<CodeSnippet data={subprojectData} note={`// Showing Results: (${subprojectCount}) ${subprojectCount>1?'rows':'row'}`}/>}          </div>}
      />
    </div>
  );
};

export default ListSubProjectPage;
