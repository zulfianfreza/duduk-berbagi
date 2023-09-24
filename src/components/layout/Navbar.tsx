"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import Logo from "../Logo";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();
  return (
    <div
      className={cn(
        " px-8 py-5 flex w-full justify-between fixed top-0 z-10 items-center transition",
        {
          "bg-white/90 backdrop-blur-sm border-b shadow-sm": scrollPosition > 0,
        },
        { " bg-white": pathname != "/" }
      )}
    >
      <div className=" flex items-center gap-16">
        <Logo
          className={cn(
            {
              "text-white": pathname == "/",
            },
            {
              "text-gray-800": scrollPosition > 0,
            }
          )}
        />
        <div className=" md:flex items-center gap-x-2 hidden">
          <Link
            href="/"
            className={cn(
              " text-gray-800 text-sm  px-4 py-2.5 hover:bg-gray-100 rounded-lg",
              { "text-white hover:text-gray-800": pathname == "/" },
              {
                "text-gray-800": scrollPosition > 0,
              }
            )}
          >
            Beranda
          </Link>
          <Link
            href="/"
            className={cn(
              " text-gray-800 flex text-sm items-center gap-1  px-4 py-2.5 hover:bg-gray-100 rounded-lg",
              { "text-white hover:text-gray-800": pathname == "/" },
              {
                "text-gray-800": scrollPosition > 0,
              }
            )}
          >
            <FiSearch />
            <p>Cari Kampanye</p>
          </Link>
        </div>
      </div>

      <div className=" flex gap-2">
        <Link
          href="/sign-in"
          className=" h-10 rounded-lg text-sm text-orange-500 px-4 flex justify-center items-center border border-orange-500"
        >
          Masuk
        </Link>
        <Link
          href="/sign-up"
          className=" h-10 rounded-lg text-sm text-white px-4 flex justify-center items-center bg-orange-500"
        >
          Daftar
        </Link>
      </div>
    </div>
  );
}
