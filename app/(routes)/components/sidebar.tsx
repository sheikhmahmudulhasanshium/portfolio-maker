import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react";
  
const Sidebar = () => {
    return ( 
        <div className="lg:hidden md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <MenuIcon/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        API Reference
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Manage
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    Overview
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Guide
                    </DropdownMenuItem>
                    
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
     );
}
 
export default Sidebar;