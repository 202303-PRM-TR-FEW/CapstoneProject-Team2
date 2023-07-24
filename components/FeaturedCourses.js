"use client";
import Image from "next/image";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import saveIconFull from "../public/assets/save-icon-full.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "@/redux/api";

const style = {
  fcCard: `bg-white w-max p-1 rounded-2xl dark:bg-slate-800`,
  personInfo: `flex text-sm items-center my-4 p-1 pr-3 rounded-full shadow-lg w-fit bg-white 
  -mb-10 ml-2 translate-y-[-2rem] z-20 dark:bg-slate-600`,
  details: `flex gap-4`,
  priceBtn: `bg-blue-500 rounded-full p-1 px-3.5 text-xs text-white`,
  iconColor: `text-gray-400`,
  icons: `flex gap-1`,
  iconsText: `text-gray-600 dark:text-gray-400`,
  img: `rounded-2xl mr-4 p-0 bg-contain z-0`,
  padding: `p-2`,
  powerTitle: `my-2 font-medium`,
  randomImg: `rounded-full p-0`,
  name: `text-center pl-0 pr-2`,
  saveIcon: `float-right m-1 translate-y-[-6rem]`,
  personImg: `rounded-full mr-2`
};

const FeaturedCourses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <div>
    {courses.map((course) => (
    <div className={style.fcCard}>
      
      <img
        src={course.image}
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
        <img
          src={course.instructor_img}
          width={30}
          height={30}
          alt="image of trainer"
          className={style.personImg}
          priority={true}
        />
        <p>{course.instructor}</p>
      </div>
      <div className={style.padding}>
        <h3 className={style.powerTitle}>{course.title}</h3>
        <div className={style.details}>
          <div className={style.icons}>
            <BiSolidTimeFive size={20} className={style.iconColor} />
            <p className={style.iconsText}>{course.duration}</p>
          </div>
          <div className={style.icons}>
            <AiFillStar size={20} className={style.iconColor} />
            <p className={style.iconsText}>{course.rating}</p>
          </div>
          <button className={style.priceBtn}>{course.price} $</button>
        </div>
      </div>
      
    </div>
    ))}
    </div>
  );
};

export default FeaturedCourses;
