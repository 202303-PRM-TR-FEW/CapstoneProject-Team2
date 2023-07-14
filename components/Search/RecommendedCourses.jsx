'use client'

import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import {  useEffect } from "react";
import { fetchCourses } from "../../redux/api";
import Course from "./Course";

const RecommendedCourses = ( { searchTerm } ) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);



  return (
    <div>
      <h1>Recommended Courses</h1>
      <div className="flex  text-center">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;