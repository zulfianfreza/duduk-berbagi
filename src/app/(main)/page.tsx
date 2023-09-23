import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <div className=" w-full h-screen relative bg-[url('/images/hero.jpg')] bg-cover">
        <div className=" w-full h-full bg-black/75 flex items-center">
          <div className="flex flex-col justify-center container mx-auto items-start">
            <p className=" text-orange-500">#mulaidarisekarang</p>
            <h1 className=" text-[72px] text-white leading-tight font-bold">
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

      <div className=" container mx-auto mt-16">
        <div className="flex">
          <h1 className=" text-gray-800 text-lg font-medium">
            Penggalangan Dana
          </h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {[1, 1, 1, 1].map((_, index) => (
            <Link
              href="/campaign/mushaf"
              key={index}
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
                  <p className=" text-orange-500 text-lg font-medium">
                    Rp32.682.900
                  </p>
                </div>
                <div className=" mt-2">
                  <div className=" w-full h-[6px] rounded-full overflow-hidden bg-gray-200">
                    <div
                      className=" h-full rounded-full bg-orange-500"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
