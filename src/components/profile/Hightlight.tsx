"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { LuCalendar, LuHeartHandshake } from "react-icons/lu";
import { RiMegaphoneLine } from "react-icons/ri";

interface HightlightProps {
  className?: string;
}

export default function Hightlight({ className }: HightlightProps) {
  return (
    <div className={cn(" w-72 md:w-96", className)}>
      <h1 className=" text-gray-800 text-lg font-medium">Sorotan</h1>
      <div className=" mt-4 flex flex-col gap-2">
        <div className=" flex gap-2 items-center">
          <div className=" w-8 flex justify-center items-center aspect-square bg-gray-200 rounded-full">
            <RiMegaphoneLine className=" text-gray-800" size={16} />
          </div>
          <p className=" text-gray-800 text-sm">2 Kampanye</p>
        </div>
        <div className=" flex gap-2 items-center">
          <div className=" w-8 flex justify-center items-center aspect-square bg-gray-200 rounded-full">
            <LuHeartHandshake className=" text-gray-800" size={16} />
          </div>
          <p className=" text-gray-800 text-sm">5 Donasi</p>
        </div>
        <div className=" flex gap-2 items-center">
          <div className=" w-8 flex justify-center items-center aspect-square bg-gray-200 rounded-full">
            <LuCalendar className=" text-gray-800" size={16} />
          </div>
          <p className=" text-gray-800 text-sm">Bergabung 1 September 2023</p>
        </div>
      </div>
    </div>
  );
}
