import ApiProvider from "@/components/providers/api-code-provider";
import { List } from "lucide-react";

const ListPersonPage = () => {
  

  return (
    <div className="py-8  flex items-center justify-center" id="list">
            <ApiProvider
                providerName={<div className="flex gap-2 items-center"><List/> <p>Person List</p></div>}
                link="/api/person/list/"
                description="This provides list of person in json format"
                additional="Additional information about this API could be long and detailed, explaining parameters and limits."
            />

    </div>
  );
};

export default ListPersonPage;
