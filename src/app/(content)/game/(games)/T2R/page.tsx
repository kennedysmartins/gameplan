"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Train, User } from "lucide-react";
import { GiMineWagon } from "react-icons/gi";
import {
  TbCircleDashedNumber1,
  TbCircleDashedNumber2,
  TbCircleDashedNumber3,
  TbCircleDashedNumber4,
  TbCircleDashedNumber5,
  TbCircleDashedNumber6,
  TbCircleDashedNumber7,
  TbCircleDashedNumber8,
} from "react-icons/tb";
import {
  FaHouseMedical,
  FaMagnifyingGlass,
  FaSheetPlastic,
  FaTrain,
  FaTrash,
} from "react-icons/fa6";
import * as z from "zod";
import * as React from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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
import Modal from "@/components/Modal";

const pointFields = [
  {
    name: "1",
    value: 0,
    multiplier: 1,
    icon: TbCircleDashedNumber1,
  },
  {
    name: "2",
    value: 0,
    multiplier: 2,

    icon: TbCircleDashedNumber2,
  },
  {
    name: "3",
    value: 0,
    multiplier: 4,
    icon: TbCircleDashedNumber3,
  },
  {
    name: "4",
    value: 0,
    multiplier: 7,
    icon: TbCircleDashedNumber4,
  },
  {
    name: "5",
    value: 0,
    multiplier: 10,
    icon: TbCircleDashedNumber5,
  },
  {
    name: "6",
    value: 0,
    multiplier: 15,
    icon: TbCircleDashedNumber6,
  },
  {
    name: "7",
    value: 0,
    multiplier: 18,
    icon: TbCircleDashedNumber7,
  },
  {
    name: "8",
    value: 0,
    multiplier: 21,
    icon: TbCircleDashedNumber8,
  },
];

const formSchema = z.any();

const T2R = () => {
  const [players, setPlayers] = React.useState([
    {
      id: 0,
      name: "",
      points: Array(8).fill(0),
    },
  ]);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [totalPoints, setTotalPoints] = React.useState<number | null>(null);
  const [winner, setWinner] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const addPlayer = () => {
    if (api) {
      setPlayers((prevPlayers) => [
        ...prevPlayers,
        {
          id: prevPlayers.length,
          name: "",
          points: Array(8).fill(0),
        },
      ]);
      setTimeout(() => {
        api.scrollTo(players.length, true);
      }, 300);
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

  const calculateScore = () => {
    let total = 0;
    players.forEach((player) => {
      player.points.forEach((points, index) => {
        total += points * pointFields[index].multiplier;
      });
    });
    setTotalPoints(total);
  };

  const handleChangePoints = (
    playerId: number,
    pointIndex: number,
    value: number
  ) => {
    console.log(players);
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
    mode: "onChange",
    defaultValues: {
      id: "",
      participants: 1,
      players: [
        {
          id: 0,
          name: "",
          points: Array(8).fill(0),
        },
      ],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(players);
  
      // Calcular o score de cada jogador
      const playerScores = players.map((player) => {
        const score = player.points.reduce((acc, cur, index) => {
          return acc + cur * pointFields[index].multiplier;
        }, 0);
        return { name: player.name, score };
      });
  
      // Encontrar o jogador com a pontuação mais alta
      const winningScore = Math.max(...playerScores.map((player) => player.score));
      const winningPlayer = playerScores.find((player) => player.score === winningScore)?.name || null;
  
      setWinner(winningPlayer);
      setIsOpen(true);

  
      toast.success("Configurações editadas com sucesso!");
    } catch (error) {
      console.error("Validation Error:", error);
    }
  }

  return (
    <>
      <main className={`w-full mx-auto text-2xl gap-2 my-5 max-xs:px-7`}>
        <div className="flex items-center justify-center my-8">
          <img src="/T2R.png" alt="T2R Logo" className="w-56" />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Carousel
              className="flex items-center justify-center mx-5"
              setApi={setApi}
            >
              <CarouselContent>
                {players.map((player) => (
                  <CarouselItem
                    className="flex items-center justify-center"
                    key={player.id}
                  >
                    <div
                      className="flex flex-wrap gap-4 w-[17.5rem] items-center justify-start my-4"
                      key={player.id}
                    >
                      <div className="w-96 flex items-center justify-center text-center mx-2 text-xl font-medium">
                        <h2 className="select-none">Escreva seu nome</h2>
                      </div>

                      <FormField
                        control={form.control}
                        name={`players.${player.id}.name`}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <div className="flex items-center gap-2">
                                <div className="relative w-full flex items-center">
                                  <User className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                                  <Input
                                    className="pl-8 h-11"
                                    {...field}
                                    onChange={(e) => {
                                      field.onChange(e); // Update the form state
                                      handleChangeName(
                                        player.id,
                                        e.target.value
                                      ); // Update the players state
                                    }}
                                    placeholder={`Participante ${
                                      player.id + 1
                                    }`}
                                  />
                                </div>
                                {player.id !== 0 && (
                                  <Button
                                    type="button"
                                    onClick={() => removePlayer(player.id)}
                                    variant="destructive"
                                    size="icon"
                                  >
                                    <FaTrash className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="w-96 flex items-center justify-center text-center mx-2 text-xl font-medium">
                        <h3 className="select-none">Distribua seus pontos</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
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
                                      size="icon"
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
                                      <Controller
                                        name={`players.${player.id}.points.${index}`}
                                        control={form.control}
                                        render={({ field }) => (
                                          <Input
                                            {...field}
                                            value={player.points[index]}
                                            onChange={(e) =>
                                              handleChangePoints(
                                                player.id,
                                                index,
                                                parseInt(e.target.value, 10) ||
                                                  0
                                              )
                                            }
                                            placeholder="0"
                                            className="pl-8 w-[4.7rem]"
                                            type="number"
                                          />
                                        )}
                                      />
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="icon"
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
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {players.length > 1 && (
              <>
                <div className="py-2 text-center text-sm text-muted-foreground">
                  Player {current} of {players.length}
                </div>
              </>
            )}
            <div className="flex items-center justify-center gap-4">
              <Button type="button" className="select-none" onClick={addPlayer}>
                Adicionar jogador
              </Button>

              <Button
                type="submit"
                variant="default"
                onClick={form.handleSubmit(onSubmit)}
              >
                Calcular
              </Button>

              {isOpen && (
  <Modal onClose={() => setIsOpen(false)}>
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Score:</h2>
      {players.map((player) => (
        <div key={player.id} className="mb-2">
          <span className="font-bold">{player.name}:</span>{" "}
          {player.points.reduce((acc, cur, index) => acc + cur * pointFields[index].multiplier, 0)}
        </div>
      ))}
      {winner && <div className="mt-4">Vencedor: {winner}</div>}
    </div>
  </Modal>
)}

              {/* <Drawer>
                <DrawerTrigger asChild>
                  <div>
                    <Button
                      className="select-none"
                      type="button"
                      variant="default"
                    >
                      Finalizar
                    </Button>
                  </div>
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
              </Drawer> */}
            </div>
          </form>
        </Form>
      </main>
    </>
  );
};

export default T2R;
