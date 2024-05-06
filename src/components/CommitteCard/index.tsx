import React from "react";
import Image from "next/image";
import { TCommite } from "@/assets/types/Components/TCommite";

export default function CommitteCard({name, position, image}: TCommite) {
  return (
    <section className="flex w-fit flex-col gap-6 rounded-2xl bg-gray-200 p-14">
      <Image src={image} alt={name} width={300} height={300} />

      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-xl font-bold">{position}</h3>
        <p className="text-lg">{name}</p>
      </div>
    </section>
  );
}
