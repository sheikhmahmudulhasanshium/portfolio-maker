import ApiProvider from "@/components/providers/api-code-provider";
import { PackageSearch } from 'lucide-react';

const SearchSubProjectPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="search-project">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><PackageSearch /> <p>Search Sub-Project</p></div>}
                            link="/api/sub-project/search/"
                            description="This searches sub-project from project database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default SearchSubProjectPage;