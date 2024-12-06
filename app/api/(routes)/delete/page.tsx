import BasicPageProvider from "@/components/providers/basic-page-provider";
import DeletePersonPage from "../../person/delete/page";
import DeleteProjectPage from "../../project/delete/page";
import DeleteSubProjectPage from "../../sub-project/delete/page";
import DeleteFeaturePage from "../../feature/delete/page";

const DeleteResourcePage = () => {
    
    return ( 
        <BasicPageProvider >
            <DeletePersonPage/>
            <DeleteProjectPage/>
            <DeleteSubProjectPage/>
            <DeleteFeaturePage/>
        </BasicPageProvider>     
    );
}
 
export default DeleteResourcePage;