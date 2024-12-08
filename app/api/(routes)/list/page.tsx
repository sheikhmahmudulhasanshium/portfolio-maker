import BasicPageProvider from "@/components/providers/basic-page-provider";
import ListSubProjectPage from "../../sub-project/list/page";
import ListFeaturePage from "../../feature/list/page";
import ListPersonPage from "./person";
import ListProjectPage from "./project";

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