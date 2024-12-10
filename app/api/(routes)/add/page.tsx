import BasicPageProvider from "@/components/providers/basic-page-provider";
import AddProjectPage from "../../project/add/page";
import AddSubProjectPage from "../../sub-project/add/page";
import AddFeaturePage from "../../feature/add/page";
import AddPersonPage from "./person";

const AddResourcePage = () => {
    
    return ( 
        <BasicPageProvider >
            <AddPersonPage/>
            <AddProjectPage/>
            <AddSubProjectPage/>
            <AddFeaturePage/>
        </BasicPageProvider>     
    );
}
 
export default AddResourcePage;