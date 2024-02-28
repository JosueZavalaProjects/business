export type Unit = "pzs" | "kg" | "lt";

export type DropdownOption = { value: Unit; label: string };

export const UnitsObject: { [key: string]: Unit } = {
  pzs: "pzs",
  kg: "kg",
  lt: "lt",
};


