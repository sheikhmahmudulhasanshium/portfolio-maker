import ApiProvider from "@/components/providers/api-code-provider";
import { UserRoundSearch } from 'lucide-react';

const SearchPersonPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="search-person">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><UserRoundSearch /> <p>Search Person</p></div>}
                            link="/api/person/search/"
                            description="This searches person from person database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default SearchPersonPage;