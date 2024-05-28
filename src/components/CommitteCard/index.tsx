import React from "react";
import Image from "next/image";
import { TCommite } from "@/assets/types/Components/TCommite";

export default function CommitteCard({ name, position, image }: TCommite) {
  return (
    <section className="flex w-64 flex-col gap-6 overflow-hidden rounded-2xl bg-gray-100 pb-9">
      <Image src={image} alt={name} className="w-full" />

      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-xl font-bold">{position}</h3>
        <p className="text-lg">{name}</p>
      </div>
    </section>
  );
}
