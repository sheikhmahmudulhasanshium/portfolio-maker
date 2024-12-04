import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MenuOptionList } from "@/lib/data";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
const Sidebar = () => {
    return ( 
        <div className="lg:hidden md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <MenuIcon/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col mt-8 ">
                    {
                        MenuOptionList.map((option,index)=>(
                            <DropdownMenuItem key={index}>
                                <Link href={option.path} className="hover:text-blue-500">
                                    {option.name}
                                </Link>
                            </DropdownMenuItem>
                        ))
                    }
                    
                    
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
     );
}
 
export default Sidebar;