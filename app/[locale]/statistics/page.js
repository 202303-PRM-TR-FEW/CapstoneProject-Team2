"use client";
import PerformanceCard from "@/components/PerformanceCard";
import ThisWeek from "@/components/ThisWeek";
import Activity from "@/components/Activity";
import Comparison from "@/components/Comparison";
import { useTranslations } from "next-intl";

import {
  ChartBarIcon,
  BookOpenIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

const Page = () => {
  const t = useTranslations("Statistics_Page");
  return (
    <div className="flex justify-center ml-8">
      <div className="flex flex-col ml-4 mr-10">
        <div className="ml-2">
          {" "}
          {/* Add margin to move the section to the right */}
          <ThisWeek />
        </div>
        <h2 className="text-lg ml-2 font-medium mt-2">{t("My_Performance")}</h2>
        <div className="flex w-fit">
          <PerformanceCard
            title="TIME SPENT"
            statistics="12.8 hours"
            icon={BookOpenIcon}
            bgColor="bg-blue-100"
            iconColor="text-blue-500"
          />
          <PerformanceCard
            title="AVERAGE/DAY"
            statistics="11.8 hours"
            icon={ChartBarIcon}
            bgColor="bg-red-100"
            iconColor="text-red-500"
          />
          <PerformanceCard
            title="FINISHED COURSES"
            statistics="19.8 hours"
            icon={CheckIcon}
            bgColor="bg-green-100"
            iconColor="text-green-500"
          />
        </div>
      </div>
      <div className="flex flex-col ml-8 w-[30em]">
        <div>
          <h2 className="text-lg font-medium mt-4">{t("My_Activity")}</h2>
          <div className="p-6 gap-y-6 bg-white my-4 rounded-md dark:bg-slate-800">
            <h3 className="text-sm font-medium">Monday</h3>
            <Activity title="Becoming a Photographer" name="Clara Manning" />
            <Activity title="Design Thinking 2.0" name="Chris Kinley" />
            <div className="border-b border-gray-300 h-1"></div> {/* Line */}
            <h3 className="text-sm font-medium">10 DAYS AGO</h3>
            <Activity title="Becoming a Photographer" name="Clara Manning" />
            <div className="border-b border-gray-300 h-1"></div> {/* Line */}
            <div className="mt-2">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 text-sm font-bold"
              >
                {t("VIEW_ALL_ACTIVITY")}
              </a>{" "}
              {/* Clickable link */}
            </div>
          </div>
        </div>

        <div className="mt-1 sm:mt-2">
          {" "}
          {/* Adjusted margin-top value */}
          <h2 className="text-lg font-medium ">{t("Last_Year_Comparison")}</h2>
          <div className="bg-white mt-2 rounded-md dark:bg-slate-800">
            <Comparison label="STUDY TIME" value={25} />
            <Comparison label="HOURS LEARNED" value={50} />
            <Comparison label="FINISHED COURSES" value={75} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
