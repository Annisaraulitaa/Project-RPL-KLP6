import React from "react";
import { Hero } from "@/layouts";
import { heroData } from "@/constants/layouts/HeroConstants";
import ContactSection from "@/components/ContactSection";
import { footLinks } from "@/constants/layouts/FooterConstants";

export default function Contact() {
  const { contact, socialMedia, address } = footLinks;

  return (
    <section className="flex min-h-dvh w-full flex-col">
      <Hero
        heroContent={heroData.contact.heroContent}
        image={heroData.contact.image}
      />

      <section className="px-32">
        <div className="flex flex-col gap-2">
          <ContactSection
            title="Alamat"
            content={`${address.name}\n${address.street}. ${address.building}, ${address.neighborhood}, Kec. ${address.district}, Kota ${address.city}, ${address.province} ${address["postal-code"]}`}
          />
          <ContactSection title="E-mail" content={`${socialMedia.email}`} />
          <ContactSection
            title="Kontak"
            content={contact
              .map((contact) => `${contact.phone} (${contact.name})`)
              .join("\n")}
          />
          <ContactSection
            title="Media Sosial"
            content={`Instagram\t: @psmunhas\nTiktok\t : @psmunhas\nYoutube : psmunhas\nFacebook : psmunhas`}
          />
        </div>
      </section>
    </section>
  );
}
