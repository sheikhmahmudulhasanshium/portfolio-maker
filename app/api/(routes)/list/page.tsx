import BasicPageProvider from "@/components/providers/basic-page-provider";
import ListPersonPage from "./person";
import ListProjectPage from "./project";
import ListFeaturePage from "./feature";
import ListSubProjectPage from "./sub-project";

const ListResourcePage = () => {
    
    return ( 
        <BasicPageProvider >
            <ListPersonPage/>
            <ListProjectPage/>
            <ListSubProjectPage/>
            <ListFeaturePage/>
        </BasicPageProvider>     
    );
}
 
export default ListResourcePage;