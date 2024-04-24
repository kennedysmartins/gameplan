import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className=" container text-2xl gap-2 my-5">
        <div className="flex items-center justify-center">
          <img
            src="/gameplan-logo.png"
            alt="GamePlan Logo"
            className="w-40 "
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
