import { useState } from "react";

import { Button } from "@/components/UI/button";
import Text from "@/components/UI/text";

import useSalesPointState from "../../../states/sales-point-state";

export const PaymentAmount = () => {
  const [inputNumber, setInputNumber] = useState();
  const { setPayment, setPaymentStep } = useSalesPointState();

  const handleNextStep = (PaymentAmount: number) => {
    setPayment(PaymentAmount);
    setPaymentStep(3);
  };

  return (
    <div className="grid justify-items-center gap-4 text-black">
      <Text color="silver" size="2xl">
        El cliente pago con:
      </Text>
      <div className="text-old-silver"></div>
      <Button onClick={() => handleNextStep(100)} className={"px-8 py-4"}>
        100 MXN
      </Button>
      <Button onClick={() => handleNextStep(200)} className={"px-8 py-4"}>
        200 MXN
      </Button>
      <Button onClick={() => handleNextStep(500)} className={"px-8 py-4"}>
        500 MXN
      </Button>
      <Button onClick={() => handleNextStep(1000)} className={"px-8 py-4"}>
        1,000 MXN
      </Button>
      <div className="flex flex-row justify-stretch items-center w-32 px-2 py-2  text-3xl border border-black rounded-xl overflow-hidden">
        <div className="py-0 pr-2 text-gray-400">$</div>
        <input
          value={inputNumber}
          onChange={(e: any) => setInputNumber(e.target.value)}
          className="flex-1 w-full pl-2 focus:outline-none"
          type="number"
        />
      </div>
      {inputNumber && (
        <div className="pt-4">
          <Button
            onClick={() => handleNextStep(inputNumber)}
            bgColor="gray"
            className={"px-8 py-4"}
          >
            Siguiente
          </Button>
        </div>
      )}
    </div>
  );
};
