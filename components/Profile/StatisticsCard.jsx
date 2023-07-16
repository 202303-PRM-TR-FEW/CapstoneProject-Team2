
import { AiOutlineCheck } from "react-icons/ai";
import { GiSandsOfTime, GiTrophyCup } from "react-icons/gi";


const StatisticsCard = () => {
  return (
    <div>
      <h1 className="mt-4 text-xl font-semibold ml-4">Total Statistics</h1>
      <div className="flex">
        <div className="ml-4 mt-4">
          <div className="flex flex-col gap-2 justify-center items-center text-center bg-white rounded-xl w-32 h-28 dark:bg-slate-800">
            <div className="flex justify-center items-center w-28 h-8 rounded-xl bg-yellow-400">
              <AiOutlineCheck size={30} color="blue" />
            </div>
            <p className="text-xs font-semibold text-inherit">
              FINISHED COURSES
            </p>
            <p>3</p>
          </div>
        </div>
        <div className="ml-4 mt-4">
          <div className="flex flex-col gap-2 justify-center items-center text-center bg-white rounded-xl w-32 h-28 dark:bg-slate-800">
            <div className="flex justify-center items-center w-28 h-8 rounded-xl bg-yellow-400">
              <GiSandsOfTime size={30} color="blue" />
            </div>
            <p className="text-xs font-semibold text-inherit">HOURS LEARNED</p>
            <p>3</p>
          </div>
        </div>
        <div className="ml-4 mt-4">
          <div className="flex flex-col gap-2 justify-center items-center text-center bg-white rounded-xl w-32 h-28 dark:bg-slate-800">
            <div className="flex justify-center items-center w-28 h-8 rounded-xl bg-yellow-400">
              <GiTrophyCup size={30} color="blue" />
            </div>
            <p className="text-xs font-semibold text-inherit">
              SKILLS ACHIEVED
            </p>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
