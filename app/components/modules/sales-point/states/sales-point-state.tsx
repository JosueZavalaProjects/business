"use client";

import { create, useStore } from "zustand";

import { CONTENTS, SALES_POINT_NAV, TAB_KEYS } from "@/constants/sales-point";

type SalesPointStateProps = {
  tabName: string;
  setTabName: (tabName: string) => void;
  menuNav: any[];
  tabsContents: any;
};

const SalesPointStore = create<SalesPointStateProps>((set) => ({
  tabName: TAB_KEYS.ORDER,
  setTabName: (tabName: string) => set({ tabName }),
  menuNav: SALES_POINT_NAV,
  tabsContents: CONTENTS,
}));

const useSalesPointState = () => useStore(SalesPointStore);

export default useSalesPointState;
