"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import * as z from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
import { Form } from "@/components/ui/form";

const formSchema = z.object({
  id: z.string(),
  participants: z.number(),
  player: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
});

const Game7wonders = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
    },
  });
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    toast.success("Configurações editadas com sucesso!");
  }

  return (
    <>
      <main className=" container text-2xl gap-2 my-5">
        <div className="flex items-center justify-center my-8">
          <img
            src="https://cdn.svc.asmodee.net/production-unboxnowcom/uploads/2021/12/7Wonders-noirblanc.png"
            alt="7 Wonders Logo"
            className="w-56"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-4 w-72 items-center justify-center text-center">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <div className="flex flex-wrap gap-4 w-72 items-center justify-center my-4">
                        <h2>Escreva seu nome</h2>

                        <div className="relative w-96 flex items-center mx-2">
                          <User className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                          <Input
                            className="pl-8 h-11"
                            placeholder="Participante 1"
                          />
                        </div>

                        <h2>Distrubua seus pontos</h2>
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
                              onChange={(e) =>
                                setValue(parseInt(e.target.value))
                              }
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
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
                            <Input
                              placeholder="0"
                              className="pl-8 w-[4.7rem]"
                              type="number"
                            />
                          </div>
                          <Button variant="ghost" size={null} className="px-1">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </form>
            </Form>
            <div className="flex gap-4">
              <Button variant={"outline"}>Próximo Jogador</Button>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant={"default"}>Finalizar</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Você tem certeza?</DrawerTitle>
                    <DrawerDescription>
                      Essa ação não pode ser desfeita.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Calcular</Button>
                    <DrawerClose>
                      <Button variant="outline">Cancelar</Button>
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

export default Game7wonders;
