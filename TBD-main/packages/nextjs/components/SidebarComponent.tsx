"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { useWeb3AuthConnectorInstance } from "@/hooks/useWeb3AuthConnectorInstance";
import { IconArrowLeft, IconBrandTabler, IconUserBolt } from "@tabler/icons-react";

export function SidebarComponent() {
  const router = useRouter();
  const { web3AuthInstance } = useWeb3AuthConnectorInstance();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isWeb3AuthConnected = web3AuthInstance && web3AuthInstance.status === "connected";

  const logout = async () => {
    if (isWeb3AuthConnected) {
      await web3AuthInstance.logout();
    }
    router.push("/");
  };

  const links = [
    {
      label: "Dashboard",
      icon: <IconBrandTabler className="text-wheat h-7 w-7 flex-shrink-0" />,
      onClick: () => router.push("/dashboard"),
    },
    {
      label: "Marketplace",
      icon: <IconUserBolt className="text-wheat h-7 w-7 flex-shrink-0" />,
      onClick: () => router.push("/marketplace"),
    },

    {
      label: "Logout",
      icon: <IconArrowLeft className="text-wheat h-6 w-6 flex-shrink-0" />,
      onClick: () => logout(),
    },
  ];
  return (
    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} animate>
      <SidebarBody className="bg-gray-900 h-screen border-r border-gray-800 flex flex-col gap-6 py-6">
        <div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <SidebarLink
              key={index}
              link={link}
              className="hover:bg-gray-800 transition-colors  mr-10 py-2 rounded-lg"
            />
          ))}
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
