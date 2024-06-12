"use client"

import React, { useState, useEffect } from "react";
import { Hero } from "@/layouts";
import { heroData } from "@/constants/layouts/HeroConstants";
import Image from "next/image";
import { goal } from "@/assets/images";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  interface News {
    id: string;
    title: string;
    content: string;
    photo_url: string;
  }

  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteNewsId, setDeleteNewsId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          "https://psm-rpl.up.railway.app/api/v1/news"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data.data);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching news:", error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://psm-rpl.up.railway.app/api/v1/news/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete news");
      }
      console.log("Deleting news with id:", id);
      console.log("Current news list:", news);
      setNews(news.filter((newsItem) => newsItem.id !== id));
      console.log(
        "Updated news list:",
        news.filter((newsItem) => newsItem.id !== id)
      );
      setDeleteNewsId(null);
    } catch (error: any) {
      console.error("Error deleting news:", error);
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div role="status" className="flex h-screen w-full justify-center p-16">
        <svg
          aria-hidden="true"
          className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
            {news.map((newsItem) => (
              <NewsSection
                key={newsItem.id}
                title={newsItem.title}
                content={newsItem.content}
                image={newsItem.photo_url}
              />
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
