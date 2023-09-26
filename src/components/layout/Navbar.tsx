"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn, getInitialName } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import Logo from "../Logo";
import { Button } from "../ui/button";
import useUserStore from "@/store/userStore";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "@prisma/client";

interface NavbarProps {
  user: User | null | undefined;
}
export default function Navbar({ user }: NavbarProps) {
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

      {user ? (
        <div className="flex items-center gap-2">
          <p className=" text-white">Halo, {user.name}</p>
          <div className=" w-10 aspect-square rounded-full relative overflow-hidden">
            <Image
              src={
                user?.profileImage && user.profileImage !== ""
                  ? user.profileImage
                  : user?.image ??
                    `https://robohash.org/${user?.name}.png?set=set5`
              }
              alt="avatar"
              fill
              className=" object-cover"
            />
          </div>
        </div>
      ) : (
        <div className=" flex gap-2">
          <Button asChild size="sm" rounded="lg" variant="outline">
            <Link href="/sign-in">Masuk</Link>
          </Button>
          <Button asChild size="sm" rounded="lg">
            <Link href="/sign-in">Daftar</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
