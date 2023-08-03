"use client";

import Image from "next/image";
import { BiCurrentLocation } from "react-icons/bi";
import profile from "@/public/assets/alper-yazagan.jpg";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";

const ProfileCard = () => {
  const t = useTranslations("Components");


  return (
    <div className="flex ml-4">
  
        <div className="mt-8 ">
          {/* <Image
            width={100}
            height={100}
            className="rounded-full"
            src={image}
            alt="profile"
            priority={true}
          /> */}
        </div>
      
      <div className="flex flex-col ml-4 gap-8">
        <div className="mt-8">
        
          <h1 className="text-2xl font-semibold">{}</h1>
        
          <div className="flex gap-2 items-center">
            <BiCurrentLocation />
            <p>London, UK</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-64 border-4 border-indigo-300 bg-slate-400 rounded-lg p-3 text-white">
        <div className="flex flex-col items-center">
          <h1>0</h1>
          <p className="text-xs">{t("Courses")}</p>
        </div>

        <div className="flex flex-col items-center">
          <h1>2</h1>
          <p className="text-xs">{t("Followers")}</p>
        </div>

        <div className="flex flex-col items-center">
          <h1>32</h1>
          <p className="text-xs">{t("Following")}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
