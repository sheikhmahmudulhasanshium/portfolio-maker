import BasicPageProvider from "@/components/providers/basic-page-provider";
import AddPersonPage from "../../person/add/page";
import AddProjectPage from "../../project/add/page";
import AddSubProjectPage from "../../sub-project/add/page";
import AddFeaturePage from "../../feature/add/page";

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