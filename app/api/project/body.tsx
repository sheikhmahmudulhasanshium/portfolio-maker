import AddProjectPage from "./add/page";
import DeleteProjectPage from "./delete/page";
import ListProjectPage from "./list/page";
import SearchProjectPage from "./search/page";
import UpdateProjectPage from "./update/page";
import { Codesandbox } from 'lucide-react';

const ProjectBody = () => {
    return ( 
        <div className=" flex flex-col overflow-y-auto py-4"  id="project">
            <h1 className=" flex gap-2 items-center  pl-12">
                    <Codesandbox /> 
                    <p className="text-2xl font-medium">Project API List : </p>
            </h1>

            <AddProjectPage/>
            <UpdateProjectPage/>
            <SearchProjectPage/>
            <ListProjectPage/>
            <DeleteProjectPage/>
        </div>
     );
}
 
export default ProjectBody;