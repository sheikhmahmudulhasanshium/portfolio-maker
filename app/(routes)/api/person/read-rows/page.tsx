"use client"
import SideMenubar from "@/app/(routes)/components/side-menubar";
import BodyProvider from "@/components/providers/body-provider";
import { useState } from "react";
import Body from "./body";

const ReadRows = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return ( 
        <div id="read-rows">
            <BodyProvider 
                title={'Read Rows'}
                content={<Body/>}
                menubar={<SideMenubar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />} 
                isSidebarCollapsed={false} 
            />       
        </div>
     );
}
 
export default ReadRows;