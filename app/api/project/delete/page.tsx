import ApiProvider from "@/components/providers/api-code-provider";
import { PackageMinus } from 'lucide-react';

const DeleteProjectPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="delete-project">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><PackageMinus /> <p>Remove Project</p></div>}
                            link="/api/project/delete/"
                            description="This removes project from project database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default DeleteProjectPage;