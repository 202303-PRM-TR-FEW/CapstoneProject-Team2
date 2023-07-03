"use client";

import CourseCard from "@/components/CourseCard";
import CourseInfoCard from "@/components/CourseInfoCard";

const page = () => {
  return (
    <div className="flex w-full flex-center">
      <div className="w-full md:w-1/2 flex flex-col items-center bg-slate-100">
        <div className="p-4">
          <h1 className="text-lg text-slate-500 font-semibold">My Courses</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className="flex-col hidden md:w-1/2 md:flex justify-between items-center">
        <CourseInfoCard className="w-full" />
        <div className="flex w-full justify-around">
          <button className="bg-blue-500 rounded-full mx-2 p-2 text-xs text-white">
            REVIEW COURSE
          </button>
          <button className="bg-blue-500 rounded-full mx-2 p-2 text-xs text-white">
            CONTINUE COURSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
