"use client"
import SideMenubar from "@/app/(routes)/components/side-menubar";
import BodyProvider from "@/components/providers/body-provider";
import { useState } from "react";

const InsertRows = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return ( 
        <div id="insert-rows">
            <BodyProvider 
                title={'Insert Rows'}
                content={undefined}
                menubar={<SideMenubar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />} 
                isSidebarCollapsed={false} 
            />       
        </div>
     );
}
 
export default InsertRows;