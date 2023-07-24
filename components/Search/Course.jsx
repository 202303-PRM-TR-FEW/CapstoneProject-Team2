import StarRating from "./StarRating";

const Course = ({ course }) => {


  
  return (

    <div className="flex flex-col gap-2 " key={course.id}>
      <img className="  h-[15rem]" src={course.image} alt={course.name} />
        { course.is_paid ? null : <div className=" absolute ml-4 mt-2 bg-[#ECEB98] w-14 p-2 rounded-2xl " > FREE </div> }
      <h1 className=" font-bold" >{course.title}</h1>
      <p className=" opacity-50" >{course.description}</p>
      <p className=" font-mono text-xs opacity-50"> {course.insructor} </p>
      <p> {course.rating} / 5  </p>
      <StarRating rating={course.rating} />
      <p className=" font-bold"> ${course.price} </p>
    </div>
  
  );
  
};

export default Course;
