import { Button } from "@/components/UI/button";
import Text from "@/components/UI/text";

type AskConfirmationProps = {
  setModalStep: (newStep: number) => void;
  setInventoryStep: (newStep: number) => void;
};

export const AskConfirmation = ({
  setModalStep,
  setInventoryStep,
}: AskConfirmationProps) => {
  return (
    <div className="grid gap-4">
      <Text color="gray" size="xl">
        ¿Estás segur@ que quieres agregar este artículo?
      </Text>
      <div className="flex justify-center">
        <Button onClick={() => setModalStep(2)}>Si</Button>
      </div>
      <div className="flex justify-center">
        <Button bgColor="gray" onClick={() => setInventoryStep(1)}>
          No, regresar al tablero
        </Button>
      </div>
    </div>
  );
};
