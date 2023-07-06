import CourseInfoCard from "@/components/CourseInfoCard";
import CourseOverview from "@/components/CourseOverview";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <CourseInfoCard className="md:w1-2" />
      <CourseOverview className="md:w1-2" />
    </div>
  );
};

export default page;
