"use client";

import { useTranslations } from "next-intl";
import { fetchCourses } from "@/redux/api";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.courses.courses);



  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  console.log(categories);

  const t = useTranslations("Components");
  return (
    <div className="flex flex-col gap-4 w-full ml-36 md:flex md:flex-row">
      {categories.slice(0,5).map((category) => ( 
      <label key={category.id} className="">
        <input type="checkbox" />
        <span className="ml-4">{category.category}</span>
      </label>
      ))}
    </div>
  );
};

export default Categories;
