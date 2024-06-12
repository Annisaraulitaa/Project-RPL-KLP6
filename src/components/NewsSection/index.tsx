import Image from "next/image";
import Link from "next/link";

interface NewsSectionProps {
  title: string;
  content: string;
  image: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({ title, content, image }) => {
  return (
    <div className="mb-10 max-w-[700px]">
      <h2 className="py-10 text-center text-2xl font-bold">{title}</h2>
      <Image
        src={image}
        alt={title}
        width={700}
        height={350}
        className="object-cover"
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

export default NewsSection;