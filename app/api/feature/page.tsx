import BasicPageProvider from "@/components/providers/basic-page-provider";
import FeatureBody from "./body";
const FeaturePage = () => {
    return (
        <BasicPageProvider >
            <FeatureBody/>
        </BasicPageProvider>
     );
}
 
export default FeaturePage;