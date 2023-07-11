import CourseInfoCard from "@/components/CourseInfoCard";
import CourseOverview from "@/components/CourseOverview";

const page = () => {
  const style = {
    main: `flex flex-col items-center justify-center md:ml-16 md:flex-row`,
    boxes: `h-1/2 w-full md:w-1/2`,
  };
  return (
    <div className={style.main}>
      <div className={style.boxes}>
        <CourseInfoCard />
      </div>
      <div className={style.boxes}>
        <CourseOverview />
      </div>
    </div>
  );
};

export default page;
