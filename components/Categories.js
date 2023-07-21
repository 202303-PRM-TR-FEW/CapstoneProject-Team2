"use client";
import { BsGraphUpArrow, BsFillPeopleFill, BsStars } from "react-icons/bs";
import { MdOutlineDraw, MdDesignServices } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { BiSolidBulb } from "react-icons/bi";
import { useTranslations } from "next-intl";

const style = {
  icon: `text-gray-400 mb-1 group-hover:text-blue-500`,
  oneBox: `flex hover:bg-blue-100 hover:cursor-pointer border
   hover:border-blue-500 justify-center items-center bg-white w-36 
   rounded-xl px-10 p-2 flex-col text-gray-600 group hover:text-blue-500 dark:text-white dark:bg-slate-800 border dark:border-slate-700 dark:hover:text-blue-500 dark:hover:border-blue-500`,
  container: `flex gap-4`,
};

const Categories = () => {
  const t = useTranslations("Components");
  return (
    <div className={style.container}>
      <div className={style.oneBox}>
        <BsGraphUpArrow size={30} className={style.icon} />
        <h3>{t("Sales")}</h3>
      </div>
      <div className={style.oneBox}>
        <BsFillPeopleFill size={30} className={style.icon} />
        <h3>{t("HR")}</h3>
      </div>
      <div className={style.oneBox}>
        <MdOutlineDraw size={30} className={style.icon} />
        <h3>{t("Drawing")}</h3>
      </div>
      <div className={style.oneBox}>
        <FaTable size={30} className={style.icon} />
        <h3>{t("Big_Data")}</h3>
      </div>
      <div className={style.oneBox}>
        <MdDesignServices size={30} className={style.icon} />
        <h3>{t("Design")}</h3>
      </div>
      <div className={style.oneBox}>
        <BiSolidBulb size={30} className={style.icon} />
        <h3>{t("Marketing")}</h3>
      </div>
      <div className={style.oneBox}>
        <BsStars size={30} className={style.icon} />
        <h3>{t("Astronomy")}</h3>
      </div>
    </div>
  );
};

export default Categories;
