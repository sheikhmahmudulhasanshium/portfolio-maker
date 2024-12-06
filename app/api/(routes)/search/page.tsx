import BasicPageProvider from "@/components/providers/basic-page-provider";
import SearchPersonPage from "../../person/search/page";
import SearchProjectPage from "../../project/search/page";
import SearchSubProjectPage from "../../sub-project/search/page";
import SearchFeaturePage from "../../feature/search/page";

const SearchResourcePage = () => {
    
    return ( 
        <BasicPageProvider >
            <SearchPersonPage/>
            <SearchProjectPage/>
            <SearchSubProjectPage/>
            <SearchFeaturePage/>
        </BasicPageProvider>     
    );
}
 
export default SearchResourcePage;