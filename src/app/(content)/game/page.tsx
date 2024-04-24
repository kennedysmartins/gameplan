import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const game = () => {
  return (
    <main className=" container text-2xl gap-2 my-5">
      <div className="flex items-center justify-center my-8">
          <img
            src="/select-game.png"
            alt="GamePlan Logo"
            className="w-56"
          />
        </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-4 w-56 items-center justify-center">
          <Link href="/game/7wonders">

          <Button className="w-24" variant={"outline"}><img src="https://cdn.svc.asmodee.net/production-unboxnowcom/uploads/2021/12/7Wonders-noirblanc.png" alt="7 Wonders"/></Button>
          </Link>
          <Button className="w-24" variant={"outline"}><img src="https://cdn.svc.asmodee.net/production-unboxnowcom/uploads/2022/01/TTR_LogoWhite-1.png" alt="7 Wonders"/></Button>
          <Button className="w-24" variant={"default"}>GWT</Button>
          <Button className="w-24" variant={"default"}>S.M</Button>
          <Button className="w-24" variant={"default"}>Bonfire</Button>
          <Button className="w-24" variant={"default"}>Castle</Button>
          <Button className="w-24" variant={"default"}>Sagrada</Button>
          <Button className="w-24" variant={"default"}>Outros</Button>
        </div>
      </div>
    </main>
  );
};

export default game;
