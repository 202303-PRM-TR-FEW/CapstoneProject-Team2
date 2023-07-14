"use client";

import SavedCourses from "@/components/SavedCourses";
import SavedCoursesInfo from "@/components/SavedCoursesInfo";

const style = {
  container: `flex flex-col md:flex-row gap-10 w-full p-4`,
  card: `w-1/2 flex-col hidden md:w-1/2 md:flex justify-start items-center`,
  title: `text-center font-bold text-2xl`,
};

const page = () => {
  return (
    <div>
      <h1 className={style.title}>Saved Courses</h1>
      <div className={style.container}>
        <div className={style.leftDiv}>
          <SavedCourses />
          <SavedCourses />
          <SavedCourses />
        </div>
        <div className={style.card}>
          <SavedCoursesInfo />
        </div>
      </div>
    </div>
  );
};

export default page;
