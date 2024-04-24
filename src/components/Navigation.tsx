import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Search from "./Search";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <header className="fixed bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-16 justify-around items-center space-x-1 gap-3">
        <Button variant={"ghost"}>Sobre</Button>
        <Button variant={"ghost"}>Perfil</Button>
      </nav>
    </header>
  );
};

export default Navigation;
