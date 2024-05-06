import React from "react";
import InputField from "../InputField";

export default function ProfileCard() {
  return (
    <section className="flex flex-col gap-5 rounded-xl border-2 border-black px-16 py-10">
      <InputField
        label="Nama"
        type="text"
        value="Ujang Doremi"
        onChange={(e) => console.log(e.target.value)}
      />

      <InputField
        label="Email"
        type="email"
        value="dummy@gmail.com"
        onChange={(e) => console.log(e.target.value)}
      />

      <InputField
        label="Number"
        type="number"
        value="08xxxxxxxxxx"
        onChange={(e) => console.log(e.target.value)}
      />

      <InputField
        label="Address"
        type="text"
        value="Jl. STTP"
        onChange={(e) => console.log(e.target.value)}
      />

      <InputField
        label="Foto Profil"
        type="File"
        onChange={(e) => console.log(e.target.value)}
      />

      <InputField
        label="Kata Sandi"
        type="password"
        value="12345678"
        onChange={(e) => console.log(e.target.value)}
      />

      <div className="mt-10 flex gap-28">
        <button className="w-full rounded-xl bg-red-500 py-3 text-white">
          Edit
        </button>

        <button className="w-full rounded-xl border-2 border-red-500 bg-white py-3 text-red-500">
          Simpan
        </button>
      </div>
    </section>
  );
}
