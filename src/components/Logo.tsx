"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(" text-gray-800 text-xl transition", className)}
    >
      duduk<span className=" text-orange-500 font-semibold">berbagi</span>
    </Link>
  );
}
