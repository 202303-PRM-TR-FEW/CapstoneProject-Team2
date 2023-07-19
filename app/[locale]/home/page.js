"use client";
import CourseCard from "@/components/CourseCard";
import FeaturedCourses from "@/components/FeaturedCourses";
import Categories from "@/components/Categories";
import { useTranslations } from "next-intl";

const style = {
  featuredContainer: "flex gap-4",
  title: "font-bold text-2xl my-4",
  myLearning: "flex flex-wrap",
  btn: "bg-blue-500 text-white uppercase p-2 px-10 rounded-xl w-full md:w-auto",
  btnDiv: "flex justify-center mt-4 md:w-auto w-full",
  container: "p-4",
};

const Page = () => {
  const t = useTranslations("Home_Page");

  return (
    <div className={style.container}>
      <h1 className={style.title}>{t("Featured_Courses")}</h1>
      <h2>{t("blabla")}</h2>
      <div className={style.featuredContainer}>
        <FeaturedCourses />
        <FeaturedCourses />
        <FeaturedCourses />
        <FeaturedCourses />
      </div>
      <h1 className={style.title}>{t("Categories")}</h1>
      <Categories />
      <h1 className={style.title}>{t("My_Learning")}</h1>
      <div className={style.myLearning}>
        <CourseCard />
        <CourseCard />
      </div>
      <div className={style.btnDiv}>
        <button className={style.btn}>{t("See_All")}</button>
      </div>
    </div>
  );
};

export default Page;
