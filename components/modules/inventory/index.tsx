"use client";
import { useState } from "react";

import { MOCK_PRODUCT, PRODUCT_KEYS } from "@/constants/inventory";
import { useAmount } from "@/hook/useAmount";
import { Product, ProductKeys, Unit } from "@/types/inventory";

import { Modals } from "./components/modals";
import { ProductInformation } from "./components/steps/product-information";
import { SetUnits } from "./components/steps/set-units";

export const Inventory = (): React.ReactElement => {
  const [step, setStep] = useState<number>(0);
  const [unit, setUnit] = useState<Unit>("pzs");
  const [product, setProduct] = useState<Product>(MOCK_PRODUCT);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { amount, handleSetAmount, removeDecimalPart } = useAmount(unit);

  const handleSetProduct = (value: string | number, key: ProductKeys) => {
    if (key === PRODUCT_KEYS.PRICE) value = +value;

    const newProduct = { ...product, [key]: value };

    setProduct(newProduct);
  };

  const handleSetInventoryStep = (newStep: number) => setStep(newStep);

  return (
    <>
      <Modals
        show={showModal}
        setShow={setShowModal}
        setInventoryStep={handleSetInventoryStep}
      />
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
      {step === 1 && (
        <ProductInformation
          setStep={setStep}
          setShowModal={setShowModal}
          handleSetProduct={handleSetProduct}
          product={product}
        />
      )}
    </>
  );
};
