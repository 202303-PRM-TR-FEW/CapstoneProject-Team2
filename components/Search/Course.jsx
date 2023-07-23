

const Course = ({ course }) => {


  
  return (

    <div key={course.id}>
      <img className=" block  w-44 h-44 object-cover" src={course.image} alt={course.name} />
      <h1>{course.name}</h1>
      <p>{course.description}</p>
    </div>
  
  );
  
};

export default Course;
