"use client";

<<<<<<< HEAD
import Button from "./Button";
import Image from "next/image";
import profile from "@/public/assets/alper-yazagan.jpg";
import { useTranslations } from "next-intl";

const FriendsList = () => {
  const t = useTranslations("Components");

  return (
    <div>
      <h1 className="mt-8 font-bold">{t("Friends")}</h1>
      <div className="mt-8 bg-white w-[26rem] p-4 h-40 rounded-xl dark:bg-slate-800">
        <div className="flex justify-around">
          <div className="flex gap-2">
            <Image
              className="w-8"
              src={profile}
              alt="profile"
              priority={true}
            />
            <h1>Laura Evans</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-indigo-400 rounded-xl p-1 text-white">
              {t("Profile")}
            </button>
            <button className="bg-indigo-400 rounded-xl p-1 text-white">
              {t("Delete")}
            </button>
          </div>
        </div>
        <div className="flex mt-6 justify-around">
          <div className="flex gap-2">
            <Image
              className="w-8"
              src={profile}
              alt="profile"
              priority={true}
            />
            <h1>Laura Evans</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-indigo-400 rounded-xl p-1 text-white">
              {t("Profile")}
            </button>
            <button className="bg-indigo-400 rounded-xl p-1 text-white">
              {t("Delete")}
            </button>
          </div>
        </div>
        <hr className="mt-4" />
      </div>
      <div className="flex gap-4 mt-8">
        <Button text={t("Find_Friends")} />
        <Button text={t("Invite_Friends")} />
=======
import Image from "next/image";

import { fetchUsers } from "../../redux/apiUsers";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedProfile } from "../../redux/apiUsers";
import { useEffect } from "react";
import Link from "next/link";

const FriendsList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const selectedProfiles = useSelector((state) => state.users.selectedProfiles);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleDeleteButtonClick = (selectedProfile) => {
    dispatch(removeSelectedProfile(selectedProfile));
  };

  return (
    <div className=" mt-12">
      <h1 className="font-bold mt-8">Friends</h1>
      <div className="flex flex-col gap-4 bg-white w-[26rem] h-[20] p-4  rounded-xl mt-8">
        {selectedProfiles.map((selectedProfile) => (
          <div
            key={selectedProfile.id}
            className=" items-center flex justify-around gap-2"
          >
            <div className="flex gap-2 ">
              <img
                className="w-8 rounded-full  w-[90px] h-[90px]  "
                src={selectedProfile.image}
                alt="profile"
              />
            </div>
            <div className=" w-16">
              <h1>{selectedProfile.first}</h1>
              <h1>{selectedProfile.last}</h1>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleDeleteButtonClick(selectedProfile)}
                className="bg-indigo-400 h-16 rounded-xl p-1 text-white"
              >
                Delete
              </button>
              <button className="bg-indigo-400 h-16 rounded-xl p-1 text-white">
                <Link href={`/profile/${selectedProfile.id}`}>View</Link>
              </button>
            </div>
          </div>
        ))}
>>>>>>> main
      </div>
    </div>
  );
};

export default FriendsList;
