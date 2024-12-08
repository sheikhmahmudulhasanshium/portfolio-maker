'use client'
import CodeSnippet from "@/app/components/code-snippet";
import { useGetAllProjectInfo } from "@/components/hooks/project/get-all";
import ApiProvider from "@/components/providers/api-code-provider";
import { List } from "lucide-react";

const ListProjectPage = () => {
  const {   projectData, supabaseStatus, errorMessage } = useGetAllProjectInfo();
  //console.log(projectData);
  const projectCount=projectData.length
  return (
    <div className="py-8 flex items-center justify-center" id="list">
      <ApiProvider
        providerName={<div className="flex gap-2 items-center"><List /> <p>Project List</p></div>}
        link="/api/project/list/"
        description="This provides list of project in json format"
        additional={
          <div className="flex flex-col gap-2">
            <p className="text-xl">Example:</p>
            {(!supabaseStatus||errorMessage)&&<p className="text-red-500">{errorMessage}</p>}
            {!errorMessage&&<CodeSnippet data={projectData} note={`// Showing Results: (${projectCount}) ${projectCount>1?'rows':'row'}`}/>}          </div>}
      />
    </div>
  );
};

export default ListProjectPage;
