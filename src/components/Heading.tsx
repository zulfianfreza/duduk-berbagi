"use client";
import React from "react";

interface HeadingProps {
  title: string;
}

export default function Heading({ title }: HeadingProps) {
  return <h1 className=" text-gray-800 font-semibold text-lg">{title}</h1>;
}
