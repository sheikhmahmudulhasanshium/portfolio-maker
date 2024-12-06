import ApiProvider from "@/components/providers/api-code-provider";
import { ListPlus } from 'lucide-react';

const AddFeaturePage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="add-feature">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><ListPlus /> <p>Add Feature</p></div>}
                            link="/api/feature/add/"
                            description="This adds feature in feature database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default AddFeaturePage;