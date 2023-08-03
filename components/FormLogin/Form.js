"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { db } from "../../app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth } from "../../app/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Form({ handleOpenForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // User is successfully registered, now add additional user data to Firestore
      const docRef = await addDoc(collection(db, "users"), {
        first: data.firstName,
        last: data.lastName,
        email: data.email,
        // Note: You should not store the password in Firestore. It is only used for user registration.
      });

      console.log("Document written with ID:", docRef.id);

      router.push("/home");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };




  return (
    <div className="flex items-center justify-center fixed top-0 left-0 bg-[#00000099] right-0 bottom-0">
      <AiFillCloseCircle
        onClick={handleOpenForm}
        className="absolute hover:cursor-pointer top-0 right-0 m-4 text-white"
        size={30}
      />
      <form
        className="  animate-jump-in flex flex-col bg-white justify-center items-center gap-12 w-64 h-[40rem] rounded-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="bg-blue-500 p-2 rounded-2xl shadow-lg text-center text-white placeholder-white"
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          className="bg-blue-500 p-2 rounded-2xl shadow-lg text-center text-white placeholder-white"
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input
          className="bg-blue-500 p-2 rounded-2xl shadow-lg text-center text-white placeholder-white"
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="bg-blue-500 p-2 rounded-2xl shadow-lg text-center text-white placeholder-white"
          type="password"
          placeholder="Password"
          {...register("Password", {
            required: true,

            minLength: 6,
            maxLength: 12,
          })}
        />
        <select
          className="border border-gray-500"
          {...register("title", { required: true })}
        >
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <input
          className="bg-white border border-blue-500 p-2 rounded-2xl shadow-lg text-center text-[blue]"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
