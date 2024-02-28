"use client";
import { useState } from "react";

import { useAmount } from "@/hook/useAmount";
import { Product, ProductKeys, Unit } from "@/types/inventory";

import { ProductInformation } from "./components/steps/product-information";
import { SetUnits } from "./components/steps/set-units";
import { MOCK_PRODUCT, PRODUCT_KEYS } from "@/constants/inventory";

export const Inventory = (): React.ReactElement => {
  const [step, setStep] = useState<number>(0);
  const [unit, setUnit] = useState<Unit>("pzs");
  const [product, setProduct] = useState<Product>(MOCK_PRODUCT);

  const { amount, handleSetAmount, removeDecimalPart } = useAmount(unit);

  const handleSetProduct = (value: string, key: ProductKeys) => {
    const newProduct = { ...product, [key]: value };
    /* newProduct[PRODUCT_KEYS[key]] = product[key] + value; */

    /* const newValue = `${newProduct[key]}${value}`;
    newProduct[key] = newValue; */
    /* newProduct[key] += value; */
    /* console.log(product[key]); */
    console.log(newProduct);
    console.log(`${product[key]}`);
    console.log(key);
    /* console.log({ newProduct }); */
    setProduct(newProduct);
    /* newProduct[key] = "test"; */
  };

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
      {step === 1 && (
        <ProductInformation
          setStep={setStep}
          product={product}
          handleSetProduct={handleSetProduct}
        />
      )}
    </>
  );
};
