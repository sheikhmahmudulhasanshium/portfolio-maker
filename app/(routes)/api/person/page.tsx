import BasicPageProvider from "@/components/providers/basic-page-provider";
import ReadRows from "./read-rows/page";
import Filtering from "./filtering/page";
import InsertRows from "./insert-rows/page";
import UpdateRows from "./update-rows/page";
import DeleteRows from "./delete-rows/page";

const Person = () => {
    return ( 
        <BasicPageProvider >
            <ReadRows/>
            <Filtering/>
            <InsertRows/>
            <UpdateRows/>
            <DeleteRows/>
        </BasicPageProvider>
     );
}
 
export default Person;