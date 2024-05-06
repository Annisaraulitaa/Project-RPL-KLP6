import React from "react";
import { TInputField } from "@/assets/types/Components/TInputField";

export default function InputField({
  label,
  type,
  placeholder,
  value,
  required,
}: TInputField) {
  return (
    <section className="flex items-center justify-between gap-36">
      <p className="font-semibold">{label}</p>

      <div className="w-[400px] rounded-lg border-2 border-[#b9b9b9] px-7 py-3">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          className="border-none outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>
    </section>
  );
}
