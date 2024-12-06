import ApiProvider from "@/components/providers/api-code-provider";
import { List } from "lucide-react";

const ListSubProjectPage = () => {
  

  return (
    <div className="py-8  flex items-center justify-center" id="list">
            <ApiProvider
                providerName={<div className="flex gap-2 items-center"><List/> <p>Sub-Project List</p></div>}
                link="/api/sub-project/list/"
                description="This provides list of sub-project in json format"
                additional="Additional information about this API could be long and detailed, explaining parameters and limits."
            />

    </div>
  );
};

export default ListSubProjectPage;
