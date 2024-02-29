import { Button } from "@/components/UI/button";
import Text from "@/components/UI/text";

type AskConfirmationProps = {
  setInventoryStep: (newStep: number) => void;
  handleAddProduct: () => void;
};

export const AskConfirmation = ({
  setInventoryStep,
  handleAddProduct,
}: AskConfirmationProps) => {
  const handleConfirmButtom = () => {
    handleAddProduct();
  };

  return (
    <div className="grid gap-4">
      <Text color="gray" size="xl">
        ¿Estás segur@ que quieres agregar este artículo?
      </Text>
      <div className="flex justify-center">
        <Button onClick={() => handleConfirmButtom()}>Si</Button>
      </div>
      <div className="flex justify-center">
        <Button bgColor="gray" onClick={() => setInventoryStep(1)}>
          No, regresar al tablero
        </Button>
      </div>
    </div>
  );
};
