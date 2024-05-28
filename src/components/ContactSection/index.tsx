import React from "react";
import { TContact } from "@/assets/types/Components/TContact";

export default function ContactSection({ title, content }: TContact) {
  return (
    <div className="flex flex-col gap-8 border-t-2 px-20 py-16">
      <h5 className="text-3xl font-bold uppercase text-reddish-brown">
        {title}
      </h5>

      <div className="px-16">
        {/* <p className="text-lg text-gray-400">{content}</p> */}
        {content.split("\n").map((line, index) => (
          <p key={index} className="text-lg text-gray-400">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
