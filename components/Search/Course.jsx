import StarRating from "./StarRating";
import Link from "next/link";
import Image from "next/image";

const Course = ({ course }) => {
  return (
    <div className="flex flex-col gap-2 h-[20rem] " key={course.id}>
      <Link href={`/courseInfo/${course.id}`}>
        <Image className=" h-[10rem]  "src={course.image} alt={course.title} width={200} height={100} />
        {course.is_paid ? null : (
          <div className=" absolute ml-4 mt-2 bg-[#ECEB98] w-14 p-2 rounded-2xl ">
            {" "}
            FREE{" "}
          </div>
        )}
        <h1 className=" font-bold">{course.title}</h1>

        <p className=" font-mono text-xs opacity-50"> {course.instructor} </p>
        <p> {course.rating} / 5 </p>
        <StarRating rating={course.rating} />
        <p className=" font-bold"> ${course.price} </p>
      </Link>
    </div>
  );
};

export default Course;
