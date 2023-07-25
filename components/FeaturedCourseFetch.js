// 'use client'
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchCourses } from "@/redux/api";
// import FeaturedCourses from "./FeaturedCourses";

// const FeaturedCourseFetch = () => {
//   const dispatch = useDispatch();
//   const courses = useSelector((state) => state.courses.courses);

//   useEffect(() => {
//     dispatch(fetchCourses());
//   }, []);

//   console.log(courses);
  
//   // Check if `courses` array is undefined or empty
//   if (!courses || courses.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Featured</h1>
//       <div>
//         {courses.map((course) => (
//           <FeaturedCourses key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedCourseFetch;
