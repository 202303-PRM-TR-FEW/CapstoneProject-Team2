"use client";

import Link from "next/link";
import { BsFillKeyFill } from "react-icons/bs";
import home from "@/public/assets/home.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import  Model  from "react-modal"
import Form from "../components/Form"

const Page = () => {

  const [openForm, setOpenForm] = useState(false); 

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };
  

  return (

    <div className="flex ">
      <div className=" flex w-1/2 h-screen  bg-gray-200 items-center justify-center ">
        <div className="flex flex-col gap-5 items-center mx-16 ">
          <BsFillKeyFill className=" bg-white p-2 w-16 rounded-2xl " size={50} />
          <h1>Discover passion</h1>
          <p>
            Find out what topics you find interesting, learn a new skill &
            connect with people that are passionate about similar topics.
          </p>
          <button onClick={handleOpenForm} className=" text-white bg-blue-500 p-2 rounded-2xl">
            {/* <Link href="home">Get Started</Link> */} onClick
          </button>
        </div>
      </div>
      <div className="flex w-1/2 h-screen items-center rounded-full ">
        <Image src={home} priority={true} alt="home-image" />
      </div>
   
       { openForm &&  <Form handleOpenForm={handleOpenForm}/>}
     



    </div>

  );
};

export default Page;