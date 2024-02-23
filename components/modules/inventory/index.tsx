import { Button } from "@/components/UI/button";
import Text from "@/components/UI/text";

import { NumberButton } from "./numbers";

export const Inventory = () => {
  return (
    <div className="grid gap-4 bg-main-blue p-4">
      <div className="grid justify-items-center items-center">
        <Text color="white" size="4xl" as="h1">
          Inventario
        </Text>
      </div>
      <div className="flex justify-between px-4">
        <div>Balance</div>
        <div>Add Image icon</div>
      </div>
      <div className="grid gap-4 justify-items-center items-cener py-4">
        <div>Quantity</div>
        <div className="grid grid-cols-3 w-full gap-4 px-4">
          <NumberButton number={1} />
          <NumberButton number={2} />
          <NumberButton number={3} />
          <NumberButton number={4} />
          <NumberButton number={5} />
          <NumberButton number={6} />
          <NumberButton number={7} />
          <NumberButton number={8} />
          <NumberButton number={9} />
          <NumberButton number={"."} />
          <NumberButton number={0} />
          <NumberButton number={"<"} />
        </div>
        <div className="grid gap-4 justify-items-center items-cener py-4">
          <Button>Agregar</Button>
        </div>
      </div>
    </div>
  );
};
