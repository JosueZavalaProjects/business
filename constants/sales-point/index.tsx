import { Order } from "@/app/components/modules/sales-point/order/page";
import { Total } from "@/app/components/modules/sales-point/total";
import { ProductsMock } from "@/types/sales-point";

export const CATEGORIES_MOCK = [
  "Ropa",
  "Imanes",
  "Llaveros",
  "Tazas",
  "Ropa",
  "Imanes",
  "Llaveros",
  "Tazas",
];

export const PRODUCTS_MOCK: ProductsMock = {
  Ropa: [
    { name: "playera polo", price: 50 },
    { name: "playera blanca", price: 40 },
    { name: "playera roja", price: 550 },
    { name: "pantalon verde", price: 350 },
    { name: "Caletines verdes", price: 150 },
    { name: "sudadera cafe", price: 503 },
  ],
  Imanes: [
    { name: "Iman de Cordoba", price: 50 },
    { name: "Iman de Milan", price: 33 },
    { name: "Iman de Italia", price: 13 },
    { name: "Iman de España", price: 35 },
    { name: "Iman de Madrid", price: 36 },
  ],
  Tazas: [
    { name: "Taza los beatles", price: 103 },
    { name: "Taza Negra", price: 203 },
    { name: "Taza azul mate", price: 50 },
    { name: "Taza termica", price: 53 },
  ],
};

export const TAB_KEYS = {
  ORDER: "order",
  TOTAL: "total",
};

export const CONTENTS = {
  [TAB_KEYS.ORDER]: <Order />,
  [TAB_KEYS.TOTAL]: <Total />,
};

export const SALES_POINT_NAV = [
  { label: "Order", name: TAB_KEYS.ORDER },
  { label: "Total", name: TAB_KEYS.TOTAL },
];
