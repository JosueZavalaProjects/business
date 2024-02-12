import { Button } from "@/app/components/UI/button";
import { PaymentMethod as MethodType } from "@/types/UI/common";

import useSalesPointState from "../../../states/sales-point-state";

export const PaymentMethod = () => {
  const { setPaymentMethod, setPaymentStep } = useSalesPointState();

  const handleSelectPayment = (paymentMethod: MethodType) => {
    setPaymentMethod(paymentMethod);
    setPaymentStep(2);
  };
  return (
    <div className="grid justify-items-center gap-4 text-black">
      <div>
        <Button
          onClick={() => handleSelectPayment("cash")}
          className={"px-8 py-4"}
        >
          Efectivo
        </Button>
      </div>
      <div className="flex w-full justify-between">
        <Button
          onClick={() => handleSelectPayment("credit")}
          className={"px-8 py-4"}
        >
          Crédito
        </Button>
        <Button
          onClick={() => handleSelectPayment("debit")}
          className={"px-8 py-4"}
        >
          Débito
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleSelectPayment("transfer")}
          className={"px-8 py-4"}
        >
          Transferencia
        </Button>
      </div>
    </div>
  );
};
