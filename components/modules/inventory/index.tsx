"use client";
import { useState } from "react";

import Image from "next/image";

import { Button } from "@/components/UI/button";
import Text from "@/components/UI/text";
import { useAmount } from "@/hook/useAmount";
import { BackArrow, CameraIcon } from "@/public/assets";

import { NumberButton } from "./numbers";

export const Inventory = () => {
  /* const [amount, setAmount] = useState<string>(""); */
  const [unit, setUnit] = useState<"pzs" | "kg" | "lt">("kg");
  const { amount, handleSetAmount } = useAmount(unit);

  /* const handleSetAmount = (
    character: number | string,
    unit: "pzs" | "kg" | "lt" = "pzs"
  ) => {
    if (character === "<") {
      const newAmount = amount.split("", amount.length - 1).join("");

      setAmount(newAmount !== "0" ? newAmount : "");
      return;
    }
    if (character === ".") {
      if (unit === "pzs") return;

      const newAmount = amount.split(".");

      if (!newAmount[0]) {
        setAmount("0.");
        return;
      }
      if (newAmount.length > 1) return;
    }
    const decimalPart = amount.split(".");
    if (decimalPart.length > 1 && decimalPart[1].length > 2) return;

    const newAmount = amount + `${character}`;
    setAmount(newAmount !== "0" ? newAmount : "");
  }; */

  return (
    <div className="grid gap-4 bg-main-blue p-4">
      <div className="grid justify-items-center items-center">
        <Text color="white" size="4xl" as="h1">
          Inventario
        </Text>
      </div>
      <div className="flex justify-between px-4">
        <div className="flex gap-4">
          <Image
            src={BackArrow}
            width={15}
            height={26}
            alt="back arrow"
            className="cursor-pointer"
          />
          <div className="flex flex-col">
            <Text color="white" size="sm">
              Balance
            </Text>
            <div className="flex items-end gap-2">
              <Text color="white" size="2xl">
                704.00
              </Text>
              <Text color="white" size="sm">
                MXN
              </Text>
            </div>
          </div>
        </div>
        <Image
          src={CameraIcon}
          width={38}
          height={31}
          alt="camara icon"
          className="cursor-pointer"
        />
      </div>
      <div className="grid gap-4 justify-items-center items-cener py-4">
        <div className="flex flex-col">
          <div className="flex gap-2 items-end">
            <Text color="white" size="5xl">
              {amount ? amount : 0}
            </Text>
            <Text color="white" size="sm">
              Pzs
            </Text>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full gap-4 px-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, index) => (
            <NumberButton
              key={`NumberButton_${index}`}
              handleSetAmount={handleSetAmount}
              character={number}
            />
          ))}
          <NumberButton handleSetAmount={handleSetAmount} character={"."} />
          <NumberButton handleSetAmount={handleSetAmount} character={0} />
          <NumberButton handleSetAmount={handleSetAmount} character={"<"} />
        </div>
        <div className="grid gap-4 justify-items-center items-cener py-4">
          <Button>Agregar</Button>
        </div>
      </div>
    </div>
  );
};
