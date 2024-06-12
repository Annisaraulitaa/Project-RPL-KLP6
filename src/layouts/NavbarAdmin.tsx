"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets/images";

export default function NavbarAdmin() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Events", href: "/admin/events" },
    { name: "Achievements", href: "/admin/achievements" },
    { name: "News", href: "/admin/news"},
    { name: "Sign Out", href: "/signin", onClick: () => setIsModalOpen(true) },
  ];

  function handleSignOut() {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  }

  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} alt="logo" height={40} className="h-8 w-auto" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              PSM Unhas
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 transform bg-gray-50 transition-transform dark:bg-gray-800 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="relative mx-auto max-w-screen-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold dark:text-white">PSM Unhas</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l12 12M13 1L1 13"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (item.onClick) {
                      item.onClick();
                    }
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold dark:text-white">Confirm Sign Out</h2>
            <p className="mt-2 dark:text-gray-400">Are you sure you want to sign out?</p>
            <div className="mt-4 flex space-x-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleSignOut}
              >
                Yes, Sign Out
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
