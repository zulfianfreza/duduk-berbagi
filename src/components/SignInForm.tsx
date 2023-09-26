"use client";

import React from "react";
import { Input } from "./Input";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  return (
    <div className="flex flex-col mt-8">
      <div className="">
        <Input label="Email" />
      </div>
      <div className=" mt-2">
        <Input label="Password" />
      </div>
      <div className=" mt-4">
        <p className=" text-sm text-gray-800 underline">Lupa password?</p>
      </div>
      <Button className=" mt-4">Masuk</Button>
      <p className=" text-sm text-center mt-4">atau masuk dengan</p>

      <div className=" flex justify-center mt-4">
        <button
          onClick={() => signIn("google")}
          className=" h-12 border border-gray-300 aspect-square rounded-xl flex justify-center items-center"
        >
          <FcGoogle size={20} />
        </button>
      </div>
    </div>
  );
}
