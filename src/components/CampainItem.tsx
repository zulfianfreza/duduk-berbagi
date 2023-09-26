"use client";

import Image from "next/image";
import Link from "next/link";
import { Progress } from "./ui/progress";

export default function CampainItem() {
  return (
    <Link
      href="/campaign/mushaf"
      className=" w-full rounded-xl overflow-hidden shadow-lg"
    >
      <div className=" w-full aspect-video relative">
        <Image
          src="/images/campaign-1.png"
          fill
          alt="campaign-1"
          className=" object-cover"
        />
      </div>
      <div className=" p-4 flex flex-col">
        <p className=" text-gray-500 text-sm">Masjid Nusantara</p>
        <h1 className=" text-gray-800 font-medium mt-2">
          1 Huruf 10 Kebaikan Investasi Pahala Sedekah Quran
        </h1>
        <div className=" flex mt-2 justify-between items-center">
          <p className=" text-sm text-gray-500">Terkumpul</p>
          <p className=" text-orange-500 text-lg font-medium">Rp32.682.900</p>
        </div>
        <div className=" mt-2">
          <Progress value={42} />
        </div>
      </div>
    </Link>
  );
}
