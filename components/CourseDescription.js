import React from "react";
import Image from "next/image";
import coverimg from "../public/assets/course-cover.png";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const style = {
  name: `flex text-sm items-center my-2 p-2 rounded-full shadow-lg w-fit dark:bg-slate-700`,
  trainerImg: `rounded-full mr-4`,
  infoPanel: `text-sm text-slate-600`,
  timeLine: `ml-1`,
  time: `flex flex-row items-center mb-3`, 
  iconTint: `text-gray-400`,
  details: `font-bold text-l mb-3`,
  title: `mb-6 mt-4`, 
};

export default function CourseDescription() {
  return (
    <Card className="mt-6 bg-transparent dark:bg-slate-800" style={{ border: "none"}}>
      <CardHeader color="blue-gray" className={`relative rounded-t-3xl ${style.title}`}>
        <div className="h-full w-full relative">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="img-blur-shadow"
            layout="fill"
            objectFit="cover"
            className="rounded-t-3xl"
          />
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className={style.title}>
          Building İOS15 APP
        </Typography>
        <div className={style.name}>
          <Image
            src={coverimg}
            width={30}
            height={30}
            alt="image of trainer"
            className={style.trainerImg}
          />
          <p>Tom Collins</p>
        </div>
        <div className={style.infoPanel}>
          <div className={style.time}>
            <BiSolidTimeFive className={style.iconTint} />
            <span className={style.timeLine}>1h 13m</span>
          </div>
          <div className={style.time}>
            <AiFillStar className={style.iconTint} />
            <span className={style.timeLine}>5.0/5.0</span>
          </div>
        </div>
        <Typography>
          <p className={style.details}>Course Description</p>
          <p>
            This online course was created for you if you are interested in taking
            great digital photos and learning how to make your photography unique
            and outstanding.
          </p>
        </Typography>
      </CardBody>
    </Card>
  );
}
