import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Icon = {
  src: string | StaticImport;
  width?: number | `${number}`;
  height?: number | `${number}`;
  alt: string;
  link?: string;
};

export type Product = {
  name: string;
  price: number;
};

export type ProductCheckout = Product & {
  amount: number;
};

export type ProductsMock = {
  [key: string]: Product[];
};
