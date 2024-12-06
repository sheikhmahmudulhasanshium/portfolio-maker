import ApiProvider from "@/components/providers/api-code-provider";
import { List } from "lucide-react";

const ListFeaturePage = () => {
  

  return (
    <div className="py-8  flex items-center justify-center" id="list">
            <ApiProvider
                providerName={<div className="flex gap-2 items-center"><List/> <p>Feature List</p></div>}
                link="/api/feature/list/"
                description="This provides list of feature in json format"
                additional="Additional information about this API could be long and detailed, explaining parameters and limits."
            />

    </div>
  );
};

export default ListFeaturePage;
