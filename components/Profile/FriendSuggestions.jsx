import Image from "next/image";
import profile from "../../public/assets/alper-yazagan.jpg";

const FriendSuggestions = () => {
    return (
      <div className="">
        <h1 className="font-bold mt-8">Friend Suggestions</h1>
        <div className="mt-8 bg-white w-[26rem] p-4 h-40 rounded-xl">
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
                Follow
              </button>
              <button className="bg-indigo-400 rounded-xl p-1 text-white">
                Message
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
                Follow
              </button>
              <button className="bg-indigo-400 rounded-xl p-1 text-white">
                Message
              </button>
            </div>
          </div>
          <hr className="mt-4" />
        </div>
      </div>
    );
  };

export default FriendSuggestions