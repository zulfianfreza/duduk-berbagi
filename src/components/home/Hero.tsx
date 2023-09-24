"use client";

import React from "react";

export default function Hero() {
  return (
    <div className=" w-full h-screen relative bg-[url('/images/hero.jpg')] bg-cover">
      <div className=" w-full h-full bg-black/75 flex items-center">
        <div className="flex flex-col justify-center container mx-auto items-start">
          <p className=" text-orange-500">#mulaidarisekarang</p>
          <h1 className=" text-[48px] md:text-[60px] lg:text-[72px] text-white leading-tight font-bold">
            Mari menjadi bagian
            <br />
            dari perubahan
          </h1>
          <p className=" text-white max-w-3xl mt-4">
            Dalam setiap langkah kecil kita, terdapat peluang besar untuk
            mengubah hidup. Temukan kekuatan Anda untuk berbagi, berikan
            harapan, dan bersama kita bisa menciptakan perubahan yang luar
            biasa.
          </p>
          <button className=" rounded-full mt-8 px-4 h-10 text-white text-sm flex justify-center items-center bg-orange-500">
            Donasi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
