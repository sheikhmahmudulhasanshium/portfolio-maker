import { HandHeart } from 'lucide-react';
import AddFeaturePage from './add/page';
import UpdateFeaturePage from './update/page';
import SearchFeaturePage from './search/page';
import ListFeaturePage from '../(routes)/list/feature';
import DeleteFeaturePage from './delete/page';

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