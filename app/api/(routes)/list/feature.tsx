'use client'
import CodeSnippet from "@/app/components/code-snippet";
import { useGetAllFeatureInfo } from "@/components/hooks/feature/get-all";
import ApiProvider from "@/components/providers/api-code-provider";
import { List } from "lucide-react";

const ListFeaturePage = () => {
  const {   featureData, supabaseStatus, errorMessage } = useGetAllFeatureInfo();
  //console.log(featureData);
  const featureCount=featureData.length
  return (
    <div className="py-8 flex items-center justify-center" id="list">
      <ApiProvider
        providerName={<div className="flex gap-2 items-center"><List /> <p>Feature List</p></div>}
        link="/api/feature/list/"
        description="This provides list of feature in json format"
        additional={
          <div className="flex flex-col gap-2">
            <p className="text-xl">Example:</p>
            {(!supabaseStatus||errorMessage)&&<p className="text-red-500">{errorMessage}</p>}
            {!errorMessage&&<CodeSnippet data={featureData} note={`// Showing Results: (${featureCount}) ${featureCount>1?'rows':'row'}`}/>}          </div>}
      />
    </div>
  );
};

export default ListFeaturePage;
