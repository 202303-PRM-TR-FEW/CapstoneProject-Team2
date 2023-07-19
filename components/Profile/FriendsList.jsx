"use client";

import Image from "next/image";
import profile from "../../public/assets/alper-yazagan.jpg";
import { fetchUsers } from "../../redux/apiUsers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const FriendsList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const selectedProfiles = useSelector((state) => state.users.selectedProfiles);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className=" mt-12">
      <h1 className="font-bold mt-8">Friend </h1>
      <div className="flex flex-col gap-4 bg-white w-[26rem] h-[20] p-4  rounded-xl mt-8">
        {users.slice(0, 2).map((user) => (
          <div key={user.id} className="flex justify-around gap-2">
            <div className="flex gap-2">
              <Image
                className="w-8 rounded-full"
                src={profile}
                alt="profile"
                priority={true}
              />
              <div className=" w-16">
                <h1>{user.first}</h1>
                <h1>{user.last}</h1>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-indigo-400 rounded-xl p-1 text-white">
                Delete
              </button>

              <button className="bg-indigo-400 rounded-xl p-1 text-white">
                View
              </button>
            </div>
          </div>
        ))}

        {selectedProfiles.map((selectedProfile) => (
          <div key={selectedProfile.id} className="flex justify-around gap-2">
            <div className="flex gap-2">
              <Image
                className="w-8 rounded-full"
                src={profile}
                alt="profile"
                priority={true}
              />
              <div className=" w-16">
                <h1>{selectedProfile.first}</h1>
                <h1>{selectedProfile.last}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
