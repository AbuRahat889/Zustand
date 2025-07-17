/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@/componests/Button";
import useStudentStore from "@/store/studentStore";
import StudentList from "./StudentList";

const AddForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [isFocused, setIsFocused] = useState({
    name: false,
  });
  const nameValue = watch("name");

  // Access the addStudent function from the store
  const addStudent = useStudentStore((state) => state.addStudent);

  const onSubmit = async (data: any) => {
    if (!data.name) {
      alert("Please enter a name");
      return;
    }
    const generatedId = Math.ceil(Math.random() * 10000);
    // Call the addStudent function with the new student data
    addStudent({
      studentId: generatedId,
      name: data?.name,
    });
    reset();
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto min-h-screen flex flex-col justify-center px-5">
      <h1 className="text-xl md:text-2xl font-semibold text-[#3b9df8]">
        Add your student name here
      </h1>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full pt-6 flex flex-col md:flex-row items-start md:items-center gap-5 "
      >
        {/* Name */}
        <div className="relative mt-2 w-full md:w-96">
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
          {errors.name && (
            <p className="text-red-500 text-sm mt-2 absolute">
              {errors.name?.message as string}
            </p>
          )}
        </div>

        <Button type="submit">Add Name</Button>
      </form>
      <StudentList />
    </div>
  );
};

export default AddForm;
