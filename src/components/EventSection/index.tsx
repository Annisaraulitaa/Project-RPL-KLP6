import Image from "next/image";
import Link from "next/link";
import { TEvent } from "@/assets/types/Components/TEvent";

export default function EventSection({ title, content, image }: TEvent) {
  return (
    <div className="flex flex-col max-w-[650px] py-8 gap-4">
      <h2 className="text-center text-3xl font-bold text-reddish-brown">{title}</h2>
      <Image src={image} alt={title} width={700} height={350} />

      <div className="flex flex-col gap-5">
        <p className="line-clamp-5 text-justify text-xl">{content}</p>
      </div>
    </div>
  );
}
