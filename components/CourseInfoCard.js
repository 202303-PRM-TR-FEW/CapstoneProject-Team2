"use client";

import Image from "next/image";
import coverimg from "../public/assets/course-cover.png";

const CourseInfoCard = () => {
  return (
    <div className="flex flex-col rounded-2xl bg-white m-2">
      <Image
        src={coverimg}
        width={200}
        height={200}
        style={{ width: "90%", height: "300px", objectFit: "cover" }}
        alt="cover image of course"
        className="rounded-2xl m-2 bg-contain "
      />
      <div className=" flex flex-col  justify-between m-2 py-4">
        <div>
          <div className="flex items-center">
            <h2>Becoming a Photographer</h2>
          </div>
          <div className="flex text-sm items-center text-slate-500 my-4 p-2 rounded-full shadow-lg">
            <Image
              src={coverimg}
              width={30}
              height={30}
              alt="image of trainer"
              className="rounded-full mr-4"
            />
            <p>Clara Manning</p>
          </div>
          <div className="text-sm text-slate-600">
            <p className="my-2">45 min</p>
            <p className="my-2">4.7/5.0</p>
            <p className="my-2">
              This course is crazy good, you gotta purchase it and you'll be
              best photographer ever!
            </p>
          </div>
        </div>
        <div>
          <div class="w-full bg-slate-200 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full w-3/5"></div>
          </div>
          <p className="text-sm text-slate-500">Completed: 60%</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoCard;
