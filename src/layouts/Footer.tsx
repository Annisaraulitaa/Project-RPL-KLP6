import React from "react";
import Link from "next/link";
import Image from "next/image";

import { footLinks } from "@/constants/layouts/FooterConstants";
import { FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa";
import { logo } from "@/assets/images";

export default function Footer() {
  const { contact, socialMedia, address } = footLinks;

  return (
    <footer className="flex h-full w-full flex-col gap-20 bg-reddish-brown px-16 py-20 text-white">
      <section className="flex items-center justify-evenly">
        <Image src={logo} alt="logo psm" width={180} height={180} />

        <h5 className="w-48 text-wrap text-4xl font-bold text-white">
          PSM UNHAS
        </h5>

        <section className="flex flex-col gap-6">
          <section className="flex flex-col gap-3">
            <h5 className="text-xl font-bold">Contact Person</h5>

            <div>
              {contact.map((item, index) => (
                <p key={index}>
                  {item.phone} ({item.name})
                </p>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h5 className=" text-xl font-bold">Our Social Media</h5>

            <div className="flex gap-4">
              <Link href={socialMedia.instagram} target="_blank">
                <FaInstagram size={30} />
              </Link>

              <Link href={socialMedia.tiktok} target="_blank">
                <FaTiktok size={30} />
              </Link>

              <Link href={socialMedia.whatsapp} target="_blank">
                <FaWhatsapp size={30} />
              </Link>

              <Link href={socialMedia.youtube} target="_blank">
                <FaYoutube size={30} />
              </Link>
            </div>
          </section>
        </section>

        <section className="flex flex-col gap-3">
          <h5 className="text-xl font-bold">Alamat</h5>

          <p className="w-56">{`${address.name}, ${address.street}. ${address.building}, ${address.neighborhood}, Kec. ${address.district}, Kota ${address.city}, ${address.province} ${address["postal-code"]}`}</p>
        </section>

        <section className="flex flex-col gap-3">
          <h5 className="text-xl font-bold">Maps</h5>

          <Image
            src={"https://placehold.co/200"}
            alt="maps"
            height={200}
            width={200}
          />
        </section>
      </section>

      <div className="h-0.5 w-full bg-white" />
    </footer>
  );
}
