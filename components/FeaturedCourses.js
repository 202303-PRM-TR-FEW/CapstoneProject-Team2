"use client";
import Image from "next/image";
import coverimg from "../public/assets/course-cover.png";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import randomUser from "../public/assets/randomUser.jpg";
import saveIconFull from "../public/assets/save-icon-full.png";

const style = {
  fcCard: `bg-white w-max p-1 rounded-2xl`,
  personInfo: `flex text-sm items-center my-4 p-1 pr-3 rounded-full shadow-lg w-fit bg-white 
  -mb-10 ml-2 translate-y-[-2rem] z-20`,
  details: `flex gap-4`,
  priceBtn: `bg-blue-500 rounded-full p-1 px-3.5 text-xs text-white`,
  iconColor: `text-gray-400`,
  icons: `flex gap-1`,
  iconsText: `text-gray-600`,
  img: `rounded-2xl mr-4 p-0 bg-contain z-0`,
  padding: `p-2`,
  powerTitle: `my-2 font-medium`,
  randomImg: `rounded-full p-0`,
  name: `text-center pl-0 pr-2`,
  saveIcon: `float-right m-1 translate-y-[-6rem]`,
  personImg: `rounded-full mr-2`
};

const FeaturedCourses = () => {
  return (
    <div className={style.fcCard}>
      <Image
        src={coverimg}
        width={120}
        height={120}
        alt="cover image of course"
        style={{ width: "100%", height: "100px", objectFit: "cover" }}
        className={style.img}
        priority={true}
      />
      <Image
        src={saveIconFull}
        width={25}
        height={25}
        alt="Save Icon"
        className={style.saveIcon}
        priority={true}
      />
      <div className={style.personInfo}>
        <Image
          src={randomUser}
          width={30}
          height={30}
          alt="image of trainer"
          className={style.personImg}
          priority={true}
        />
        <p>John Eames</p>
      </div>
      <div className={style.padding}>
        <h3 className={style.powerTitle}>Power BI</h3>
        <div className={style.details}>
          <div className={style.icons}>
            <BiSolidTimeFive size={20} className={style.iconColor} />
            <p className={style.iconsText}>1h 53m</p>
          </div>
          <div className={style.icons}>
            <AiFillStar size={20} className={style.iconColor} />
            <p className={style.iconsText}>4.9/5</p>
          </div>
          <button className={style.priceBtn}>$24</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
