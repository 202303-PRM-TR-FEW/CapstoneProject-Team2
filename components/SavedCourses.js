"use client";

import { useSelector } from "react-redux";
import Image from "next/image";

const style = {
  courseCard: `flex rounded-2xl bg-white m-2 shadow-lg dark:bg-slate-800`,
  coverImg: `rounded-2xl m-2`,
  infoSide: `flex flex-col justify-between m-2 py-4`,
  courseName: `flex items-center`,
  teacher: `text-sm text-slate-500`,
  button: `bg-blue-500 rounded-2xl p-1 text-xs w-min px-4 text-white`,
};

const SavedCourses = () => {
  const savedCourses = useSelector((state) => state.savedCourses.savedCourses);

  return (
    <div>
      {savedCourses.map((course) => (
        <div className={style.courseCard} key={course.id}>
          <Image
            src={course.image}
            width={150}
            height={150}
            alt="cover image of course"
            className={style.coverImg}
            priority={true}
          />
          <div className={style.infoSide}>
            <div>
              <div className={style.courseName}>
                <h2>{course.title}</h2>
              </div>
              <p className={style.teacher}>{course.instructor}</p>
            </div>
            <button className={style.button}>buy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCourses;
