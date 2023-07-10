"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Form({ handleOpenForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="  flex items-center  justify-center fixed top-0 left-0 bg-[#00000099] right-0 bottom-0  ">
      <AiFillCloseCircle
        onClick={handleOpenForm}
        className="absolute hover:cursor-pointer top-0 right-0 m-4 text-white"
        size={30}
      />
      <form
        className="  animate-fade-down animate-once animate-duration-[2ms] flex flex-col bg-white justify-center items-center gap-12 w-64 h-[40rem] rounded-2xl  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className=" bg-blue-500   p-2 rouned-2xl shadow-lg rounded-2xl text-center text-white  placeholder-white"
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          className=" bg-blue-500  p-2 rouned-2xl shadow-lg rounded-2xl text-center text-white placeholder-white"
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          className=" bg-blue-500  p-2 rouned-2xl shadow-lg rounded-2xl text-center text-white placeholder-white"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className=" bg-blue-500 p-2 rouned-2xl shadow-lg rounded-2xl text-center text-white placeholder-white"
          type="tel"
          placeholder="Password"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select
          className=" border border-gray-500"
          {...register("Title", { required: true })}
        >
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <input
          className="bg-white border border-blue-500   p-2 rouned-2xl shadow-lg rounded-2xl text-center text-[blue]"
          placeholder="submit"
          type="submit"
        />
      </form>
    </div>
  );
}
