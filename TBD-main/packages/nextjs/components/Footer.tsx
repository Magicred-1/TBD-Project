"use client";

import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

export const Footer = () => {

  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">

      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                Built with <HeartIcon className="inline-block h-4 w-4" /> at
              </p>
              <a
                className="flex justify-center items-center gap-1"
                href="https://www.xrpl-commons.org/"
                target="_blank"
                rel="noreferrer"
              >
                {/* <BuidlGuidlLogo className="w-3 h-5 pb-1" /> */}
                <span className="link">XRPL Commons</span>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
