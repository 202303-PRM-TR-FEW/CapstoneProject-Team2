"use client";
import React from "react";
import Image from "next/image";

import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function CourseProfileDescription({ course }) {
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

  if (!course) {
    return null;
  }
  return (
    <Card
      className="mt-6 bg-transparent dark:bg-slate-800"
      style={{ border: "none" }}
    >
      <CardHeader
        color="blue-gray"
        className={`relative rounded-t-3xl ${style.title}`}
      >
        <div className="h-full w-full relative">
          <Image
            src={course.image}
            alt="img-blur-shadow"
            width={800}
            height={400}
            className="rounded-t-3xl"
          />
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className={style.title}>
          {course.title}
        </Typography>
        <div className={style.name}>
          <img
            src={course.instructor_img}
            width={30}
            height={30}
            alt="image of trainer"
            className={style.trainerImg}
          />
          <p>{course.instructor}</p>
        </div>
        <div className={style.infoPanel}>
          <div className={style.time}>
            <BiSolidTimeFive className={style.iconTint} />
            <span className={style.timeLine}>{course.duration}</span>
          </div>
          <div className={style.time}>
            <AiFillStar className={style.iconTint} />
            <span className={style.timeLine}>{course.rating}/5.0</span>
          </div>
        </div>
        <Typography>
          <p className={style.details}>Course Description</p>
          <p>{course.description}</p>
        </Typography>
      </CardBody>
    </Card>
  );
}
