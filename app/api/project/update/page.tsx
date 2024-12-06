import ApiProvider from "@/components/providers/api-code-provider";
import { PackageOpen } from 'lucide-react';

const UpdateProjectPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="update-project">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><PackageOpen /> <p>Update Project</p></div>}
                            link="/api/project/update/"
                            description="This updates info of project in project database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default UpdateProjectPage;