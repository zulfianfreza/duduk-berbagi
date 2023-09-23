import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import {
  LuHeartHandshake,
  LuShare2,
  LuTrendingUp,
  LuUserCircle2,
} from "react-icons/lu";

export default function CampaignDetailPage() {
  return (
    <div className=" container mx-auto mt-28">
      <h1 className=" text-[36px] font-semibold text-gray-800">
        1 Huruf 10 Kebaikan Investasi Pahala Sedekah Quran
      </h1>
      <div className=" mt-4 flex gap-5 items-start">
        <div className=" flex-1">
          <div className=" w-full aspect-video relative rounded-xl overflow-hidden">
            <Image
              src="/images/campaign-1.png"
              fill
              alt="campaign-1"
              className=" object-cover"
            />
          </div>
          <p className=" text-gray-500 mt-2">
            <span className=" text-gray-800 font-medium">Dibuat:</span> 16
            September 2023
          </p>

          <div className=" pr-16">
            <div className="flex flex-col mt-8">
              <h1 className=" text-gray-800 font-semibold text-lg">
                Penggalang Dana
              </h1>
              <div className=" flex gap-4 mt-2 items-center">
                <Avatar className=" w-16 h-16">
                  <AvatarFallback className=" bg-gray-200">JR</AvatarFallback>
                </Avatar>
                <div className=" flex flex-col">
                  <h1 className=" text-gray-800 font-medium">
                    Masjid Nusantara
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-8">
              <h1 className=" text-gray-800 font-semibold text-lg">
                Cerita Penggalangan Dana
              </h1>
              <p className=" text-sm mt-2 text-gray-800">
                Assalamu&apos;alaikum saudara-saudari yang baik hati,
                <br />
                <br />
                Kami adalah sebuah komunitas kecil yang berkomitmen untuk
                memperluas pengetahuan tentang Alquran dan ajarannya yang mulia.
                Di masa kini, kita semua tahu betapa pentingnya ilmu dan
                pemahaman yang benar tentang kitab suci kita, Alquran. Kitab ini
                adalah cahaya bagi kita, membimbing kita dalam setiap langkah
                hidup kita.
                <br />
                <br />
                Namun, sayangnya, masih banyak saudara-saudari kita yang kurang
                beruntung yang tidak memiliki akses ke salinan Alquran mereka
                sendiri. Tidak hanya itu, ada juga mereka yang ingin memahami
                isi Alquran dengan lebih dalam tetapi tidak memiliki sumber daya
                atau bantuan yang cukup untuk melakukannya. <br />
                <br />
                Dalam upaya untuk membantu mereka yang kurang beruntung dan
                mempromosikan pemahaman yang benar tentang Alquran, kami telah
                memulai proyek &quot;Sedekah Alquran.&quot; Dengan dana yang
                kami kumpulkan, kami akan menyediakan Alquran gratis kepada
                mereka yang membutuhkannya, serta mendukung program belajar dan
                pengajaran Alquran di komunitas yang kurang beruntung. <br />
                <br /> Setiap sedekah yang Anda berikan akan membawa cahaya dan
                ilmu kepada mereka yang belum memiliki kesempatan ini. Berapapun
                yang Anda sumbangkan, itu akan membantu dalam usaha mulia ini.
                Bersama, kita bisa menjadikan Alquran lebih terjangkau dan dapat
                diakses oleh semua orang. <br />
                <br /> Mari bergabung bersama kami dalam proyek ini dan menjadi
                bagian dari perubahan yang membawa manfaat dan kedekatan kepada
                Allah SWT. Semua donasi Anda akan digunakan untuk mencetak dan
                mendistribusikan Alquran, serta mendukung program-program
                pendidikan Alquran di komunitas yang membutuhkan. Terima kasih
                atas dukungan Anda. Bersama-sama, kita akan membawa manfaat dan
                pengetahuan Alquran kepada mereka yang membutuhkannya. <br />
                <br />
                Jazakumullah khairan katsiran.
              </p>

              <div className="flex flex-col mt-8">
                <h1 className=" text-gray-800 font-semibold text-lg">
                  Doa-doa dan Dukungan #orangbaik
                </h1>
                <div className=" mt-2 grid grid-cols-2 gap-4">
                  <div className=" w-full p-4 shadow-lg rounded-xl border">
                    <div className=" flex items-center gap-4">
                      <Avatar className=" h-12 w-12">
                        <AvatarFallback className=" bg-gray-200">
                          <LuUserCircle2 size={24} className="text-gray-800" />
                        </AvatarFallback>
                      </Avatar>
                      <div className=" flex flex-col">
                        <h1 className=" text-gray-800 font-medium">
                          Sabian Hasbullah
                        </h1>
                        <p className=" text-gray-500 text-xs">
                          16 menit yang lalu
                        </p>
                      </div>
                    </div>
                    <div className=" mt-4">
                      <p className=" text-gray-800 text-sm">
                        YaAllah perbaikilah takdir hamba aamiin
                      </p>
                    </div>
                  </div>
                  <div className=" w-full p-4 shadow-lg rounded-xl border">
                    <div className=" flex items-center gap-4">
                      <Avatar className=" h-12 w-12">
                        <AvatarFallback className=" bg-gray-200">
                          <LuUserCircle2 size={24} className="text-gray-800" />
                        </AvatarFallback>
                      </Avatar>
                      <div className=" flex flex-col">
                        <h1 className=" text-gray-800 font-medium">
                          Sabian Hasbullah
                        </h1>
                        <p className=" text-gray-500 text-xs">
                          1 jam yang lalu
                        </p>
                      </div>
                    </div>
                    <div className=" mt-4">
                      <p className=" text-gray-800 text-sm">
                        bismillahhirrohmanirrohim semoga menjadi berkah aamiin,
                        mohon doanya semoga saya dilancarkan perkuliahannya,
                        dimudahkan dalam menghadapi dosen, asisten, dan lainnya
                        aamiin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-96 border rounded-xl p-5 flex flex-col shadow-lg sticky top-28">
          <h1 className=" text-orange-500 font-medium text-lg">Rp32.680.900</h1>
          <p className=" text-gray-500 text-sm">
            Terkumpul dari{" "}
            <span className=" text-gray-800 font-semibold">Rp100.000.000</span>
          </p>
          <div className=" mt-2">
            <div className=" w-full h-[6px] rounded-full overflow-hidden bg-gray-200">
              <div
                className=" h-full rounded-full bg-orange-500"
                style={{ width: "42%" }}
              ></div>
            </div>
          </div>
          <div className=" mt-2 text-end">
            <p className=" text-gray-500 text-sm">16 hari lagi</p>
          </div>
          <div className=" mt-8 flex flex-col gap-4">
            {/* TOTAL DONATION */}
            <div className=" flex items-center gap-4">
              <div className=" w-12 aspect-square rounded-full bg-gray-200 flex justify-center items-center">
                <LuHeartHandshake size={24} className=" text-gray-800" />
              </div>
              <div className=" flex flex-col">
                <p className=" text-gray-500 text-sm">Total Donasi</p>
                <h1 className=" text-gray-800 font-semibold">1.029</h1>
              </div>
            </div>

            {/* TOP DONATION */}
            <div className=" flex items-center gap-4">
              <div className=" w-12 aspect-square rounded-full bg-gray-200 flex justify-center items-center">
                <LuTrendingUp size={24} className=" text-gray-800" />
              </div>
              <div className=" flex flex-col">
                <p className=" text-gray-500 text-sm">Donasi Tertinggi</p>
                <h1 className=" text-gray-800 font-semibold">
                  Rp1.000.000 •{" "}
                  <span className=" font-normal text-sm">(Orang Baik)</span>
                </h1>
              </div>
            </div>
          </div>

          <div className=" mt-8 flex flex-col gap-2">
            <button className=" w-full rounded-lg border border-orange-500 text-gray-800 gap-1 flex justify-center items-center text-sm h-12">
              <LuShare2 />
              Bagikan
            </button>
            <button className=" w-full rounded-lg bg-orange-500 text-white flex justify-center items-center text-sm h-12">
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
