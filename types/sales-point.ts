import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Icon = {
  src: string | StaticImport;
  width?: number | `${number}`;
  height?: number | `${number}`;
  alt: string;
  link?: string;
};
