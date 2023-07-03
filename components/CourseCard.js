"use client";

import Image from "next/image";
import coverimg from "../public/assets/course-cover.png";
import saveIconEmpty from "../public/assets/save-icon-empty.png";
import saveIconFull from "../public/assets/save-icon-full.png";

const CourseCard = () => {
  return (
    <div className="flex rounded-2xl bg-white m-2 shadow-lg">
      <Image
        src={coverimg}
        width={150}
        height={150}
        alt="cover image of course"
        className="rounded-2xl m-2"
      />
      <div className=" flex flex-col justify-between m-2 py-4">
        <div>
          <div className="flex items-center">
            <h2>Becoming a Photographer</h2>
            <Image
              src={saveIconFull}
              width={25}
              height={25}
              alt="bookmark icon"
            />
          </div>

          <p className="text-sm text-slate-500">Clara Manning</p>
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

export default CourseCard;
