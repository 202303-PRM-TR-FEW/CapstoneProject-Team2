"use client";


import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

const SavedCoursesInfo = () => {
  const t = useTranslations("Components");

  const savedCourses = useSelector((state) => state.savedCourses.savedCourses);

  const style = {
    courseInfoCard: `flex flex-col rounded-2xl bg-white m-2 w-full dark:bg-slate-800`,
    courseImg: `rounded-2xl m-2 bg-contain`,
    infoBox: `flex flex-col  justify-between m-2 py-4`,
    teacher: `flex text-sm items-center my-4 p-1 pr-3 rounded-full shadow-lg w-fit dark:bg-slate-600`,
    teacherImg: `rounded-full mr-2`,
    descBox: `text-sm text-slate-600 mb-10`,
    progressInfo: `text-sm text-slate-500`,
    info: `flex flex-row mb-3`,
    iconColor: `text-gray-400`,
    description: `font-bold text-l mb-3 dark:text-white`,
    preview: `bg-white border border-blue-500 rounded-xl text-blue-500 uppercase p-1 px-12 md:px-20 mr-2 mr-4`,
    buy: `bg-blue-500 rounded-xl text-white uppercase p-1 px-12 md:px-20`,
    btnDiv: `flex justify-center mt-4`,
  };

  console.log(savedCourses);

  return (
    <div className={style.courseInfoCard}>
      {savedCourses.map((course) => (
        <div key={course.id}>
          <img
            src={course.image}
            width={200}
            height={200}
            style={{ width: "90%", height: "300px", objectFit: "cover" }}
            alt="cover image of course"
            className={style.courseImg}
            priority={true}
          />
          <div className={style.infoBox}>
            <div>
              <h2 className={style.description}>{course.title}</h2>
              <div className={style.teacher}>
                <img
                  src={course.instructor_img}
                  width={30}
                  height={30}
                  alt="image of trainer"
                  className={style.teacherImg}
                  priority={true}
                />
                <p>{course.instructor}</p>
              </div>
              <div className={style.descBox}>
                <div className={style.info}>
                  <BiSolidTimeFive className={style.iconColor} />
                  <p className={style.descLine}>{course.duration}</p>
                </div>
                <div className={style.info}>
                  <AiFillStar className={style.iconColor} />
                  <p className={style.descLine}>{course.rating}/5.0</p>
                </div>
                <h1 className={style.description}>
                  {t("Course_Description")}
                </h1>
                <p className={style.descLine}>{course.description}</p>
              </div>
              <div className={style.btnDiv}>
                <button className={style.preview}>{t("Preview")}</button>
                <button className={style.buy}>{t("Buy")}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCoursesInfo;
