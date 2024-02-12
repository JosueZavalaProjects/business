"use client";

import { create, useStore } from "zustand";

import { CONTENTS, SALES_POINT_NAV, TAB_KEYS } from "@/constants/sales-point";
import {
  NavOptions,
  PaymentMethod,
  PaymentStep,
  TabContent,
} from "@/types/UI/common";

type SalesPointStateProps = {
  tabName: string;
  setTabName: (tabName: string) => void;
  menuNav: NavOptions[];
  tabsContents: TabContent;
  paymentStep: PaymentStep;
  setPaymentStep: (paymentStep: PaymentStep) => void;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (paymentMethod: PaymentMethod) => void;
  payment: number;
  setPayment: (paymentMethod: number) => void;
};

const SalesPointStore = create<SalesPointStateProps>((set) => ({
  tabName: TAB_KEYS.ORDER,
  setTabName: (tabName: string) => set({ tabName }),
  menuNav: SALES_POINT_NAV,
  tabsContents: CONTENTS,
  paymentStep: 1,
  setPaymentStep: (paymentStep: PaymentStep) => set({ paymentStep }),
  paymentMethod: "cash",
  setPaymentMethod: (paymentMethod: PaymentMethod) => set({ paymentMethod }),
  payment: 0,
  setPayment: (payment: number) => set({ payment }),
}));

const useSalesPointState = () => useStore(SalesPointStore);

export default useSalesPointState;
