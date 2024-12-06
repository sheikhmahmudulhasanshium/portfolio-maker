import BasicPageProvider from "@/components/providers/basic-page-provider";
import ListPersonPage from "../../person/list/page";
import ListProjectPage from "../../project/list/page";
import ListSubProjectPage from "../../sub-project/list/page";
import ListFeaturePage from "../../feature/list/page";

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