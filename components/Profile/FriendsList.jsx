"use client";

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
      </div>
    </div>
  );
};

export default FriendsList;
