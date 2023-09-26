"use client";

import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import Logo from "../Logo";

export default function Footer() {
  return (
    <div className=" w-full mt-16 flex justify-center py-8">
      <div className=" flex flex-col items-center">
        <Logo />
        <div className="flex items-center gap-2 justify-center mt-2">
          <button className=" h-8 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
            <SiFacebook className=" text-gray-800" />
          </button>
          <button className=" h-8 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
            <SiLinkedin className=" text-gray-800" />
          </button>
          <button className=" h-8 aspect-square bg-gray-200 rounded-full flex justify-center items-center">
            <SiInstagram className=" text-gray-800" />
          </button>
        </div>
        <p className=" text-center mt-4 text-sm text-gray-800">
          Copyright &copy; 2023 dudukberbagi.
        </p>
      </div>
    </div>
  );
}
