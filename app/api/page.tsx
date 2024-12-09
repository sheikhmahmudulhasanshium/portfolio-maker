import BasicPageProvider from "@/components/providers/basic-page-provider";
import PersonBody from "./person/body";
import ProjectBody from "./project/body";
import FeatureBody from "./feature/body";
import SubProjectBody from "./sub-project/body";

const ApiPage = () => {
    return ( 
        <BasicPageProvider >
            <PersonBody/>
            <ProjectBody/>
            <SubProjectBody/>
            <FeatureBody/>
        </BasicPageProvider>
     );
}
 
export default ApiPage;