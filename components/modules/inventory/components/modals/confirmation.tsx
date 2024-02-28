import Image from "next/image";

import { Button } from "@/components/UI/button";
import Text from "@/components/UI/text";
import { SuccessIcon } from "@/public/assets";

type ConfirmationProps = {
  setModalStep: (newStep: number) => void;
  setInventoryStep: (newStep: number) => void;
};

export const Confirmation = ({
  setModalStep,
  setInventoryStep,
}: ConfirmationProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid justify-items-center">
        <Image src={SuccessIcon} width={108} height={80} alt="success" />
      </div>
      <Text color="gray" size="xl" className="text-center">
        ¡Listo! Agregaste un nuevo artículo
      </Text>
      <div className="flex justify-center">
        <Button onClick={() => setInventoryStep(1)}>
          Deseas agregar otro producto
        </Button>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => setInventoryStep(1)}>Ir al Tablero</Button>
      </div>
    </div>
  );
};
