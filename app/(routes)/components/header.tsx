import { ModeToggle } from "@/components/ui/mode-toggle";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Header = () => {
    return (
        <div className="shadow-xl w-full justify-center items-center flex">
        <div className="flex justify-center items-center    w-11/12">
            <div className="flex justify-between items-center  min-h-20  gap-4 max-w-2xl w-full ">
                <p className="font-thin font-sans text-xl text-pretty text-indigo-600 shrink-0">Portfolio Maker</p>
                <Navbar/>
                <div className="flex items-center justify-end gap-2">
                    <ModeToggle/>
                    <Sidebar/>
                </div>
                
            </div>
        </div> </div>
     );
}
 
export default Header;