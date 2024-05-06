import React from "react";
import { Hero } from "@/layouts";
import { heroData } from "@/constants/layouts/HeroConstants";
import { newsMock } from "@/mockData/newsMock";
import NewsSection from "@/components/NewsSection";

export default function News() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center">
      <Hero
        heroContent={heroData.news.heroContent}
        image={heroData.news.image}
      />

      {newsMock.map((news, index) => (
        <NewsSection key={index} {...news} />
      ))}
    </section>
  );
}
