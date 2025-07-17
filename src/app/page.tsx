/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@/componests/Button";

const ForgotPassword = () => {
  const { register, handleSubmit, watch } = useForm();

  const [isFocused, setIsFocused] = useState({
    name: false,
  });

  const nameValue = watch("name");

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto min-h-screen flex flex-col justify-center">
      <h1 className="text-2xl font-semibold text-[#3b9df8]">
        Add your student name here
      </h1>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full pt-6 flex items-center gap-5 "
      >
        {/* Name */}
        <div className="relative mt-2">
          <label
            htmlFor="name"
            className={`absolute left-3 px-1 transition-all bg-white text-base ${
              isFocused.name || nameValue
                ? "-top-3  text-[#3b9df8] px-8"
                : "top-3 text-gray-400"
            }`}
          >
            Name
          </label>
          <input
            id="text"
            type="text"
            {...register("name", { required: "Name is required" })}
            onFocus={() => setIsFocused((prev) => ({ ...prev, name: true }))}
            onBlur={() => setIsFocused((prev) => ({ ...prev, name: false }))}
            className="w-full border-2 border-[#3b9df8] rounded-[10px] p-3 outline-none text-[#747474]"
            placeholder=" "
          />
        </div>

        <Button type="submit">Add Name</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
