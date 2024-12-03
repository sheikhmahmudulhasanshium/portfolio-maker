import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
        <Header/>
        API Page
        <Button>default button</Button>
        <ModeToggle/>
        <Footer/>
    </main>
      );
}
