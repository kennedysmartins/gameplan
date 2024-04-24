"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const game7wonders = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <>
      <main className=" container text-2xl gap-2 my-5">
        <div className="flex items-center justify-center my-8">
          <img
            src="https://cdn.svc.asmodee.net/production-unboxnowcom/uploads/2021/12/7Wonders-noirblanc.png"
            alt="GamePlan Logo"
            className="w-56"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-4 w-72 items-center justify-center text-center">
            <h2>Escreva seu nome</h2>

            <div className="relative w-full flex items-center">
              <User className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
              <Input className="pl-8 h-11" placeholder="Participante 1" />
            </div>

            <h2>Distrubua seus pontos</h2>

            <div className="flex flex-wrap gap-4 w-72 items-center justify-center my-4">
              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button
                  variant="ghost"
                  size={null}
                  className="px-1"
                  onClick={decrement}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input
                    placeholder="0"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value) || 0)}
                    className="pl-8 w-[4.7rem]"
                    type="number"
                  />
                </div>
                <Button
                  variant="ghost"
                  size={null}
                  className="px-1"
                  onClick={increment}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                <Button variant="ghost" size={null} className="px-1">
                  <Minus className="h-3 w-3" />
                </Button>
                <div className="relative flex items-center">
                  <FaMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                  <Input placeholder="0" className="pl-8 w-[4.7rem]" type="number" />
                </div>
                <Button variant="ghost" size={null} className="px-1">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

            </div>
              <div className="flex gap-4">
                <Button variant={"outline"}>Próximo Jogador</Button>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant={"default"}>Finalizar</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                      <DrawerDescription>
                        This action cannot be undone.
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default game7wonders;
