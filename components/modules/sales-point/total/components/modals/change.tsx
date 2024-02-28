import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";

import { Button } from "@/components/UI/button";
import Text from "@/components/UI/text";
import { SuccessIcon } from "@/public/assets";
import { db } from "@/services/firebase";

import useSalesPointState from "../../../states/sales-point-state";

export const Change = ({ setShow }: { setShow: (show: boolean) => void }) => {
  const { payment, products, total, clearSale } = useSalesPointState();

  const handleAddSaleToDB = async () => {
    await addDoc(collection(db, "sales"), {
      products,
      payment,
      total,
    });
  };

  const handleNextStep = async () => {
    await handleAddSaleToDB();
    console.log("done");
    clearSale();
    setShow(false);
  };

  return (
    <div className="grid justify-items-center gap-4 text-black">
      <Image src={SuccessIcon} width={108} height={80} alt="success" />
      <Text color="silver" size="2xl">
        El camibio es: {payment - total} MXN
      </Text>
      <div className="text-old-silver"></div>
      <Button onClick={() => handleNextStep()} className={"px-8 py-4"}>
        Hacer otra Venta
      </Button>
    </div>
  );
};
