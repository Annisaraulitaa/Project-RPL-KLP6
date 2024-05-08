import Image from "next/image";
import { TAchievement } from "@/assets/types/Components/TAchievement";

export default function AchievementSection({
  year,
  content,
  image,
  id,
}: TAchievement ) {
  return (
    <div className={`flex w-full items-center gap-2 p-16 ${id !== 1 ? 'border-t-2 ' : ''} ${id % 2 === 0 ? 'flex-row-reverse' : ''}`}>
      <div className="flex h-full w-1/2">
        <Image src={image} alt="" width={900} height={500} />
      </div>
      <div className="flex h-64 w-1/2 flex-col justify-center p-6">
        <div className="text-7xl font-bold text-reddish-brown p-6 self-center">{year}</div>
        <div>
          {(content.country as string[]).map((country, index) => (
            <div key={index} className="flex items-center p-2">
              <Image
                src={country}
                alt={`Flag of ${content.country}`}
                width={30}
                height={20}
              />
              <span className="ml-2">{content.awards[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
