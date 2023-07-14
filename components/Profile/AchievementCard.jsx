import { GiSandsOfTime, GiTrophyCup } from "react-icons/gi";

const AchievementCard = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mt-4 ml-4">Achievements</h1>
      <div className="flex flex-col gap-4 bg-white w-[26rem] rounded-xl ml-4 mt-4 p-2">
        <div className="flex items-center justify-center rounded-xl ml-2 w-24 h-20 bg-red-100">
          <GiSandsOfTime size={30} color="blue" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Committed Learner</h1>
          <div className="w-4/4 h-2 bg-slate-400 rounded-xl">
            <div className="h-full bg-red-200 w-12 rounded-xl"></div>
          </div>
          <p className="text-xs opacity-50">Reach a 3 day streak</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white w-[26rem] rounded-xl ml-4 mt-4 p-2">
        <div className="flex items-center justify-center rounded-xl ml-2 w-24 h-20 bg-red-100">
          <GiTrophyCup size={30} color="blue" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Point Collector</h1>
          <div className="w-4/4 h-2 bg-slate-400 rounded-xl">
            <div className="h-full bg-red-200 w-12 rounded-xl"></div>
          </div>
          <p className="text-xs opacity-50">Earn 1800 more points</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
