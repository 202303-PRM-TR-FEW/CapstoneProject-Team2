"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import teacherImg from "@/public/assets/alper-yazagan.jpg";
//import Youtube from "react-youtube";
//import LiteYouTubeEmbed from "react-lite-youtube-embed";
//import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

/* Note: install/delete react-youtube / react-lite-youtube-embed libraries */

const page = () => {
  const t = useTranslations("Spesific_Course_Page");
  //temporary mock course data
  const courseData = {
    name: "Becoming a Pro The Office Fan",
    teacher: "Alper Yazagan",
    duration: "45 min",
    rating: "4.8/5.0",
    description:
      "This course will teach you all the details you need to know to become a professional The Office fan.",
    youtubeLink: "\\www.youtube.com/watch?v=Xnk4seEHmgw",
    lectures: [
      "Best pranks of Jim",
      "Pam & Jim Relationship",
      "History of Schrute Farm",
      "Funny Facts about the show",
      "mystery of Creed",
      "Behind the scenes",
    ],
  };

  const opts = {
    width: "100%",
    autoplay: 1,
    playerVars: {
      origin: "http://localhost:3000",
    },
  };

  const style = {
    main: `flex flex-col items-center justify-center md:flex-row`,
    boxes: `h-1/2 w-full md:w-1/2`,
    teacher: `flex text-sm items-center text-slate-500 my-4 p-2 rounded-full shadow-lg w-fit`,
    teacherImg: `rounded-full mr-4`,
    info: `p-4`,
    header: `text-2xl`,
    lecture: `rounded-lg p-2 m-2 shadow-lg`,
  };

  return (
    <div className={style.main}>
      <div className={style.boxes}>
        {/*  <Youtube videoId="Xnk4seEHmgw" opts={opts} /> */}
        <div className="h-56 w-96 border-2">
          temporary placeholder div for video
        </div>
        <div className={style.info}>
          <h1 className={style.header}>{courseData.name}</h1>
          <div className={style.teacher}>
            <Image
              src={teacherImg}
              width={50}
              height={50}
              alt="image of trainer"
              className={style.teacherImg}
            />
            <p>{courseData.teacher}</p>
          </div>
          <p>
            {t("Duration")} {courseData.duration}
          </p>
          <p>
            {t("Rating")} {courseData.rating}
          </p>
          <h2 className={style.header}>{t("Course_Description")}</h2>
          <p>{courseData.description}</p>
        </div>
      </div>
      <div className={style.boxes}>
        <div className={style.info}>
          <h2 className={style.header}>{t("Course_Overview")}</h2>
          {courseData.lectures.map((lecture, id) => (
            <li key={id} className={style.lecture}>
              {lecture}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
