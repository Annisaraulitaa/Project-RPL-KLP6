"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  TNavLinksItem,
  TNavLinksChildren,
} from "@/assets/types/layouts/TNavLinks";
import { navLinks } from "@/constants/layouts/NavbarConstants";
import { logo } from "@/assets/images";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const currentPathname = usePathname();
  const [navLink, setNavLink] = useState(navLinks.map((item) => item));
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  /**
   * @description handle open/close dropdown menu
   */
  const handleDropdown = (id: string) => {
    const updatedLinks = navLinks.map((link) => {
      if (link.id === id) {
        setIsDropdownOpened(!link.isOpen);
        return { ...link, isOpen: !link.isOpen };
      } else return { ...link, isOpen: false };
    });
    setNavLink(updatedLinks);
  };

  const handleClickOutsideDropdown = () => {
    const updatedLinks = navLinks.map((link) => {
      return { ...link, isOpen: false };
    });
    setNavLink(updatedLinks);
    setIsDropdownOpened(false);
  };

  return (
    <nav className="flex w-full items-center justify-between bg-reddish-brown px-7 py-2 text-white">
      <section className="flex w-3/5 items-center justify-between">
        <div className="flex items-center gap-5">
          <Image src={logo} alt="gambar" width={60} height={60} />
          <h2 className="w-64 font-extrabold uppercase">
            Paduan Suara Mahasiswa Universitas Hasanuddin
          </h2>
        </div>

        <div
          onClick={handleClickOutsideDropdown}
          className={`${isDropdownOpened ? "" : "hidden"} absolute left-0 right-0 top-0 mt-9 h-screen w-full`}
        />
        <div className="flex gap-8">
          {navLink.map(({ id, path, isOpen, children }: TNavLinksItem) => {
            return children.length === 0 && !Array.isArray(path) ? (
              <Link
                key={id}
                href={path}
                onClick={handleClickOutsideDropdown}
                className={`${currentPathname === path ? "font-bold" : ""} flex items-center capitalize`}
              >
                <h5>{id}</h5>
              </Link>
            ) : (
              <div
                key={id}
                onClick={() => handleDropdown(id)}
                className={`${currentPathname === path || (Array.isArray(path) && path.includes(currentPathname)) ? "font-bold" : ""} relative flex cursor-pointer items-center justify-center gap-2 px-3 py-3 capitalize`}
              >
                <h5>{id}</h5>
                <FaChevronDown
                  fill="white"
                  className={`${isOpen && "rotate-180"} aspect-square h-3`}
                />

                <div
                  className={`${isOpen ? "" : "hidden"} absolute left-0 top-0 mt-[42px] flex min-w-full flex-col divide-y divide-solid divide-opacity-50 capitalize`}
                >
                  {children.map(
                    ({ id, path }: TNavLinksChildren, index: number) => {
                      return (
                        <Link
                          key={`${id}-${index}`}
                          href={path}
                          className={`${currentPathname === path ? "font-bold" : ""} flex w-full items-center justify-between gap-10 bg-reddish-brown/50 px-4 py-3`}
                        >
                          <h5 className="text-nowrap">{id}</h5>
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <button
        className={`${currentPathname === "/profile" ? "font-bold" : "font-semibold"} rounded-lg bg-white px-5 py-2 text-red-500`}
      >
        Profil
      </button>
    </nav>
  );
}
