import Heading from "@/components/Heading";
import SupportItem from "@/components/SupportItem";
import Sidebar from "@/components/detail-campaign/Sidebar";
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

          <Sidebar className=" flex lg:hidden w-full border-none p-0 mt-8 shadow-none static" />

          <div className=" pr-0 xl:pr-16">
            <div className="flex flex-col mt-8">
              <Heading title="Penggalang Dana" />
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
              <Heading title="Cerita Penggalangan Dana" />
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
                <Heading title="Doa-doa dan Dukungan #orangbaik" />
                <div className=" mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SupportItem />
                  <SupportItem />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar className=" lg:w-80 xl:w-96" />
      </div>
    </div>
  );
}
