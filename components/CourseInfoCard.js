"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import coverimg from "../public/assets/course-cover.png";

const CourseInfoCard = () => {
  const style = {
    courseInfoCard: `flex flex-col rounded-2xl bg-white m-2 w-full dark:bg-slate-800`,
    courseImg: `rounded-2xl m-2 bg-contain`,
    infoBox: `flex flex-col  justify-between m-2 py-4`,
    teacher: `flex text-sm items-center my-4 p-1 pr-3 rounded-full shadow-lg w-fit dark:bg-slate-600 ml-2`,
    teacherImg: `rounded-full mr-2`,
    descBox: `text-sm text-slate-600`,
    descLine: `my-2`,
    progressBar: `w-full bg-slate-200 rounded-full h-2.5`,
    progress: `bg-blue-600 h-2.5 rounded-full w-3/5`,
    progressInfo: `text-sm text-slate-500`,
  };
  const t = useTranslations("Components");
  return (
    <div className={style.courseInfoCard}>
      <Image
        src={coverimg}
        width={200}
        height={200}
        style={{ width: "90%", height: "300px", objectFit: "cover" }}
        alt="cover image of course"
        className={style.courseImg}
      />
      <div className={style.infoBox}>
        <div>
          <h2>Becoming a Photographer</h2>
          <div className={style.teacher}>
            <Image
              src={coverimg}
              width={30}
              height={30}
              alt="image of trainer"
              className={style.teacherImg}
            />
            <p>Clara Manning</p>
          </div>
          <div className={style.descBox}>
            <p className={style.descLine}>45 min</p>
            <p className={style.descLine}>4.7/5.0</p>
            <p className={style.descLine}>
              This course is so good, you gotta purchase it and you will be best
              photographer ever!
            </p>
          </div>
        </div>
        <div>
          <div className={style.progressBar}>
            <div className={style.progress}></div>
          </div>
          <p className={style.progressInfo}>{t("Completed")}: 60%</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoCard;
