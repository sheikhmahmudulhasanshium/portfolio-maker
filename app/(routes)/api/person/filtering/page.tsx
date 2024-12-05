"use client"
import SideMenubar from "@/app/(routes)/components/side-menubar";
import BodyProvider from "@/components/providers/body-provider";
import { useState } from "react";

const Filtering = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return ( 
        <div id="filtering">
            <BodyProvider 
                title={'Filtering'}
                content={undefined}
                menubar={<SideMenubar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />} 
                isSidebarCollapsed={false} 
            />       
        </div>
     );
}
 
export default Filtering;