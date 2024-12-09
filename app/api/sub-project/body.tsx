import ListSubProjectPage from "../(routes)/list/sub-project";
import AddProjectPage from "./add/page";
import DeleteProjectPage from "./delete/page";
import SearchProjectPage from "./search/page";
import UpdateProjectPage from "./update/page";
import { Boxes } from 'lucide-react';

const SubProjectBody = () => {
    return ( 
        <div className=" flex flex-col overflow-y-auto py-4"  id="sub-project">
            <h1 className=" flex gap-2 items-center  pl-12">
                    <Boxes/> 
                    <p className="text-2xl font-medium">Sub-Project API List : </p>
            </h1>

            <AddProjectPage/>
            <UpdateProjectPage/>
            <SearchProjectPage/>
            <ListSubProjectPage/>
            <DeleteProjectPage/>
        </div>
     );
}
 
export default SubProjectBody;