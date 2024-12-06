import ApiProvider from "@/components/providers/api-code-provider";
import { PackagePlus } from 'lucide-react';

const AddProjectPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="add-project">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><PackagePlus /> <p>Add Project</p></div>}
                            link="/api/project/add/"
                            description="This adds project in project database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default AddProjectPage;