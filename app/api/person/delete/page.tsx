import ApiProvider from "@/components/providers/api-code-provider";
import { UserRoundMinus } from 'lucide-react';

const DeletePersonPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="delete-person">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><UserRoundMinus /> <p>Remove Person</p></div>}
                            link="/api/person/delete/"
                            description="This removes person from person database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default DeletePersonPage;