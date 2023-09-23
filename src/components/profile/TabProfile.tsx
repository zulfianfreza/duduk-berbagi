"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function TabProfile() {
  const TAB_MENU = [
    {
      label: "Tentang",
      path: "/profile",
      active: null,
    },
    {
      label: "Penggalangan Dana",
      path: "/profile/campaign",
      active: "campaign",
    },
    {
      label: "Donasi",
      path: "/profile/donation",
      active: "donation",
    },
    {
      label: "Dukungan",
      path: "/profile/support",
      active: "support",
    },
  ];
  const pathname = usePathname();
  return (
    <div className=" flex border-b gap-1 w-full flex-1 mt-4 overflow-x-scroll [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {TAB_MENU.map((menu, index) => {
        const isActive = pathname.split("/")[2] == menu.active;
        return (
          <Link
            key={index}
            href={menu.path}
            className={cn(
              " px-4 relative h-12 text-sm w-fit text-center flex transition text-gray-500 items-center justify-center",
              { "text-gray-800": isActive },
              { "hover:bg-gray-100 rounded-lg": !isActive }
            )}
          >
            {menu.label}
            {isActive && (
              <div className=" h-[3px] absolute bottom-0 w-full rounded-t bg-orange-500"></div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
