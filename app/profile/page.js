import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import Image from "next/image";
import profile from "../../public/assets/avatar-ali.png";
import { GiTrophyCup } from "react-icons/gi";

const page = () => {
  return (
    <div className=" md:flex md:flex-row md:items-center md:justify-center mx-[5rem] flex flex-col items-center bg-slate-100 gap-12   ">
      <div className=" flex flex-col   ">
        <div className="flex ml-4  ">
          <div className=" mt-8">
            <Image src={profile} alt="profile" priority={true} />
          </div>
          <div className=" flex flex-col ml-4 gap-8">
            <div className=" mt-8">
              <h1 className=" text-2xl font-semibold">Sally Robins</h1>
              <div className=" flex gap-2 items-center">
                <BiCurrentLocation />
                <p>London, UK</p>
              </div>
            </div>
            <div className=" flex gap-2  w-64 border-4 border-indigo-300  bg-slate-400 rounded-lg p-3 text-white">
              <div className="flex flex-col items-center ">
                <h1>0</h1>
                <p className="text-xs"> COURSES</p>
              </div>

              <div className="flex flex-col items-center">
                <h1>2</h1>
                <p className="text-xs">FOLLOWERS</p>
              </div>

              <div className="flex flex-col items-center">
                <h1>32</h1>
                <p className="text-xs">FOLLOWING</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className=" mt-4 text-xl font-semibold ml-4">Total Statistics</h1>
        <div className=" flex  ">
          <div className=" ml-4 mt-4  ">
            <div className=" flex flex-col gap-2 justify-center items-center text-center bg-white rounded-xl w-32  h-28">
              <div className=" flex  justify-center items-center w-28 h-8 rounded-xl bg-yellow-400">
                <AiOutlineCheck size={30} color="blue" />
              </div>
              <p className="text-xs font-semibold text-inherit">
                FINISHED COURSES
              </p>
              <p>3</p>
            </div>
          </div>
          <div className=" ml-4 mt-4  ">
            <div className=" flex flex-col gap-2 justify-center items-center text-center bg-white rounded-xl w-32  h-28">
              <div className=" flex  justify-center items-center w-28 h-8 rounded-xl bg-yellow-400">
                <GiSandsOfTime size={30} color="blue" />
              </div>
              <p className="text-xs font-semibold text-inherit">
                HOURS LEARNED
              </p>
              <p>3</p>
            </div>
          </div>
          <div className=" ml-4 mt-4  ">
            <div className=" flex flex-col gap-2 justify-center items-center text-center bg-white rounded-xl w-32  h-28">
              <div className=" flex  justify-center items-center w-28 h-8 rounded-xl bg-yellow-400">
                <GiTrophyCup size={30} color="blue" />
              </div>
              <p className="text-xs font-semibold text-inherit">
                SKILLS ACHIEVED
              </p>
              <p>3</p>
            </div>
          </div>
        </div>
        <h1 className="text-xl font-semibold mt-4 ml-4">Achievements</h1>
        <div className=" flex gap-4  bg-white w-[26rem] rounded-xl ml-4 mt-4 p-2">
          <div className=" flex items-center justify-center rounded-xl ml-2  w-24 h-20 bg-red-100">
            <GiSandsOfTime size={30} color="blue" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" font-bold">Committed Learner</h1>
            <div className="  w-4/4 h-2 bg-slate-400 rounded-xl">
              <div className=" h-full bg-red-200  w-12 rounded-xl"></div>
            </div>
            <p className=" text-xs opacity-50">Reach a 3 day streak</p>
          </div>
        </div>
        <div className=" flex gap-4  bg-white w-[26rem] rounded-xl ml-4 mt-4 p-2">
          <div className=" flex items-center justify-center rounded-xl ml-2  w-24 h-20 bg-red-100">
            <GiTrophyCup size={30} color="blue" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" font-bold">Point Collector</h1>
            <div className="  w-4/4 h-2 bg-slate-400 rounded-xl">
              <div className=" h-full bg-red-200  w-12 rounded-xl"></div>
            </div>
            <p className=" text-xs opacity-50">Earn 1800 more points</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col mt-8">
        <h1 className="font-bold ">Friend Suggestions</h1>
        <div className=" mt-8  bg-white w-[26rem] p-4 h-40 rounded-xl">
          <div className="flex   justify-around">
            <div className="flex gap-2">
              <Image
                className=" w-8 "
                src={profile}
                alt="profile"
                priority={true}
              />
              <h1>Laura Evans</h1>
            </div>
            <div className=" flex gap-4">
              <button className=" bg-indigo-400 rounded-xl p-1 text-white">
                Follow
              </button>
              <button className=" bg-indigo-400 rounded-xl p-1 text-white">
                Message
              </button>
            </div>
          </div>
          <div className="flex mt-6   justify-around">
            <div className="flex gap-2">
              <Image
                className=" w-8 "
                src={profile}
                alt="profile"
                priority={true}
              />
              <h1>Laura Evans</h1>
            </div>
            <div className=" flex gap-4">
              <button className=" bg-indigo-400 rounded-xl p-1 text-white">
                Follow
              </button>
              <button className=" bg-indigo-400 rounded-xl p-1 text-white">
                Message
              </button>
            </div>
          </div>
          <hr className=" mt-4" />
        </div>
        <h1 className=" mt-8 font-bold">Friends</h1>
        <div className=" mt-8 bg-white w-[26rem] p-4 h-40 rounded-xl">
          <div className="flex   justify-around">
            <div className="flex gap-2">
              <Image
                className=" w-8 "
                src={profile}
                alt="profile"
                priority={true}
              />
              <h1>Laura Evans</h1>
            </div>
            <div className=" flex gap-4">
              <button className=" bg-indigo-400 rounded-xl p-1 text-white">
                Profile
              </button>
              <button className=" bg-indigo-400 rounded-xl p-1 text-white">
                Delete
              </button>
            </div>
          </div>
          <div className="flex mt-6   justify-around">
            <div className="flex gap-2">
              <Image
                className=" w-8 "
                src={profile}
                alt="profile"
                priority={true}
              />
              <h1>Laura Evans</h1>
            </div>
            <div className=" flex gap-4">
              <button className=" bg-indigo-400 rounded-xl p-1 text-white">
                Profile
              </button>
              <button className=" bg-indigo-400 rounded-xl p-1 text-white">
                Delete
              </button>
            </div>
          </div>
          <hr className=" mt-4" />
        </div>
        <div className="flex gap-4 mt-8">
          <button className=" bg-red-300 rounded-xl w-[12rem] p-1 text-white ">
            FIND FRIENDS
          </button>
          <button className="bg-red-300 w-[12rem] rounded-xl p-1 text-white ">
            INVITE FRIENDS
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
