import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { HiChevronRight } from "react-icons/hi";

const style = {
    courseCard: `mt-6 w-100 h-20`,
    courseInfo: `flex items-center justify-between`,
    courseTitle: `flex flex-col`,
    info:`text-sm`,
    title: `mb-1 text-md`,
    icon:`flex items-center w-5 h-5 text-gray-400`,

    
}
export default function CourseContent({ title, info }) {
  return (
    <Card className={style.courseCard}> 
      <CardBody className={style.courseInfo}>
        <div className={style.courseTitle}>
          <Typography variant="h5" color="blue-gray" className={style.title}>
            {title}
          </Typography>
          <Typography className={style.info}>
            {info}
          </Typography>
        </div>
        <div className={style.icon}>
          <HiChevronRight className={style.icon} />
        </div>
      </CardBody>
    </Card>
  );
}
