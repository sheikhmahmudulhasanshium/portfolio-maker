import ApiProvider from "@/components/providers/api-code-provider";
import { ListMinus } from 'lucide-react';

const DeleteFeaturePage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="delete-feature">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><ListMinus /> <p>Remove Feature</p></div>}
                            link="/api/feature/delete/"
                            description="This removes feature from feature database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default DeleteFeaturePage;