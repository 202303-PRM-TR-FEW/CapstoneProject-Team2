"use client";

import { useState } from "react";
import SearchBar from "@/components/Search/SearchBar";
import TopSearches from "@/components/Search/TopSearches";
import Categories from "@/components/Search/Categories";
import TopRatedCourses from "@/components/Search/StarRating";
import RecommendedCourses from "@/components/Search/RecommendedCourses";
import { useTranslations } from "next-intl";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const t = useTranslations("Search_Page");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="flex flex-col gap-7 items-center">
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <hr className="w-full" />
      <TopSearches />
      <hr className="w-full" />
      <Categories />
      <hr className="w-full" />
      <div className="flex flex-col gap-4 w-full ml-36 md:flex md:flex-row">
        <TopRatedCourses />
        <div>
          <h1>{t("Levels")}</h1>
          <div className="flex gap-2">
            <label className="">
              <input type="checkbox" />
              <span className="ml-2">Data</span>
            </label>
            <label className="">
              <input type="checkbox" />
              <span className="ml-2">Data</span>
            </label>
            <label className="">
              <input type="checkbox" />
              <span className="ml-2">Data</span>
            </label>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <RecommendedCourses searchTerm={searchTerm} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-10/12 rounded-2xl">
        {t("Show_results")}
      </button>
    </div>
  );
};

export default Page;
