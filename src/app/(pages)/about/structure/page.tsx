import React from "react";
import { Hero } from "@/layouts";
import CommitteCard from "@/components/CommitteCard";

import { heroData } from "@/constants/layouts/HeroConstants";
import { organizationCommitteeMock } from "@/mockData/organizationCommitteMock";

export default function Structure() {
  return (
    <section className="min-h-screen">
      <Hero
        heroContent={heroData.structure.heroContent}
        image={heroData.structure.image}
      />

      <div className="grid grid-cols-2 gap-24 px-40 py-20">
        {organizationCommitteeMock.map((commiteMember, index) => (
          <div key={index} className="flex justify-center">
            <CommitteCard {...commiteMember} />
          </div>
        ))}
      </div>
    </section>
  );
}
