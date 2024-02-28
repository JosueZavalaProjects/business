"use client";
import { useState } from "react";

import { useAmount } from "@/hook/useAmount";
import { Unit } from "@/types/inventory";

import { ProductInformation } from "./components/steps/product-information";
import { SetUnits } from "./components/steps/set-units";

export const Inventory = (): React.ReactElement => {
  const [step, setStep] = useState<number>(0);
  const [unit, setUnit] = useState<Unit>("pzs");
  const { amount, handleSetAmount, removeDecimalPart } = useAmount(unit);

  return (
    <>
      {step === 0 && (
        <SetUnits
          amount={amount}
          unit={unit}
          setStep={setStep}
          handleSetAmount={handleSetAmount}
          removeDecimalPart={removeDecimalPart}
          setUnit={setUnit}
        />
      )}
      {step === 1 && <ProductInformation setStep={setStep} />}
    </>
  );
};
