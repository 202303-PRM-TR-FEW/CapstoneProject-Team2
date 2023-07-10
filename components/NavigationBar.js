'use client'
import { AiFillHome } from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavigationBar = () => {
  const style = {
    navbar: `z-[2] md:bg-slate-100 backdrop-blur-md flex justify-center items-center sticky left-0 bottom-0 gap-6 w-full h-16 md:flex-col md:w-[4rem] md:h-screen`,
    button: `flex flex-col items-center text-gray-400 hover:text-pink-400`,
    animation: `animate-pulse`,
  };

 const pathname = usePathname();

 if (pathname === "/") {
   return null;
  }



  return (
    <div className={style.navbar}>
      <Link href="home" className={style.button}>
        <AiFillHome size={30} />
        <p>Home</p>
      </Link>
      <Link href="search" className={style.button}>
        <AiOutlineSearch size={30} />
        <p>Search</p>
      </Link>
      <Link href="courses" className={style.button}>
        <AiFillPlayCircle size={30} />
        <p>Courses</p>
      </Link>
      <Link href="saved" className={style.button}>
        <FiSave size={30} />
        <p>Saved</p>
      </Link>
      <Link href="profile" className={style.button}>
        <CgProfile size={30} />
        <p>Profile</p>
      </Link>
    </div>
  );
};

export default NavigationBar;
