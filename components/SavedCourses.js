"use client";

import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";


const style = {
  courseCard: `flex rounded-2xl bg-white m-2 shadow-lg dark:bg-slate-800`,
  coverImg: `rounded-2xl m-2`,
  infoSide: `flex flex-col justify-between m-2 py-4`,
  courseName: `flex items-center`,
  teacher: `text-sm text-slate-500`,
  button: `bg-blue-500 rounded-2xl p-1 text-xs w-min px-4 text-white`,
};

const SavedCourses = async () => {
  const savedCourses = useSelector((state) => state.savedCourses.savedCourses);
  const t = useTranslations("Components");



  return (
    <div>
      {savedCourses.map((course) => (
        <div className={style.courseCard} key={course.id}>
          <img
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
            <button className={style.button}>{t("Buy")}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCourses;
