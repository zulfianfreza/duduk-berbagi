"use client";

import { cn } from "@/lib/utils";
import { LuHeartHandshake, LuShare2, LuTrendingUp } from "react-icons/lu";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        " w-96 border rounded-xl p-5 lg:flex flex-col shadow-lg sticky top-28 hidden",
        className
      )}
    >
      <h1 className=" text-orange-500 font-medium text-lg">Rp32.680.900</h1>
      <p className=" text-gray-500 text-sm">
        Terkumpul dari{" "}
        <span className=" text-gray-800 font-semibold">Rp100.000.000</span>
      </p>
      <div className=" mt-2">
        <Progress value={42} />
      </div>
      <div className=" mt-2 text-end">
        <p className=" text-gray-500 text-sm">16 hari lagi</p>
      </div>
      <div className=" mt-4 flex flex-col gap-4">
        {/* TOTAL DONATION */}
        <div className=" flex items-center gap-4">
          <div className=" w-12 aspect-square rounded-full bg-gray-200 flex justify-center items-center">
            <LuHeartHandshake size={24} className=" text-gray-800" />
          </div>
          <div className=" flex flex-col">
            <p className=" text-gray-500 text-sm">Total Donasi</p>
            <h1 className=" text-gray-800 font-semibold">1.029</h1>
          </div>
        </div>

        {/* TOP DONATION */}
        <div className=" flex items-center gap-4">
          <div className=" w-12 aspect-square rounded-full bg-gray-200 flex justify-center items-center">
            <LuTrendingUp size={24} className=" text-gray-800" />
          </div>
          <div className=" flex flex-col">
            <p className=" text-gray-500 text-sm">Donasi Tertinggi</p>
            <h1 className=" text-gray-800 font-semibold">
              Rp1.000.000 •{" "}
              <span className=" font-normal text-sm">(Orang Baik)</span>
            </h1>
          </div>
        </div>
      </div>

      <div className=" mt-4 flex flex-col gap-2">
        <Button className=" gap-1 text-gray-800" variant="outline">
          <LuShare2 />
          Bagikan
        </Button>
        <Button>Donasi Sekarang</Button>
      </div>
    </div>
  );
}
