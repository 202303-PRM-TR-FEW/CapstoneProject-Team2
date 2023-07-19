"use client";
import { AiFillHome, AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeSwitcher from "@/darkMode/ThemeSwitcher";
import Providers from "@/darkMode/providers";
import { useTranslations } from "next-intl";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Components");

  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const style = {
    navbar: `z-[2] md:bg-slate-100 backdrop-blur-md flex justify-center items-center sticky left-0 bottom-0 gap-4 w-full h-16 md:flex-col md:w-[4rem] md:h-screen dark:bg-slate-700`,
    button: `flex flex-col items-center text-gray-400 hover:text-pink-400`,
    animation: `animate-pulse`,
    burgerBtnDiv: `flex flex-col h-12 w-12 justify-center items-center group`,
    hamburgerLine: `h-1 w-6 my-1 rounded-full bg-gray-400 transition ease transform duration-300`,
  };

  return (
    <div className={style.navbar}>
      <Link href="home" className={style.button}>
        <AiFillHome size={30} />
        <p>{t("Home")}</p>
      </Link>
      <Link href="search" className={style.button}>
        <AiOutlineSearch size={30} />
        <p>{t("Search")}</p>
      </Link>
      <Link href="courses" className={style.button}>
        <AiFillPlayCircle size={30} />
        <p>{t("Courses")}</p>
      </Link>
      <Link href="saved" className={style.button}>
        <FiSave size={30} />
        <p>{t("Saved")}</p>
      </Link>
      <Link href="profile" className={style.button}>
        <CgProfile size={30} />
        <p>{t("Profile")}</p>
      </Link>
      <button className={style.burgerBtnDiv} onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`${style.hamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3  group-hover:bg-[#F472B6]"
              : "group-hover:bg-[#F472B6]"
          }`}
        />
        <div
          className={`${style.hamburgerLine} ${
            isOpen ? "opacity-0" : "group-hover:bg-[#F472B6]"
          }`}
        />
        <div
          className={`${style.hamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 group-hover:bg-[#F472B6]"
              : "group-hover:bg-[#F472B6]"
          }`}
        />
      </button>
      {/*
      <Link href="/" locale="kr" className={style.button}>
        <CgProfile size={30} />
        <p>Korean</p>
      </Link>
      <Providers>
        <ThemeSwitcher />
      </Providers>
       */}
    </div>
  );
};

export default NavigationBar;
