"use client";

import { create, useStore } from "zustand";

import { CONTENTS, SALES_POINT_NAV, TAB_KEYS } from "@/constants/sales-point";
import { NavOptions, TabContent } from "@/types/UI/common";

type SalesPointStateProps = {
  tabName: string;
  setTabName: (tabName: string) => void;
  menuNav: NavOptions[];
  tabsContents: TabContent;
};

const SalesPointStore = create<SalesPointStateProps>((set) => ({
  tabName: TAB_KEYS.ORDER,
  setTabName: (tabName: string) => set({ tabName }),
  menuNav: SALES_POINT_NAV,
  tabsContents: CONTENTS,
}));

const useSalesPointState = () => useStore(SalesPointStore);

export default useSalesPointState;
