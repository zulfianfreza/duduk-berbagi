"use client";

import { cn } from "@/lib/utils";
import { LuHeartHandshake, LuShare2, LuTrendingUp } from "react-icons/lu";

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
        <div className=" w-full h-[6px] rounded-full overflow-hidden bg-gray-200">
          <div
            className=" h-full rounded-full bg-orange-500"
            style={{ width: "42%" }}
          ></div>
        </div>
      </div>
      <div className=" mt-2 text-end">
        <p className=" text-gray-500 text-sm">16 hari lagi</p>
      </div>
      <div className=" mt-8 flex flex-col gap-4">
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

      <div className=" mt-8 flex flex-col gap-2">
        <button className=" w-full rounded-lg border border-orange-500 text-gray-800 gap-1 flex justify-center items-center text-sm h-12">
          <LuShare2 />
          Bagikan
        </button>
        <button className=" w-full rounded-lg bg-orange-500 text-white flex justify-center items-center text-sm h-12">
          Donasi Sekarang
        </button>
      </div>
    </div>
  );
}
