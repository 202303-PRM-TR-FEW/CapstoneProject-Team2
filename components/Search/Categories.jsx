"use client";

import { useTranslations } from "next-intl";

const Categories = () => {
  const t = useTranslations("Components");
  return (
    <div className="flex flex-col gap-4 w-full ml-36 md:flex md:flex-row">
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">{t("Marketing")}</span>
      </label>
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">{t("HR")}</span>
      </label>
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">{t("Sales")}</span>
      </label>
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">{t("Drawing")}</span>
      </label>
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">{t("Data")}</span>
      </label>
    </div>
  );
};

export default Categories;
