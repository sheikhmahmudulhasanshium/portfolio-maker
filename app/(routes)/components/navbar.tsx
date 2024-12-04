import { MenuOptionList } from "@/lib/data";
import Link from "next/link";
const Navbar = () => {
    return ( 
        <div className="lg:flex md:flex md:gap-4 lg:gap-6  hidden">
            {
                MenuOptionList.map((option,index)=>(
                    <Link key={index} href={option.path} className="hover:text-blue-500 hover:font-semibold">
                        {option.name}
                    </Link>
                ))
            }
            
        </div>
     );
}
 
export default Navbar;