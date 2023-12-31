"use client";
import { useTranslations } from "next-intl";

const CourseOverview = () => {
  const t = useTranslations("Components");
  return (
    <div className="rounded-2xl m-4">
      <div className="text-lg">{t("Course_Overview")}</div>
      <div className="p-2">
        <h2>Introduction</h2>
        <p className="text-slate-500 text-sm">Explanation of course blabla</p>
        <h2>Unit 1</h2>
        <p className="text-slate-500 text-sm">Foundations of blabla</p>
      </div>
    </div>
  );
};

export default CourseOverview;
