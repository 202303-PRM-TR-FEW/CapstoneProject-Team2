"use client";

import CourseCard from "@/components/CourseCard";
import FeaturedCourses from "@/components/FeaturedCourses";
import Categories from "@/components/Categories";

const style = {
  featuredContainer : `flex gap-4`,
  title : `font-bold text-2xl my-4`,
  myLearning : `flex`,
  btn : `bg-blue-500 text-white uppercase p-2 px-10 rounded-xl`,
  btnDiv : `flex justify-center mt-4`
}

const page = () => {
   return (
    <div className="ml-24">
      <h1 className={style.title}>Featured Courses</h1>
      <div className={style.featuredContainer}>
        <FeaturedCourses />
        <FeaturedCourses />
        <FeaturedCourses />
        <FeaturedCourses />
      </div>
      <h1 className={style.title}>Categories</h1>
      <Categories />
      <h1 className={style.title}>My Learning</h1>
      <div className={style.myLearning}>
        <CourseCard />
        <CourseCard />
      </div>
      <div className={style.btnDiv}>
        <button className={style.btn}>see all</button>
      </div>
    </div>
  );
};

export default page;
