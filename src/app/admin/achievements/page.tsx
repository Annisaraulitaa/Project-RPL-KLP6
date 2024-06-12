"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Achievement {
  id: string;
  title: string;
  photo_url: string;
  countries: {
    country: string;
    title: string;
  }[];
  created_at: number;
  updated_at: number;
  year: number;
}

export default function AchievementTable() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteAchievementId, setDeleteAchievementId] = useState<string | null>(
    null
  );

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const response = await fetch(
          "https://psm-rpl.up.railway.app/api/v1/achievements"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Achievements");
        }
        const data = await response.json();
        setAchievements(data.data);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching Achievements:", error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchAchievements();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://psm-rpl.up.railway.app/api/v1/achievements/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete Achievement");
      }
      setAchievements(
        achievements.filter((achievement) => achievement.id !== id)
      );
      setDeleteAchievementId(null);
    } catch (error: any) {
      console.error("Error deleting Achievement:", error);
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div role="status" className="flex h-screen w-full justify-center p-16">
        <svg
          aria-hidden="true"
          className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-16">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <button
          onClick={() => (window.location.href = "/admin/achievements/create")}
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white hover:bg-blue-500 focus:bg-blue-700 focus:outline-none"
        >
          Create Achievement
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Events, Country
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {achievements.map((achievement) => (
              <tr
                key={achievement.id}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <td className="px-6 py-4">{achievement.year}</td>
                <td className="px-6 py-4">
                  <ul>
                    {achievement.countries.map((country) => (
                      <li key={country.country}>
                        {country.title}, {country.country}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4">
                  <Image
                    src={achievement.photo_url}
                    width={100}
                    height={100}
                    alt={achievement.title}
                  />
                </td>
                <td className="flex justify-center space-x-2 px-6 py-4">
                  <button
                    onClick={() =>
                      (window.location.href = `/admin/achievements/edit/${achievement.id}`)
                    }
                    className="inline-flex items-center rounded-md bg-green-600 px-3 py-1 text-xs font-medium leading-5 text-white hover:bg-green-500 focus:bg-green-700 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteAchievementId(achievement.id)}
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
                    className="inline-flex items-center rounded-md bg-red-600 px-3 py-1 text-xs font-medium leading-5 text-white hover:bg-red-500 focus:bg-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deleteAchievementId && (
        <div
          id="popup-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div className="relative w-full max-w-md p-4">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setDeleteAchievementId(null)}
                data-modal-hide="popup-modal"
              >
                <svg
                  className="h-3 w-3"
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
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 text-center">
                <svg
                  className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this Achievement?
                </h3>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
                  onClick={() => handleDelete(deleteAchievementId)}
                  data-modal-hide="popup-modal"
                >
                  Yes, delete
                </button>
                <button
                  type="button"
                  className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  onClick={() => setDeleteAchievementId(null)}
                  data-modal-hide="popup-modal"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
