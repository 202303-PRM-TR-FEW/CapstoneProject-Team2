const Course = ({ course }) => {
  return (
    <div key={course.id}>
      <img
        className="w-[20rem] h-[10rem]"
        src={course.image}
        alt={course.category}
      />
      <h1>{course.title}</h1>
      <p>{course.author}</p>
    </div>
  );
};

export default Course;
