"use client";
import { Button } from "@/app/components/UI/button";
import { MinusIcon, PlusIcon } from "@/public/assets";

import { BlackButton } from "./black-button";

type AddItemsProps = {
  items: number;
  setItems: (value: number) => void;
  disabled: boolean;
  addProduct: () => void;
};

export const AddItems = ({
  items,
  setItems,
  disabled,
  addProduct,
}: AddItemsProps) => (
  <div className="flex justify-between gap-4 p-2">
    <div className="flex items-center gap-3">
      <BlackButton
        icon={{ src: MinusIcon, alt: "minus icon" }}
        setItems={() => setItems(items - 1)}
        disabled={items <= 0}
      />
      <div className="grid justify-items-center items-center min-w-16 text-5xl">
        {items}
      </div>
      <BlackButton
        icon={{ src: PlusIcon, alt: "plus icon" }}
        setItems={() => setItems(items + 1)}
      />
    </div>
    <div className="grid justify-items-center items-center">
      <Button
        bgColor="malachite-green"
        disabled={disabled}
        onClick={() => addProduct()}
      >
        Agregar
      </Button>
      {/* <div className="bg-gray-200"></div> */}
      <div className="bg-malachine-green"></div>
    </div>
  </div>
);
