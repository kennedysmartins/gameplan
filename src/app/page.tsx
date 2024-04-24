import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className=" container text-2xl gap-2 my-10">
        <div className="flex items-center justify-center">
          <Image
            src="/gameplan-logo.png"
            width={200}
            height={200}
            alt="GamePlan Logo"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button variant={"default"}>Nova Partida</Button>
          <Button variant={"outline"}>Configurações</Button>
        </div>
      </main>
    </>
  );
}
