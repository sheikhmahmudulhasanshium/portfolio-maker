import CodeSnippet from "@/app/(routes)/components/code-snippet";
import { useGetAllPersonInfo } from "@/components/hooks/person/get-all";

const Body = () => {
    const { personData, errorMessage, supabaseStatus } = useGetAllPersonInfo();
    if(errorMessage){
        return<p>{errorMessage}</p>
    }
    if(supabaseStatus){
        return<p>{supabaseStatus}</p>
    }
    return ( 
        <div className="flex flex-col justify-between items-center">
            <CodeSnippet
          data={personData}
          note={`// Showing results (${personData.length} row${personData.length > 1 ? 's' : ''})`}
        />
        </div>
     );
}
 
export default Body;