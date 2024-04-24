import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className=" container text-2xl gap-2 my-5">
        <div className="flex items-center justify-center">
          <Image
            src="/gameplan-logo.png"
            width={170}
            height={170}
            alt="GamePlan Logo"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Link href="/game">
            <Button variant={"default"}>Nova Partida</Button>
          </Link>
          <Button variant={"outline"}>Configurações</Button>
        </div>
      </main>
    </>
  );
}
