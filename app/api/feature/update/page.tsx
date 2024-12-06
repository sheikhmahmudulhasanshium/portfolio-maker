import ApiProvider from "@/components/providers/api-code-provider";
import { ListFilter } from 'lucide-react';

const UpdateFeaturePage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="update-feature">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><ListFilter /> <p>Update Feature</p></div>}
                            link="/api/feature/update/"
                            description="This updates info of feature in feature database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default UpdateFeaturePage;