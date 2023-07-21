"use client";
<<<<<<< HEAD

import Image from "next/image";
import profile from "@/public/assets/alper-yazagan.jpg";
import { useTranslations } from "next-intl";

const FriendSuggestions = () => {
  const t = useTranslations("Components");
  return (
    <div className="">
      <h1 className="font-bold mt-8">{t("Friend_Suggestions")}</h1>
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
              {t("Follow")}
            </button>
            <button className="bg-indigo-400 rounded-xl p-1 text-white">
              {t("Message")}
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
              {t("Follow")}
            </button>
            <button className="bg-indigo-400 rounded-xl p-1 text-white">
              {t("Message")}
            </button>
          </div>
        </div>
        <hr className="mt-4" />
      </div>
    </div>
  );
};

=======
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedProfile, removeUser } from "../../redux/apiUsers";
import { useState } from "react";
import EmailForm from "./EmailForm";


const FriendSuggestions = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddButtonClick = (selectedProfile) => {
    dispatch(addSelectedProfile(selectedProfile));
    dispatch(removeUser({ id: selectedProfile.id }));
  };

  const handleMessageButtonClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseEmailForm = () => {
    setSelectedUser(null);
  };



  return (
    <div className="">
      <h1 className="font-bold mt-8">Friend Suggestions</h1>
      <div className=" flex flex-col gap-2 mt-8 bg-white w-[26rem] p-4  rounded-xl">
        {users.slice(0, 2).map((user) => (
          <div
            key={user.id}
            className=" items-center flex justify-around gap-2"
          >
            <div className="flex gap-2">
              <img
                className="w-8 rounded-full  w-[90px] h-[90px]  "
                src={user.image}
                alt="profile"
                size={50}
              />
            </div>
            <div className=" w-16">
              <h1>{user.first}</h1>
              <h1>{user.last}</h1>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleAddButtonClick(user)}
                className="bg-indigo-400 h-16 rounded-xl p-1 text-white"
              >
                Add
              </button>
              <button
            
                onClick={() => handleMessageButtonClick(user)}
                className="bg-indigo-400 h-16 rounded-xl p-1 text-white"
              >
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedUser && <EmailForm user={selectedUser} onClose={handleCloseEmailForm} />}
    </div>
  );
};

>>>>>>> main
export default FriendSuggestions;
