"use client"

import React, { useState, useEffect } from "react";
import { Hero } from "@/layouts";
import { heroData } from "@/constants/layouts/HeroConstants";
import AchievementSection from "@/components/AchievementSection";

export default function Achievement() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://psm-rpl.up.railway.app/api/v1/achievements/");
        if (!response.ok) {
          throw new Error("Failed to fetch achievements");
        }
        const data = await response.json();
        setAchievements(data.data); 
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-center">
        <Hero
          heroContent={heroData.achievements.heroContent}
          image={heroData.achievements.image}
        />
        {achievements.map((achievement, index) => (
          <AchievementSection
            key={index}
            title={`Achievement ${index + 1}`} // You may adjust this based on your data structure
            content={achievement}
          />
        ))}
      </section>
    </>
  );
}
