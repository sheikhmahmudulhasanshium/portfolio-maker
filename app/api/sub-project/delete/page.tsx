import ApiProvider from "@/components/providers/api-code-provider";
import { PackageMinus } from 'lucide-react';

const DeleteSubProjectPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="delete-sub-project">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><PackageMinus /> <p>Remove SubProject</p></div>}
                            link="/api/sub-project/delete/"
                            description="This removes sub-project from sub-project database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default DeleteSubProjectPage;