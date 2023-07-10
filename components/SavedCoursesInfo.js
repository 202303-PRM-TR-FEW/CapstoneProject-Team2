"use client";

import Image from "next/image";
import coverimg from "../public/assets/course-cover.png";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const SavedCoursesInfo = () => {
  const style = {
    courseInfoCard: `flex flex-col rounded-2xl bg-white m-2 w-full`,
    courseImg: `rounded-2xl m-2 bg-contain`,
    infoBox: `flex flex-col  justify-between m-2 py-4`,
    teacher: `flex text-sm items-center text-slate-500 my-4 p-1 pr-3 rounded-full shadow-lg w-fit`,
    teacherImg: `rounded-full mr-2`,
    descBox: `text-sm text-slate-600 mb-10`,
    progressInfo: `text-sm text-slate-500`,
    info: `flex flex-row mb-3`,
    iconColor: `text-gray-400`,
    description: `font-bold text-l mb-3`,
    preview: `bg-white border border-blue-500 rounded-xl text-blue-500 uppercase p-1 px:12 md:px-20 mr:2 mr-4`,
    buy: `bg-blue-500 rounded-xl text-white uppercase p-1 px:12 md:px-20`,
    btnDiv: `flex justify-center mt-4`,
  };
  return (
    <div className={style.courseInfoCard}>
      <Image
        src={coverimg}
        width={200}
        height={200}
        style={{ width: "90%", height: "300px", objectFit: "cover" }}
        alt="cover image of course"
        className={style.courseImg}
        priority={true}
      />
      <div className={style.infoBox}>
        <div>
          <h2 className={style.description}>Becoming a Photographer</h2>
          <div className={style.teacher}>
            <Image
              src={coverimg}
              width={30}
              height={30}
              alt="image of trainer"
              className={style.teacherImg}
              priority={true}
            />
            <p>Clara Manning</p>
          </div>
          <div className={style.descBox}>
            <div className={style.info}>
              <BiSolidTimeFive className={style.iconColor} />
              <p className={style.descLine}>45 min</p>
            </div>
            <div className={style.info}>
              <AiFillStar className={style.iconColor} />
              <p className={style.descLine}>4.7/5.0</p>
            </div>
            <h1 className={style.description}>Course Description</h1>
            <p className={style.descLine}>
              This course is sooo good, you gotta purchase it and you'll be best
              photographer ever!
            </p>
          </div>
          <div className={style.btnDiv}>
            <button className={style.preview}>preview</button>
            <button className={style.buy}>buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCoursesInfo;
