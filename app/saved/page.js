"use client";

import SavedCourses from "@/components/SavedCourses";
import SavedCoursesInfo from "@/components/SavedCoursesInfo";

const style = {
  container : `flex flex-row ml-24 gap-10`,
  card : `w-fit`,
  title : `ml-24 font-bold text-2xl`
}

const page = () => {
  return (
    <>
      <h1 className={style.title}>Saved Courses</h1>
      <div className={style.container}>
        <div>
          <SavedCourses />
          <SavedCourses />
          <SavedCourses />
        </div>
        <div className={style.card}>
          <SavedCoursesInfo />
        </div>
      </div>
    </>
  );
};

export default page;
