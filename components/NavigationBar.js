import {AiFillHome} from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const NavigationBar = () => {


  return (
    <div className=" bg-slate-200 flex flex-col gap-4  w-[4rem] h-screen  items-center">
        <div className=" flex flex-col gap-8 mt-8 h-1/2">
        <Link href="home">
          <AiFillHome size={50} />
        </Link>
        <Link href="search">
          <AiOutlineSearch size={50} />
        </Link>
        <Link href="courses">
          <AiFillPlayCircle size={50} />
        </Link>
        <Link href="saved">
          <FiSave size={50} />
        </Link>
        <Link href="profile">
          <CgProfile size={50} />
        </Link>
        </div>
    </div>
  );
};

export default NavigationBar;
