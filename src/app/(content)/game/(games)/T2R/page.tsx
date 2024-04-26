"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, User } from "lucide-react";
import {
  FaHouseMedical,
  FaMagnifyingGlass,
  FaSheetPlastic,
} from "react-icons/fa6";
import * as z from "zod";
import * as React from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Carousel,
  CarouselApi,
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
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const pointFields = [
  {
    name: "Military",
    value: 0,
    icon: FaMagnifyingGlass,
  },
  {
    name: "Energy",
    value: 0,
    icon: FaHouseMedical,
  },
  {
    name: "Points",
    value: 0,
    icon: FaSheetPlastic,
  },
];

const formSchema = z.object({
  id: z.string(),
  participants: z.number(),
  players: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      points: z.array(z.number()),
    })
  ),
});

const T2R = () => {
  const [players, setPlayers] = React.useState([
    {
      id: 0,
      name: "",
      points: Array(10).fill(0),
    },
  ]);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
    });
  }, [api]);

  const addPlayer = () => {
    if (api) {
      setPlayers((prevPlayers) => [
        ...prevPlayers,
        {
          id: prevPlayers.length,
          name: "",
          points: Array(10).fill(0),
        },
      ]);
      // Call carousel API to go to the next slide after adding player
      api.scrollNext(true);
      console.log("ScrollNext");
    }
  };

  const removePlayer = (id: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id)
    );
  };

  const handleChangeName = (id: number, newName: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, name: newName } : player
      )
    );
  };

  const handleChangePoints = (
    playerId: number,
    pointIndex: number,
    value: number
  ) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId
          ? {
              ...player,
              points: player.points.map((point, index) =>
                index === pointIndex ? value : point
              ),
            }
          : player
      )
    );
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      participants: 1,
      players: [{
        id: 0,
        name: "",
        points: [0],
      }]
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert(JSON.stringify(values));

    toast.success("Configurações editadas com sucesso!");
  }
  return (
    <>
      <main className="container text-2xl gap-2 my-5">
        <div className="flex items-center justify-center my-8">
          <img
            src="https://cdn.svc.asmodee.net/production-unboxnowcom/uploads/2022/01/TTR_LogoWhite-1.png"
            alt="T2R Logo"
            className="w-56"
          />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Carousel setApi={setApi}>
              <CarouselContent>
                {players.map((player) => (
                  <CarouselItem className="flex items-center justify-center" key={player.id}>
                    <div
                      className="flex flex-wrap gap-4 w-72 items-center justify-start my-4"
                      key={player.id}
                    >
                      <div className="w-96 flex items-center justify-center text-center mx-2 text-xl font-medium">
                        <h2 className="select-none">Escreva seu nome</h2>
                      </div>

                      <FormField
                        control={form.control}
                        name={`players.${player.id}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl className="w-auto">
                              <div className="relative w-[270px] flex items-center mx-2">
                                <User className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                                <Input
                                  className="pl-8 h-11"
                                  placeholder={`Participante ${player.id + 1}`}
                                  {...field}
                                />
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="w-96 flex items-center justify-center text-center mx-2 text-xl font-medium">
                        <h3 className="select-none">Distribua seus pontos</h3>
                      </div>

                      {pointFields.map((pointField, index) => (
                        <FormField
                          control={form.control}
                          name={`players.${player.id}.points.${index}`}
                          key={index}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl className="w-auto">
                                <div className="flex gap-1 bg-gray-900 rounded-md p-1">
                                  <Button
                                    variant="ghost"
                                    size={null}
                                    className="px-1"
                                    onClick={() =>
                                      handleChangePoints(
                                        player.id,
                                        index,
                                        player.points[index] - 1
                                      )
                                    }
                                    type="button"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <div className="relative flex items-center">
                                    <pointField.icon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                                    <Input
                                      placeholder="0"
                                      {...field}
                                      className="pl-8 w-[4.7rem]"
                                      type="number"
                                    />
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size={null}
                                    className="px-1"
                                    onClick={() =>
                                      handleChangePoints(
                                        player.id,
                                        index,
                                        player.points[index] + 1
                                      )
                                    }
                                    type="button"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </CarouselItem>
                ))}

              </CarouselContent>
            </Carousel>
            <div className="flex items-center justify-center gap-4">
              <Button className="select-none" onClick={addPlayer}>Adicionar jogador</Button>
              <Button className="select-none" type="submit">Remover</Button>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button className="select-none" type="button" variant="default">
                    Finalizar
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Você tem certeza?</DrawerTitle>
                    <DrawerDescription>
                      Essa ação não pode ser desfeita.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button
                      type="submit"
                      variant="default"
                      onClick={form.handleSubmit(onSubmit)}
                    >
                      Calcular
                    </Button>
                    <DrawerClose>
                      <Button type="button" variant="outline">
                        Cancelar
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </form>
        </Form>
      </main>
    </>
  );
};

export default T2R;
