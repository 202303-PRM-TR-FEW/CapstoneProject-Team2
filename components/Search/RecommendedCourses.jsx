"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "@/redux/api";
import { useTranslations } from "next-intl";
import Course from "./Course";
import "swiper/css"; // Import Swiper base styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperSlide, Swiper } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const RecommendedCourses = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  const t = useTranslations("Components");

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  if (!courses) {
    return <div>Loading...</div>;
  }

  console.log(courses);
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-[20rem] h-[20rem]"
      >
        {courses.map((course) => (
          <SwiperSlide className="text-center flex items-center justify-center" key={course.id} >
            <Course course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedCourses;
