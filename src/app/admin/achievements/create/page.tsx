"use client";

import React, { useState, useRef } from "react";

const CreateAchievementPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [countries, setCountries] = useState<
    { country: string; title: string }[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleCountryChange = (index: number, value: string) => {
    const updatedCountries = [...countries];
    updatedCountries[index].country = value;
    setCountries(updatedCountries);
  };

  const handleTitleChange = (index: number, value: string) => {
    const updatedCountries = [...countries];
    updatedCountries[index].title = value;
    setCountries(updatedCountries);
  };

  const handleAddCountry = () => {
    setCountries([...countries, { country: "", title: "" }]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    console.log("Token set in localStorage:", token);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("year", year.toString());
      formData.append("country", JSON.stringify(countries));
      if (uploadedFile) {
        formData.append("photo", uploadedFile);
      } else {
        throw new Error("No file uploaded");
      }

      const response = await fetch(
        "https://psm-rpl.up.railway.app/api/v1/achievements/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit achievement");
      }

      const data = await response.json();
      console.log("Achievement submitted successfully:", data);
      window.location.href = "/admin/achievements";
    } catch (error) {
      console.error("Error submitting achievement:", error);
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex w-2/3 flex-col gap-8">
        <div className="flex items-center justify-center">
          <p className="text-2xl font-semibold">Create Achievement</p>
        </div>
        <div className="flex flex-col gap-6">
          <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                id="title"
                aria-describedby="helper-text-explanation"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Year
              </label>
              <input
                type="number"
                id="year"
                aria-describedby="helper-text-explanation"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
              />
            </div>

            <div>
              <p className="text-sm font-medium">
                Country Flag Code{" "}
                <a className="text-blue-600" href="https://flagsapi.com/#countries">
                  Click Here
                </a>
                {" "}Example: ID for Indonesia
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Countries and Titles
              </label>
              {countries.map((country, index) => (
                <div key={index} className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter Country Flag Code"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={country.country}
                    onChange={(e) => handleCountryChange(index, e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter Title"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={country.title}
                    onChange={(e) => handleTitleChange(index, e.target.value)}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddCountry}
                className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Country
              </button>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Image Upload
              </label>
              <div
                className={`flex w-full flex-col items-center justify-center space-y-4 rounded-md border-2 border-dashed ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-white"
                } p-6 hover:border-gray-400 hover:bg-gray-50`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15a4 4 0 014-4h10a4 4 0 110 8H7a4 4 0 01-4-4zm8-7a4 4 0 100-8 4 4 0 000 8z"
                    />
                  </svg>
                </div>
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  name="photo"
                  accept="image/*"
                  ref={inputRef}
                  onChange={handleChange}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-center text-gray-600"
                >
                  <span className="block">
                    Click here to upload or drag and drop
                  </span>
                  <span className="block text-xs text-gray-400">
                    Max. File Size: 5MB
                  </span>
                </label>
                {uploadedFile && (
                  <div className="flex items-center justify-center">
                    <p className="text-gray-600">
                      {uploadedFile.name} - {uploadedFile.size} bytes
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-600 p-2.5 text-sm text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAchievementPage;
