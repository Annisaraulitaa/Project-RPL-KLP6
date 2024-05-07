import React from "react";
import { Hero } from "@/layouts";
import { heroData } from "@/constants/layouts/HeroConstants";
import { AchievementsMock } from "@/mockData/achievementMock";
import AchievementSection from "@/components/AchievementSection"

export default function Achievement() {
  return (
    <>
    <section className="flex min-h-screen w-full flex-col items-center">
      <Hero
        heroContent={heroData.achievements.heroContent}
        image={heroData.achievements.image}
      />

      {AchievementsMock.map((achiev, index) => (
        <AchievementSection key={index} index={index} {...achiev} />
      ))}
    </section>
    </>
  );
}
