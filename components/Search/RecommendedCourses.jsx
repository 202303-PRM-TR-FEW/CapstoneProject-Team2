"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCourses } from '@/redux/api';
import { useTranslations } from 'next-intl';
import Course from './Course';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperSlide, Swiper } from 'swiper/react';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const RecommendedCourses = ({ searchTerm, isFreeChecked, isPaidChecked }) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  const t = useTranslations('Search');

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  if (!courses) {
    return <div>Loading...</div>;
  }


  const filteredCourses = courses.filter((course) => {
    if (isFreeChecked && isPaidChecked) {
      return true;
    } else if (isFreeChecked && !course.price) {
      return true;
    } else if (isPaidChecked && course.price) {
      return true;
    } else if (!isFreeChecked && !isPaidChecked) {
      return true;
    } else if (
      searchTerm &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });


  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-10">{t('Top Rated Courses')}</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-[60rem]  "
      >
      
        {filteredCourses
        .filter((course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((course) => (
          <SwiperSlide className='bg-white rounded-2xl p-4 shadow' key={course.id}>
            <Course course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedCourses;
