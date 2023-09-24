import { Input } from "@/components/Input";
import Logo from "@/components/Logo";
import { Metadata } from "next";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export const metadata: Metadata = {
  title: "Masuk - dudukberbagi",
};

export default function SignInPage() {
  return (
    <div className=" w-full h-screen relative bg-gray-100 flex">
      <div className=" md:w-[398px] lg:w-[480px] xl:w-[542px] h-full bg-[url('/images/sign-in-image.jpg')] bg-cover bg-center absolute brightness-[0.25]"></div>
      <div className=" md:w-[342px] lg:w-[424px] xl:w-[486px] hidden md:block"></div>
      <div className=" flex-1 w-full h-full bg-white md:rounded-tl-[60px] flex items-center justify-center py-16 relative px-5">
        <Logo className=" absolute top-5 left-5 md:top-10 md:left-10" />
        <div className=" max-w-xl w-full flex flex-col">
          <div className=" flex flex-col">
            <p className=" text-sm text-gray-800">
              Kami menantikan kedatangan anda.
            </p>
            <h1 className=" text-gray-800 text-2xl font-semibold">
              Masuk ke dudukberbagi
            </h1>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <Input label="Email" />
            <Input label="Password" />
            <p className=" text-sm text-gray-800 underline">Lupa password?</p>
            <button className=" w-full h-12 rounded-xl bg-orange-500 text-white text-sm flex justify-center items-center">
              Masuk
            </button>
          </div>

          <p className=" text-sm text-center mt-4">atau masuk dengan</p>

          <div className=" flex justify-center mt-4">
            <button className=" h-12 border border-gray-300 aspect-square rounded-xl flex justify-center items-center">
              <FcGoogle size={20} />
            </button>
          </div>

          <p className=" text-center mt-8 text-sm text-gray-800">
            Belum punya akun?{" "}
            <Link href="/sign-up" className=" underline">
              Daftar disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
