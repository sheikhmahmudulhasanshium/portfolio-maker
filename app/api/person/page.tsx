import BasicPageProvider from "@/components/providers/basic-page-provider";
import PersonBody from "./body";
const PersonPage = () => {
    return (
        <BasicPageProvider >
            <PersonBody/>
        </BasicPageProvider>
     );
}
 
export default PersonPage;