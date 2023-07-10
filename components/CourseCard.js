"use client";

import Image from "next/image";
import coverimg from "../public/assets/course-cover.png";
import saveIconEmpty from "../public/assets/save-icon-empty.png";
import saveIconFull from "../public/assets/save-icon-full.png";

const CourseCard = () => {
  const style = {
    courseCard: `flex rounded-2xl bg-white m-2 shadow-lg`,
    coverImg: `rounded-2xl m-2`,
    infoSide: `flex flex-col justify-between m-2 py-4`,
    courseName: `flex items-center`,
    teacher: `text-sm text-slate-500`,
    progressBar: `w-full bg-slate-200 rounded-full h-2.5`,
    progress: `bg-blue-600 h-2.5 rounded-full w-3/5`,
    progressInfo: `text-sm text-slate-500`,
  };

  return (
    <div className={style.courseCard}>
      <Image
        src={coverimg}
        width={150}
        height={150}
        alt="cover image of course"
        className={style.coverImg}
        priority={true}
      />
      <div className={style.infoSide}>
        <div>
          <div className={style.courseName}>
            <h2>Becoming a Photographer</h2>
            <Image
              src={saveIconFull}
              width={25}
              height={25}
              alt="bookmark icon"
              priority={true}
            />
          </div>

          <p className={style.teacher}>Clara Manning</p>
        </div>
        <div>
          <div className={style.progressBar}>
            <div className={style.progress}></div>
          </div>
          <p className={style.progressInfo}>Completed: 60%</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
