"use client";

import CourseCard from "@/components/CourseCard";
import CourseInfoCard from "@/components/CourseInfoCard";

const page = () => {
  const style = {
    coursesDiv: `flex w-full  flex-center`,
    leftDiv: `w-full md:w-1/2 flex flex-col items-center bg-slate-100`,
    rightDiv: `flex-col hidden md:mt-16 md:w-1/2 md:flex justify-start items-center`,
    heading: `p-4 text-lg text-slate-500 font-semibold`,
    cardList: `flex flex-col justify-center items-center`,
    btnDiv: `flex w-full justify-around mt-8`,
    button: `bg-blue-500 rounded-full mx-2 p-2 text-xs text-white`,
  };

  return (
    <div className={style.coursesDiv}>
      <div className={style.leftDiv}>
        <div className={style.heading}>
          <h1>My Courses</h1>
        </div>
        <div className={style.cardList}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className={style.rightDiv}>
        <CourseInfoCard />
        <div className={style.btnDiv}>
          <button className={style.button}>REVIEW COURSE</button>
          <button className={style.button}>CONTINUE COURSE</button>
        </div>
      </div>
    </div>
  );
};

export default page;
