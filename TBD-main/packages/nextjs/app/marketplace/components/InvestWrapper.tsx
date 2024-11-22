import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { items } from "../constants";

const InvestWrapper = () => {
  return (
      <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-[24px] text-wheat font-bold my-2">Marketplace</h1>
        <HoverEffect items={items} />
</div>
  );
};

export default InvestWrapper;
