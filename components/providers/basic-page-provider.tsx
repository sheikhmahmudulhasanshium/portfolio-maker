import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { ReactNode } from "react";
import { Separator } from "../ui/separator";
interface BasicPageProviderProps{
    header?: ReactNode;
    children:ReactNode;
    footer?:ReactNode;
}
const BasicPageProvider: React.FC<BasicPageProviderProps>= ({header,footer,children}) => {
    return ( 
        <main className="flex flex-col w-full min-h-screen">
                  {header?<>{header}</>:<Header />}
                    {children}
                  <Separator/>  
                  {footer?<>{footer}</>:<Footer />}

        </main>

     );
}
 
export default BasicPageProvider;