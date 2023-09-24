"use client";

import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { LuUserCircle2 } from "react-icons/lu";

export default function SupportItem() {
  return (
    <div className=" w-full p-4 shadow-lg rounded-xl border">
      <div className=" flex items-center gap-4">
        <Avatar className=" h-12 w-12">
          <AvatarFallback className=" bg-gray-200">
            <LuUserCircle2 size={24} className="text-gray-800" />
          </AvatarFallback>
        </Avatar>
        <div className=" flex flex-col">
          <h1 className=" text-gray-800 font-medium">Sabian Hasbullah</h1>
          <p className=" text-gray-500 text-xs">16 menit yang lalu</p>
        </div>
      </div>
      <div className=" mt-4">
        <p className=" text-gray-800 text-sm">
          YaAllah perbaikilah takdir hamba aamiin
        </p>
      </div>
    </div>
  );
}
