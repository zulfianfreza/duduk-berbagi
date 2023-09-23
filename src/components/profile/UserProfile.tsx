"use client";
import { LuPlus } from "react-icons/lu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { SiFacebook, SiLinkedin } from "react-icons/si";

export default function UserProfile() {
  return (
    <div className=" flex gap-4 items-center">
      <Avatar className=" h-20 w-20">
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <div className=" flex flex-col">
        <h1 className=" text-gray-800 text-2xl font-semibold">
          Muhammad Sabian Reza
        </h1>
        <div className="flex items-center gap-2">
          <div className=" h-8 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
            <SiFacebook className=" text-gray-800" />
          </div>
          <div className=" h-8 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
            <SiLinkedin className=" text-gray-800" />
          </div>
          <div className=" h-8 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
            <LuPlus className=" text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
