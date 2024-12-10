import ListPersonPage from "../(routes)/list/person";
import AddPersonPage from "../(routes)/add/person";
import DeletePersonPage from "./delete/page";
import SearchPersonPage from "./search/page";
import UpdatePersonPage from "./update/page";
import { UserRound } from 'lucide-react';

const PersonBody = () => {
    return ( 
        <div className=" flex flex-col overflow-y-auto py-4"  id="person">
            <h1 className=" flex gap-2 items-center  pl-12">
                    <UserRound /> 
                    <p className="text-2xl font-medium">Person API List : </p>
            </h1>

            <AddPersonPage/>
            <UpdatePersonPage/>
            <SearchPersonPage/>
            <ListPersonPage/>
            <DeletePersonPage/>
        </div>
     );
}
 
export default PersonBody;