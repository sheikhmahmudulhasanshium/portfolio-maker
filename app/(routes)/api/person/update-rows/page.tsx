"use client"
import SideMenubar from "@/app/(routes)/components/side-menubar";
import BodyProvider from "@/components/providers/body-provider";
import { useState } from "react";

const UpdateRows = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return ( 
        <div id="update-rows">
            <BodyProvider 
                title={'Update Rows'}
                content={undefined}
                menubar={<SideMenubar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />} 
                isSidebarCollapsed={false} 
            />       
        </div>
     );
}
 
export default UpdateRows;