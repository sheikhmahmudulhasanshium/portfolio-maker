import Header from "./components/header";
import Footer from "./components/footer";
import BodyProvider from "@/components/providers/body-provider";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
        <Header/>
        <BodyProvider
                    navbar={<div>SubMenubar</div>} 
                    title="Explore Movies from here" 
                    content={<p>All the contents will be there</p>} 
                    additionalContent={<div>Additional movie-related information can go here.</div>} 
                />
        <Footer/>
    </main>
      );
}
