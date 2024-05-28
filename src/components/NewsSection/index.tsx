import Image from "next/image";
import Link from "next/link";
import { TNews } from "@/assets/types/Components/TNews";

export default function NewsSection({ title, content, image }: TNews) {
  return (
    <div className="mb-10 max-w-[700px]">
      <h2 className="py-10 text-center text-2xl font-bold">{title}</h2>
      <Image
        src={image}
        alt={title}
        className="h-[350px] w-[700px] object-cover"
      />

      <div className="mt-3 flex flex-col gap-5">
        <p className="line-clamp-5 text-justify">{content}</p>

        <Link
          href="#"
          className="w-fit rounded-xl bg-reddish-brown px-7 py-3 text-white"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
}
