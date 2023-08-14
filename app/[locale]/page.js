"use client";
import { useTranslations } from "next-intl";
import { BsFillKeyFill } from "react-icons/bs";
import login1 from "@/public/assets/login.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Form from "@/components/FormLogin/Form";
import Login from "@/components/FormLogin/Login";
import { login, logout, selectUser } from "../../redux/features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../app/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Page = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const t = useTranslations("Index");

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  const handleOpenLogin = () => {
    setOpenLogin(!openLogin);
  };


  const user = useSelector(selectUser);
  const dispatch = useDispatch();



  return (
    <div className="sm:flex  ">
      <div className=" flex md:w-1/2 h-screen  w-full dark:bg-gray-200 bg-gray-200 items-center justify-center ">
        <div className="flex flex-col gap-9 items-center  text-center mx-16 ">
          <span className="text-4xl dark:text-black  font-bold">{t("welcome_to_Mudemy")}</span>
          <BsFillKeyFill
            className=" dark:text-black bg-white p-2 w-16 rounded-2xl "
            size={50}
          />
          <h1 className="text-4xl dark:text-black  font-bold">{t("discover_passion")}</h1>
          <p  className="dark:text-black ">{t("introduction_text")}</p>
          <button
            onClick={handleOpenForm}
            className="  text-white bg-blue-500 p-2 rounded-2xl"
          >
            {t("get_started")}
          </button>
          <button
            onClick={handleOpenLogin}
            className="  text-white bg-blue-500 p-2 w-28 rounded-2xl"
          >
            {t("login")}
          </button>
    
        </div>
      </div>
      <div className="flex bg-slate-100 md:w-1/2 h-screen justify-center items-center  ">
        <Image width={400}  height={400} src={login1} priority={true} alt="home-image" />
      </div>

      {openForm && <Form handleOpenForm={handleOpenForm} />}
      {openLogin && <Login handleOpenLogin={handleOpenLogin} />}
    </div>
  );
}; 

export default Page;
