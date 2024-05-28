import React from "react";
import { Hero } from "@/layouts";
import { heroData } from "@/constants/layouts/HeroConstants";
import { eventsMock } from "@/mockData/eventMock";
import EventSection from "@/components/EventSection";

export default function Event() {
  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-center">
        <Hero
          heroContent={heroData.events.heroContent}
          image={heroData.events.image}
        />

        {eventsMock.map((news, index) => (
          <EventSection key={index} {...news} />
        ))}
      </section>
    </>
  );
}
