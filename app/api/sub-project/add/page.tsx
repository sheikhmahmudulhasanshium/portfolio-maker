import ApiProvider from "@/components/providers/api-code-provider";
import { PackagePlus } from 'lucide-react';

const AddSubProjectPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="add-sub-project">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><PackagePlus /> <p>Add Sub-Project</p></div>}
                            link="/api/sub-project/add/"
                            description="This adds sub-project in sub-project database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default AddSubProjectPage;