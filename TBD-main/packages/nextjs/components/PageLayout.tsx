"use client";

import { useRouter } from "next/navigation";
// import { SidebarComponent } from "@/components/SidebarComponent";
import { useXRPL } from "./web3auth/XRPLProvider/useXRPL";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isConnected } = useXRPL();

  if (!isConnected) {
    router.push("/");
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gradient-to-l from-gray-900 to-black">{children}</div>
    </div>
  );
};

export default PageLayout;
