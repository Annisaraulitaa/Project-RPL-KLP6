import Image from "next/image";
import React from "react";
import { THeroProps } from "@/assets/types/layouts/THero";

export default function Hero({ heroContent, image }: THeroProps) {
  return (
    <section className="relative flex h-screen w-full flex-col">
      <Image
        src={image}
        alt={heroContent}
        priority
        className="absolute -z-10 h-full w-full object-cover"
      />

      <h2 className="flex flex-1 select-none items-center justify-center text-center text-5xl font-bold uppercase leading-normal text-neutral-50">
        {heroContent}
      </h2>
    </section>
  );
}
