import { getSession } from "@/actions/user";
import { Input } from "@/components/Input";
import Logo from "@/components/Logo";
import SignInForm from "@/components/SignInForm";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export const metadata: Metadata = {
  title: "Masuk - dudukberbagi",
};

export default async function SignInPage() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

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
          <SignInForm />

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
