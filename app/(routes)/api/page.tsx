'use client'
import { useEffect, useState } from "react";
import { useGetAllPersonInfo } from "@/components/hooks/person/get-all";
import Header from "../components/header";
import Footer from "../components/footer";
import BodyProvider from "@/components/providers/body-provider";
import SideMenubar from "../components/side-menubar"; 
export default function Documentations() {
  const { personData, errorMessage, supabaseStatus } = useGetAllPersonInfo();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isStatusVisible, setIsStatusVisible] = useState(true);

  useEffect(() => {
    if (supabaseStatus === "Data loaded from Supabase") {
      const timer = setTimeout(() => {
        setIsStatusVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [supabaseStatus]);

  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />
      {isStatusVisible && supabaseStatus === "Data loaded from Supabase" && (
        <div className="bg-green-500 w-full text-center py-2">
          <p className="font-semibold">{supabaseStatus}</p>
        </div>
      )}

      <BodyProvider
        menubar={<SideMenubar isCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed} />}
        title="Let's Go........."
        content={
          <div className="w-full">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {personData.length > 0 ? (
              <pre className="text-left whitespace-pre-wrap p-4 rounded-lg shadow-md">
                {JSON.stringify(personData, null, 2)}
              </pre>
            ) : (
              <p>No data found.</p>
            )}
          </div>
        }
        isSidebarCollapsed={isSidebarCollapsed}
      />

      <Footer />
    </main>
  );
}
