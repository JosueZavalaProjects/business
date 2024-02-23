import { useState } from "react";

export const useAmount = (unit: "pzs" | "kg" | "lt") => {
  const [amount, setAmount] = useState<string>("");

  const handleSetAmount = (character: number | string) => {
    if (character === "<") {
      const newAmount = amount.split("", amount.length - 1).join("");

      setAmount(newAmount !== "0" ? newAmount : "");
      return;
    }
    if (character === ".") {
      if (unit === "pzs") return;

      const newAmount = amount.split(".");

      if (!newAmount[0]) {
        setAmount("0.");
        return;
      }
      if (newAmount.length > 1) return;
    }
    const decimalPart = amount.split(".");
    if (decimalPart.length > 1 && decimalPart[1].length > 2) return;

    const newAmount = amount + `${character}`;
    setAmount(newAmount !== "0" ? newAmount : "");
  };

  return { amount, handleSetAmount };
};
