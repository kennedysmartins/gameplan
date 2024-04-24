import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const game = () => {
  return (
    <main className=" container text-2xl gap-2 my-5">
      <div className="flex items-center justify-center my-8">
          <Image
            src="/select-game.png"
            width={170}
            height={170}
            alt="GamePlan Logo"
          />
        </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-4 w-56 items-center justify-center">
          <Button className="w-24" variant={"default"}>7 Wonders</Button>
          <Button className="w-24" variant={"default"}>T2R</Button>
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
