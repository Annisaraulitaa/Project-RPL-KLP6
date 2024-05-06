import React from "react";
import Image from "next/image";
import { user } from "@/assets/mockImages";
import ProfileCard from "@/components/ProfileCard";

export default function Profile() {
  return (
    <section className="flex h-full w-full justify-between px-44 py-16">
      <div className="flex w-fit flex-col gap-9">
        <Image src={user} alt="" width={250} height={250} />

        <div className="rounded-xl border-2 border-black py-4 text-center text-lg">
          <p>Nama</p>
        </div>
      </div>

      <ProfileCard />
    </section>
  );
}
