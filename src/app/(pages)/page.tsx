import React from "react";
import { Hero } from "@/layouts";
import { heroData } from "@/constants/layouts/HeroConstants";
import Image from "next/image";
import { goal } from "@/assets/images";
import { newsMock } from "@/mockData/newsMock";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-center">
        <Hero
          heroContent={heroData.home.heroContent}
          image={heroData.home.image}
        />

        <div className="flex w-full flex-col items-center gap-6 px-40 py-6">
          <p className="font-bold text-gray-600">HOME</p>
          <div className="flex flex-col items-center">
            <p className="text-shadow-lg flex text-4xl font-bold text-gray-600">
              SELAMAT DATANG DI
            </p>
            <p className="text-shadow-lg flex text-4xl font-bold text-gray-600">
              <span className="text-reddish-brown">PADUAN SUARA&nbsp;</span>
              MAHASISWA UNIVERSITAS
            </p>
            <p className="text-shadow-lg flex text-4xl font-bold text-reddish-brown">
              HASANUDDIN
            </p>
          </div>
          <p className="text-shadow-lg px-48 text-justify text-xl">
            <span className="font-bold">PSM UNHAS&nbsp;</span>DIDIRIKAN PADA
            1978, MULAI SEBAGAI PARTISIPAN DALAM FESTIVAL PADUAN SUARA MAHASISWA
            NASIONAL DI JAKARTA. PADA 1980-1990-AN, BERKEMBANG MENJADI UKM DI
            BAWAH UKM SENI MUSIK, DAN PADA 22 JUNI 1998, MENJADI UNIT MANDIRI
            BERDASARKAN SURAT KEPUTUSAN REKTOR. DENGAN LEBIH DARI 100 ANGGOTA,
            PSM UNHAS AKTIF DALAM ACARA PROTOKOLER DAN NON-PROTOKOLER DI DALAM
            DAN LUAR KAMPUS, MEMBUATNYA MENJADI UKM YANG PENTING DI UNIVERSITAS
            HASANUDDIN. SAAT INI, PSM UNHAS MENDUDUKI PERINGKAT 8 DUNIA DALAM
            KATEGORI FOLKLORE DI INTERKULTUR WORLD RANKINGS.
          </p>
          <p className="text-shadow-lg flex text-3xl font-bold text-reddish-brown">
            NOBODY SINGS LIKE US ♫
          </p>
          <div className="flex w-full border-t-2"></div>
        </div>

        <div className="flex w-full flex-col items-center gap-6 bg-reddish-brown px-40 py-12">
          <Image src={goal} alt="PSM Unhas" width={600} height={400} />
          <p className="text-shadow-lg flex text-3xl font-bold text-white">
            TUJUAN <span className="text-black">&nbsp;PSM&nbsp;</span>UNHAS
          </p>
          <p className="text-shadow-lg px-48 text-justify text-xl text-white">
            <span className="font-bold">PSM UNHAS&nbsp;</span>
            BERTUJUAN UNTUK MENAMPUNG KREATIVITAS MAHASISWA KHUSUSNYA DI BIDANG
            OLAH VOKAL DAN MUSIK TIDAK HANYA UNTUK KOMPOSISI PADUAN SUARA DAN
            VOCAL GROUP. NAMUN JUGA DALAM BENTUK NYANYI SOLO. BAIK ITU JENIS
            POP. DANGDUT. KERONCONG, DAN SERIOSA, SERTA DIHARAPKAN JUGA
            MAHASISWA YANG PUNYA KEAHLIAN MEMAINKAN ALAT MUSIK DAPAT BERGABUNG
            BAIK ITU PIANO. KEYBOARD. GITAR. PERKUSI, DAN LAIN-LAIN YANG KEDEPAN
            DIHARAPKAN AKAN TERBENTUK PULA BAND PSM UNHAS
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 px-40 py-12">
          <div className="relative flex w-full justify-center">
            <p className="text-shadow-lg flex text-4xl font-bold text-reddish-brown">
              BERITA
            </p>
            <a href="/about/news">
              <button className="absolute right-0 flex rounded-xl border-2 p-2">
                <p>BACA BERITA LEBIH LANJUT -&gt;</p>
              </button>
            </a>
          </div>

          <div className="flex gap-40">
            {newsMock.slice(0, 2).map((news, index) => (
              <NewsSection key={index} {...news} />
            ))}
          </div>
          <div className="flex w-full border-t-2"></div>
        </div>

        <div className="flex w-full flex-col gap-6 bg-reddish-brown px-40 py-12">
          <div className="relative flex w-full justify-start">
            <p className="text-shadow-lg flex text-4xl font-bold text-white">
              PENGHARGAAN
            </p>
            <a href="/about/achievements">
              <button className="absolute right-0 flex rounded-xl border-2 p-2 text-white">
                <p>PRESTASI PSM UNHAS -&gt;</p>
              </button>
            </a>
          </div>
          <p className="text-3xl">&emsp;PSM UNHAS</p>
          <div className="flex gap-6">
            <Image src={goal} alt="PSM Unhas" width={600} height={400} />
            <div className="grid grid-cols-3 justify-items-end gap-4">
              <div className="flex flex-col place-items-center p-8 text-white">
                <p className="text-4xl font-bold">00+</p>
                <p>PRESTASI</p>
              </div>
              <div className="flex flex-col place-items-center p-8 text-white">
                <p className="text-4xl font-bold">00+</p>
                <p>NEGARA</p>
              </div>
              <div className="flex flex-col place-items-center p-8 text-white">
                <p className="text-4xl font-bold">00+</p>
                <p>KOSTUM</p>
              </div>
              <div className="flex flex-col place-items-center p-8 text-white">
                <p className="text-4xl font-bold">00+</p>
                <p>PELATIH</p>
              </div>
              <div className="flex flex-col place-items-center p-8 text-white">
                <p className="text-4xl font-bold">00+</p>
                <p>MEMBER</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6 px-40 py-12">
          <div className="flex w-full border-b-2"></div>
          <div className="relative flex w-full justify-center">
            <p className="text-shadow-lg flex text-4xl font-bold text-reddish-brown">
              GALERI
            </p>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="grid grid-cols-2 gap-6">
              <Image src={goal} alt="PSM Unhas" width={450} height={300} />
              <Image src={goal} alt="PSM Unhas" width={450} height={300} />
              <Image src={goal} alt="PSM Unhas" width={450} height={300} />
              <Image src={goal} alt="PSM Unhas" width={450} height={300} />
            </div>
            <a href="/about/gallery">
              <button className="rounded-xl border-2 p-2">
                <p>LIHAT LEBIH LANJUT -&gt;</p>
              </button>
            </a>
          </div>

          <div className="flex w-full border-t-2"></div>
        </div>
      </section>
    </>
  );
}
