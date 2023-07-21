import React from "react"
import Image from "next/image"
import coverimg from "../public/assets/course-cover.png"
import { BiSolidTimeFive } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react"

const style = {
  name: `flex text-sm items-center text-slate-500 my-4 p-2 rounded-full shadow-lg w-fit`,
  trainerImg: `rounded-full mr-4`,
  infoPanel: `text-sm text-slate-600 mb-10`,
  timeLine: `my-2`,
  time: `flex flex-row mb-3 items-center`, // Updated: Added 'items-center' to center align icons and text
  iconTint: `text-gray-400`,
  details: `font-bold text-l mb-3`,
  title: `mb-6 mt-4`, // Updated: Added 'mt-4' for top margin
}

export default function CourseDescription() {
  return (
    <Card className="mt-6 w-96 ml-auto">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="img-blur-shadow"
          layout="fill"
        />
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
            <span className={style.timeLine}>1h 13m</span>{" "}
            {/* Updated: Changed 'p' to 'span' for inline display */}
          </div>
          <div className={style.time}>
            <AiFillStar className={style.iconTint} />
            <span className={style.timeLine}>5.0/5.0</span>{" "}
            {/* Updated: Changed 'p' to 'span' for inline display */}
          </div>
        </div>
        <Typography>
          <p className={style.details}>Course Description</p>
          This online course was created for you if you are interested in taking
          great digital photos and learning how to make your photography unique
          and outstanding.
        </Typography>
      </CardBody>
    </Card>
  )
}
