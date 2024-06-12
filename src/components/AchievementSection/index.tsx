import React from "react";
import Image from "next/image";

interface AchievementSectionProps {
  title: string;
  content: {
    countries: { country: string; title: string }[];
    year: number;
    photo_url: string;
  };
}

const AchievementSection: React.FC<AchievementSectionProps> = ({
  content,
}) => {
  console.log(content)
  return (
    <div className={`flex w-full items-center gap-2 p-16`}>
      <div className="flex h-full w-1/2">
        <Image src={content.photo_url} alt="" width={900} height={500} />
      </div>
      <div className="flex h-64 w-1/2 flex-col justify-center p-6">
        <div className="text-7xl font-bold text-reddish-brown p-6 self-center">
          {content.year}
        </div>
        <div>
          {content.countries.map((country, index) => (
            <div key={index} className="flex items-center p-2">
              <Image
                src={`https://flagsapi.com/${country.country}/flat/64.png`}
                alt={`Flag of ${country.country}`}
                width={30}
                height={20}
              />
              <span className="ml-2">{country.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
