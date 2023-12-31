'use client'
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "@/redux/api";
import CourseProfileDescription from "@/components/CourseDetail/CourseProfileDescription";
import CourseContent from "@/components/CourseContent";
import { Button } from "@material-tailwind/react";
import { useEffect } from "react";

const CoursepPage = ({ params }) => {
  const style = {
    course: `flex flex-col md:flex-row w-full max-w-7xl md:w-11/12`,
    description: `w-full p-4`,
    overview: `flex flex-grow rounded-3xl p-4 mt-6 bg-white w-full flex-col justify between dark:bg-slate-800`,
    courseTitle: `font-bold text-xl mb-4 self-center`,
    content: `w-full dark:bg-slate-800`,
    buyContainer: `mt-16 flex justify-center`,
    buyButton: `w-28 h-8`,
  };
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const { courseProfile } = params;
  const courseId = parseInt(courseProfile); 
  const course = courses.find((course) => course.id === courseId);

  const lectureList = course?.lectures?.map((lecture, index) => <CourseContent key={index} title={index + 1 + `. ` + lecture} />);

  return (
    <div className={style.course}>
      <div className={style.description}>
        <CourseProfileDescription key={course} course={course} />
      </div>
      <div className={style.overview}>
        <h3 className={style.courseTitle}>Course Overview</h3>
        <div className={style.content}>
          <ul>{lectureList}</ul>
        </div>
        <div className={style.buyContainer}>
          <Button className={style.buyButton}>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CoursepPage;