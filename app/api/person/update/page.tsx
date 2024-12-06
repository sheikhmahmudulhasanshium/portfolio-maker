import ApiProvider from "@/components/providers/api-code-provider";
import { UserRoundPen } from 'lucide-react';

const UpdatePersonPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="update-person">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><UserRoundPen /> <p>Update Person</p></div>}
                            link="/api/person/update/"
                            description="This updates info of person in person database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default UpdatePersonPage;