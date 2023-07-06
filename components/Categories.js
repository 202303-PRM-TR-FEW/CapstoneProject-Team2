"use client";
import {BsGraphUpArrow} from "react-icons/bs";
import {BsFillPeopleFill} from "react-icons/bs";
import {MdOutlineDraw} from "react-icons/md";
import {FaTable} from "react-icons/fa";
import {MdDesignServices} from "react-icons/md";
import {BsStars} from "react-icons/bs";

const style = {
  // icon : `text-gray-400 mb-1`,
  oneBox : `flex hover:bg-blue-100 justify-center items-center bg-white w-36 rounded-xl px-10 p-2 flex-col text-gray-600 hover:text-blue-500`,
  container : `flex gap-4`
}

const Categories = () => {
  return (
    <div className={style.container}>
      <div className={style.oneBox}>
        <BsGraphUpArrow size={30} className={style.icon}/>
        <h3>Sales</h3>
      </div>
      <div className={style.oneBox}>
        <BsFillPeopleFill size={30} className={style.icon}/>
        <h3>HR</h3>
      </div>
      <div className={style.oneBox}>
        <MdOutlineDraw size={30} className={style.icon}/>
        <h3>Drawing</h3>
      </div>
      <div className={style.oneBox}>
        <FaTable size={30} className={style.icon}/>
        <h3>Big Data</h3>
      </div>
      <div className={style.oneBox}>
        <MdDesignServices size={30} className={style.icon}/>
        <h3>Design</h3>
      </div>
      <div className={style.oneBox}>
        <BsStars size={30} className={style.icon}/>
        <h3>Astronomy</h3>
      </div>
    </div>
  )
}

export default Categories