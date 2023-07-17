"use client";
import Image from "next/image";
import profile from "../../public/assets/alper-yazagan.jpg";
import { fetchUsers } from "../../redux/apiUsers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const FriendSuggestions = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);
  return (
    <div className="">
      <h1 className="font-bold mt-8">Friend Suggestions</h1>
      <div className=" flex flex-col gap-2 mt-8 bg-white w-[26rem] p-4  rounded-xl">
        {showAll
          ? users.slice(0,4).map((user) => (
              <div key={user.id} className="flex justify-around gap-2">
                <div className="flex gap-2">
                  <Image
                    className="w-8"
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
                    Add
                  </button>
                  <button className="bg-indigo-400 rounded-xl p-1 text-white">
                    Message
                  </button>
                </div>
              </div>
            ))
          : users.slice(0, 2).map((user) => (
              <div key={user.id} className="flex justify-around gap-2">
                <div className="flex gap-2">
                  <Image
                    className="w-8 rounded-full "
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
                  <button className="bg-indigo-400 w-16 rounded-xl p-1 text-white">
                    Add
                  </button>
                  <button className="bg-indigo-400 rounded-xl p-1 text-white">
                    Message
                  </button>
                </div>
              </div>
            ))}

        <hr className="mt-4" />
        {showAll ? (
            <button 
                className="bg-red-400 text-white w-16 " 
                onClick={() => setShowAll(!showAll)}
            >
                View Less
            </button>
        ) :

        <button
          className=" bg-red-400 text-white w-16 rounded-2xl " 
          onClick={() => setShowAll(!showAll)}
        >
          View All
        </button>
}
      </div>
    </div>
  );
};

export default FriendSuggestions;
