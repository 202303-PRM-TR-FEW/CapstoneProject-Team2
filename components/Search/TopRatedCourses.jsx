import { FaStar } from "react-icons/fa";

const TopRatedCourses = () => {
  return (
    <div>
      <h1>TOP RATED COURSES</h1>
      <div className="flex">
        <FaStar size={30} className="text-yellow-500" />
        <FaStar size={30} className="text-yellow-500" />
        <FaStar size={30} className="text-yellow-500" />
        <FaStar size={30} className="text-yellow-500" />
        <FaStar size={30} className="text-yellow-500" />
      </div>
    </div>
  );
};

export default TopRatedCourses;
