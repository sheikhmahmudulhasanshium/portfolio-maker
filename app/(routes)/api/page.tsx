'use client'

import { useEffect, useState } from "react";
import { useGetAllPersonInfo } from "@/components/hooks/person/get-all";
//import Header from "../components/header";
//import Footer from "../components/footer";
import BodyProvider from "@/components/providers/body-provider";
import SideMenubar from "../components/side-menubar"; 
import CodeSnippet from "../components/code-snippet";
import BasicPageProvider from "@/components/providers/basic-page-provider";

export default function Documentations() {
  const { personData, errorMessage, supabaseStatus } = useGetAllPersonInfo();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isStatusVisible, setIsStatusVisible] = useState(true);

  useEffect(() => {
    if (supabaseStatus === "Data loaded from Supabase") {
      const timer = setTimeout(() => setIsStatusVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [supabaseStatus]);

  const renderContent = () => {
    if (errorMessage) return <p className="text-red-500">{errorMessage}</p>;

    if (personData.length > 0) {
      return (
        <CodeSnippet
          data={personData}
          note={`// Showing results (${personData.length} row${personData.length > 1 ? 's' : ''})`}
        />
      );
    }

    return <p>No data found.</p>;
  };

  return (
    <BasicPageProvider 
         /*header={<Header />} footer={<Footer />} */
        >
      
      
      {/* Display status message if needed */}
      {isStatusVisible && supabaseStatus === "Data loaded from Supabase" && (
        <div className="bg-green-500 w-full text-center py-2">
          <p className="font-semibold">{supabaseStatus}</p>
        </div>
      )}

      {/* Body content */}
      <BodyProvider
        menubar={<SideMenubar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />}
        title="Let's Go........."
        content={<div className="w-full">{renderContent()}</div>}
        isSidebarCollapsed={isSidebarCollapsed}
      />

    </BasicPageProvider>
  );
}
