import { MinusIcon, PlusIcon } from "@/public/assets";
import Image from "next/image";
import { BlackButton } from "./black-button";

type AddItemsProps = {
  items: number;
  setItems: (value: number) => void;
};

export const AddItems = ({ items, setItems }: AddItemsProps) => (
  <div className="flex justify-between gap-4 p-2">
    <div className="flex items-center gap-3">
      <BlackButton
        icon={{ src: MinusIcon, alt: "minus icon" }}
        setItems={() => setItems(items - 1)}
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
      <button className="border rounded-xl py-2 px-6 bg-malachite-green text-white">
        Agregar
      </button>
    </div>
  </div>
);
