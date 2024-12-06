import BasicPageProvider from "@/components/providers/basic-page-provider";
import UpdatePersonPage from "../../person/update/page";
import UpdateFeaturePage from "../../feature/update/page";
import UpdateProjectPage from "../../project/update/page";
import UpdateSubProjectPage from "../../sub-project/update/page";

const UpdateResourcePage = () => {
    
    return ( 
        <BasicPageProvider >
            <UpdatePersonPage/>
            <UpdateProjectPage/>
            <UpdateSubProjectPage/>
            <UpdateFeaturePage/>
        </BasicPageProvider>     
    );
}
 
export default UpdateResourcePage;