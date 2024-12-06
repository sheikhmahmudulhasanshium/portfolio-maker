import ApiProvider from "@/components/providers/api-code-provider";
import { TextSearch } from 'lucide-react';

const SearchFeaturePage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="search-feature">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><TextSearch /> <p>Search Feature</p></div>}
                            link="/api/feature/search/"
                            description="This searches feature from feature database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default SearchFeaturePage;