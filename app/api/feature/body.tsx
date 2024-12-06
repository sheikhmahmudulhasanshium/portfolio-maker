import AddFeaturePage from "./add/page";
import DeleteFeaturePage from "./delete/page";
import ListFeaturePage from "./list/page";
import SearchFeaturePage from "./search/page";
import UpdateFeaturePage from "./update/page";
import { HandHeart } from 'lucide-react';

const FeatureBody = () => {
    return ( 
        <div className=" flex flex-col overflow-y-auto py-4"  id="feature">
            <h1 className=" flex gap-2 items-center  pl-12">
                    <HandHeart /> 
                    <p className="text-2xl font-medium">Feature API List : </p>
            </h1>

            <AddFeaturePage/>
            <UpdateFeaturePage/>
            <SearchFeaturePage/>
            <ListFeaturePage/>
            <DeleteFeaturePage/>
        </div>
     );
}
 
export default FeatureBody;