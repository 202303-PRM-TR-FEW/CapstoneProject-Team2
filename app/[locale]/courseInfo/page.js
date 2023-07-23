"use client";
import CourseDescription from "@/components/CourseDescription";
import CourseContent from "@/components/CourseContent";
import { Button } from "@material-tailwind/react";

const style = {
  course : `flex flex-col md:flex-row w-full md:w-11/12`,
  description : `w-full p-4`,
  overview : `flex-grow p-4 bg-white w-full flex-col justify between`,
  courseTitle : `font-bold mb-4`,
  content : `w-full`,
  buyContainer : `mt-52`,
  buyButton: `w-full h-8`,


}
const page = () => {
  return (
    <div className={style.course}>
      <div className={style.description}> 
        <CourseDescription />
      </div>
      <div className={style.overview}> 
      <h3 className={style.courseTitle}>Course Overview</h3>
      <div className={style.content}>
        <CourseContent 
          title="Introduction" 
          info="1 Video"
        />
        <CourseContent 
          title="1. Software Setup"
          info="3 videos"
        />
        <CourseContent 
          title="2. UI Fundamentals"
          info="6 Videos"
        />
        <CourseContent 
          title="3. Testing and Finishing"
          info="2 videos"
        />
        <CourseContent 
          title="Skill Test"
          info="1 video"
        />
        </div>
        <div className={style.buyContainer}> 
          <Button className={style.buyButton}>Buy Now</Button> 
        </div>
      </div>
    </div>
  );
};

export default page;
