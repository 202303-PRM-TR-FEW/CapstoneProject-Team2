'use client'
import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import Image from "next/image";

const ProfileCard = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="flex ml-4">
      <div key={user.id} className="flex mt-8">
        <div className="mt-8">
          <Image
            className="rounded-full w-32 h-32"
            src={user.image}
            alt="profile"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col ml-4 gap-8">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">
              {user.first} {user.last}
            </h1>
            <div className="flex gap-2 items-center">
              <BiCurrentLocation />
              <p>{user.location}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 w-64 border-4 border-indigo-300 bg-slate-400 rounded-lg p-3 text-white">
            <div className="flex flex-col items-center">
              <h1>0</h1>
              <p className="text-xs">Total Courses</p>
            </div>

            <div className="flex flex-col items-center ">
              <h1>{user.friends}</h1>
              <h1>Friends</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
