import ApiProvider from "@/components/providers/api-code-provider";
import { UserRoundPlus } from 'lucide-react';

const AddPersonPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="add-person">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><UserRoundPlus /> <p>Add Person</p></div>}
                            link="/api/person/add/"
                            description="This adds person in person database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default AddPersonPage;