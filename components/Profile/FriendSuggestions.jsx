"use client";
import Image from "next/image";
import profile from "../../public/assets/alper-yazagan.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedProfile, removeUser } from "../../redux/apiUsers";

const FriendSuggestions = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleAddButtonClick = (selectedProfile) => {
    dispatch(addSelectedProfile(selectedProfile));
    dispatch(removeUser({ id: selectedProfile.id }));
  };

  return (
    <div className="">
      <h1 className="font-bold mt-8">Friend Suggestions</h1>
      <div className=" flex flex-col gap-2 mt-8 bg-white w-[26rem] p-4  rounded-xl">
        {users.slice(0, 2).map((user) => (
          <div key={user.id} className="  flex justify-around gap-2">
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
              <button
                onClick={() => handleAddButtonClick(user)}
                className="bg-indigo-400 w-16 rounded-xl p-1 text-white"
              >
                Add
              </button>
              <button className="bg-indigo-400 rounded-xl p-1 text-white">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendSuggestions;
