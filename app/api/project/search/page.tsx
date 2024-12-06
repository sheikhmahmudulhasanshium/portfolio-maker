import ApiProvider from "@/components/providers/api-code-provider";
import { PackageSearch } from 'lucide-react';

const SearchProjectPage = () => {
    return ( 
            <div className="py-8  flex items-center justify-center" id="search-project">
                        <ApiProvider
                            providerName={<div className="flex gap-2 items-center"><PackageSearch /> <p>Search Project</p></div>}
                            link="/api/project/search/"
                            description="This searches project from project database "
                            additional="Additional information about this API could be long and detailed, explaining parameters and limits."
                        />

            </div>     
    );
}
 
export default SearchProjectPage;