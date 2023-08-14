"use client";

import React, { useState } from 'react';
import SearchBar from '@/components/Search/SearchBar';
import TopSearches from '@/components/Search/TopSearches';
import RecommendedCourses from '@/components/Search/RecommendedCourses';
import { useTranslations } from 'next-intl';
import PaidFree from '@/components/Search/PaidFree';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFreeChecked, setIsFreeChecked] = useState(false);
  const [isPaidChecked, setIsPaidChecked] = useState(false);

  const t = useTranslations('Components');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCheckboxChange = (freeChecked, paidChecked) => {
    setIsFreeChecked(freeChecked);
    setIsPaidChecked(paidChecked);
  };

  return (
    <div className="flex flex-col gap-7 items-center justify-center h-screen  w-full  ">
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <hr className="w-full" />
      <TopSearches />
      <hr className="w-full" />
      <div className="flex flex-col gap-4 w-full ml-36 md:flex md:flex-row">
        <PaidFree onChange={handleCheckboxChange} />
      </div>
      <hr className="w-full" />
      <RecommendedCourses searchTerm={searchTerm} isFreeChecked={isFreeChecked} isPaidChecked={isPaidChecked} />
    </div>
  );
};

export default Page;
  