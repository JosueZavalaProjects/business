"use client";
import { Order } from "@/components/modules/sales-point/order";
import { Total } from "@/components/modules/sales-point/total";
import { NavOptions, TabContent } from "@/types/UI/common";
export const TAB_KEYS = {
  ORDER: "order",
  TOTAL: "total",
};

export const CONTENTS: TabContent = {
  [TAB_KEYS.ORDER]: <Order />,
  [TAB_KEYS.TOTAL]: <Total />,
};

export const SALES_POINT_NAV: NavOptions[] = [
  { label: "Order", name: TAB_KEYS.ORDER },
  { label: "Total", name: TAB_KEYS.TOTAL },
];
