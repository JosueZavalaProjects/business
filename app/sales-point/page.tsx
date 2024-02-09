"use client";
import { CONTENTS } from "@/constants/sales-point";

import useSalesPointState from "../components/modules/sales-point/states/sales-point-state";
import { TabSelection } from "../components/modules/sales-point/tab-selection";
import { SimpleTabs } from "../components/UI/simple-tabs/tabs-component";

export default function SalesPointPage() {
  const { tabsContents } = useSalesPointState();

  /* const tabsContents = CONTENTS; */
  return (
    <div className="grid">
      <TabSelection />
      <SimpleTabs tabsContents={tabsContents} />
    </div>
  );
}
