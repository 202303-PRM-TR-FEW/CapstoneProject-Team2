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
import ReactCountryFlag from "react-country-flag";
import { GrLanguage } from "react-icons/gr";
import { logout, selectUser } from "../redux/features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../app/lib/firebase";
import { useRouter } from "next/navigation";



const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const style = {
    navbar: `z-[2] md:bg-slate-100 backdrop-blur-md flex justify-center items-center sticky left-0 bottom-0 gap-4 w-full h-16 md:flex-col md:w-[4rem] md:h-screen dark:bg-slate-700`,
    button: `flex flex-col items-center text-gray-400 hover:text-pink-400`,
    animation: `animate-pulse`,
    burgerBtnDiv: `flex flex-col h-12 w-12 justify-center items-center group`,
    hamburgerLine: `h-1 w-6 my-1 rounded-full bg-gray-400 transition ease transform duration-300`,
    navbar2: `flex md:flex md:flex-col   gap-8 items-center `,
    extrabox2: `flex flex-col bg-white gap-2 rounded-xl  p-2  translate-y-[-10rem] translate-x-[-5rem] md:translate-y-[0] md:translate-x-[0]  `,
    extrabox: `z-[2] md:bg-slate-100 backdrop-blur-md flex flex-col justify-center items-center sticky left-0 bottom-16 gap-2 w-full h-32 md:flex-col md:w-[4rem] md:h-screen dark:bg-slate-700`,
  };
  const t = useTranslations("Components");
  const router = useRouter();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();

    router.push("/");
  };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  } else {
    return (
      <div className="z-[2] md:bg-slate-100 backdrop-blur-md flex  justify-center items-center sticky left-0 bottom-0 gap-4 w-full h-16  md:flex-col md:w-[4rem] md:h-screen dark:bg-slate-700 ">
        <div className={style.navbar2}>

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
          <Link href="courseInfo" className={style.button}>
            <AiFillPlayCircle size={30} />
            <p>course info</p>
          </Link>
          <Link href="spesificCourse" className={style.button}>
            <FiSave size={30} />
            <p>spsificCourse</p>
          </Link>


          <Link href="profile" className={style.button}>
            <CgProfile size={30} />
            <p>{t("Profile")}</p>
          </Link>

          <Providers>
            <ThemeSwitcher />
          </Providers>

          <GrLanguage size={30} onClick={() => setIsOpen(!isOpen)} />

          <button className=" bg-orange-600 p-4 rounded-2xl w-full" onClick={logoutOfApp}>Logout</button>
        </div>
        {isOpen && (
          <div className={style.extrabox2}>
            <Link href="/" locale="en" className={style.button}>
              <ReactCountryFlag countryCode="" size={30} />
              <p>English</p>
            </Link>
            <Link href="/" locale="de" className={style.button}>
              <ReactCountryFlag countryCode="GB" size={30} />
              <p>German</p>
            </Link>
            <Link href="/" locale="kr" className={style.button}>
              <ReactCountryFlag countryCode="KR" size={30} />
              <p>Korean</p>
            </Link>
            <Link href="/" locale="tr" className={style.button}>
              <ReactCountryFlag countryCode="TR" size={30} />
              <p>Turkish</p>
            </Link>
            <Link href="/" locale="ar" className={style.button}>
              <ReactCountryFlag countryCode="SA" size={30} />
              <p>Arabic</p>
            </Link>
          </div>
        )}
      </div>
    );
  }
};

export default NavigationBar;
