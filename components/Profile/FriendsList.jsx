"use client";

import { fetchUsers } from "../../redux/apiUsers";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedProfile } from "../../redux/apiUsers";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="flex flex-col gap-4 bg-white w-[26rem] dark:bg-slate-800 h-[20] p-4  rounded-xl mt-8">
        {selectedProfiles.map((selectedProfile) => (
          <div
            key={selectedProfile.id}
            className=" items-center flex justify-around gap-2"
          >
            <div className="flex gap-2 ">
              <Image
                className="w-8 rounded-full  w-[90px] h-[90px]  "
                src={selectedProfile.image}
                alt="profile"
                width={50}
                height={50}
              />
            </div>
            <div className=" w-16">
              <h1>{selectedProfile.first}</h1>
              <h1>{selectedProfile.last}</h1>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleDeleteButtonClick(selectedProfile)}
                className="bg-indigo-300 h-8 rounded-xl p-1 text-white"
              >
                Delete
              </button>

              <Link
                className="flex  bg-indigo-300 h-8 rounded-xl items-center p-1 text-white"
                href={`/profile/${selectedProfile.id}`}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
