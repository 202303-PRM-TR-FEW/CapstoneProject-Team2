"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import saveIconFull from "../public/assets/save-icon-full.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "@/redux/api";

const CourseCard = () => {
  const style = {
    courseCard: `flex rounded-2xl bg-white m-2 shadow-lg dark:bg-slate-800`,
    coverImg: `rounded-2xl m-2`,
    infoSide: `flex flex-col justify-between m-2 py-4`,
    courseName: `flex items-center`,
    teacher: `text-sm text-slate-500`,
    progressBar: `w-full bg-slate-200 rounded-full h-2.5`,
    progress: `bg-blue-600 h-2.5 rounded-full w-3/5`,
    progressInfo: `text-sm text-slate-500`,
  };

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const t = useTranslations("Components");

  return (
    <div>
    {courses.map((course) => (
      <div className={style.courseCard}>
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
              <Image
                src={saveIconFull}
                width={25}
                height={25}
                alt="bookmark icon"
                priority={true}
              />
            </div>
            <p className={style.teacher}>{course.instructor}</p>
          </div>
          <div>
            <div className={style.progressBar}>
              <div className={style.progress}></div>
            </div>
            <p className={style.progressInfo}>{t("Completed")}: 60%</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default CourseCard;
