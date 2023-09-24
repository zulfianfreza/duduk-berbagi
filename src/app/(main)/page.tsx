import CampainItem from "@/components/CampainItem";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Hero />

      <div className=" container mx-auto mt-16">
        <div className="flex">
          <h1 className=" text-gray-800 text-lg font-medium">
            Penggalangan Dana
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
          {[1, 1, 1, 1].map((_, index) => (
            <CampainItem key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
