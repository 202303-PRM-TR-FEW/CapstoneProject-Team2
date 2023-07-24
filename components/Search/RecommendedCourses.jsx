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
      <h1 className="text-3xl font-bold text-center mb-10">
        {t("Recommended_Courses")}
      </h1>
      <Swiper

        slidesPerView={4}
        spaceBetween={10}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper w-[50rem] h-fit "
      >
        {courses.map((course) => (
          <SwiperSlide className=" bg-white rounded-2xl p-4 shadow" key={course.id}>
            <Course course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedCourses;
