import ApiProvider from "@/components/providers/api-code-provider";
import { PackageOpen } from 'lucide-react';

const UpdateSubProjectPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="update-sub-project">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><PackageOpen /> <p>Update Sub-Project</p></div>}
                            link="/api/sub-project/update/"
                            description="This updates info of sub-project in sub-project database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default UpdateSubProjectPage;