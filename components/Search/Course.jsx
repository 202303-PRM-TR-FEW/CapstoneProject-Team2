import StarRating from "./StarRating";

const Course = ({ course }) => {


  
  return (

    <div key={course.id}>
      <img className=" w-full h-[15rem]" src={course.image} alt={course.name} />
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
