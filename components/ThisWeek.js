"use client";

import { Bs0Circle } from "react-icons/bs";
import { useTranslations } from "next-intl";

export default function ThisWeek() {
  const t = useTranslations("Components");

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="mt-4">
      <h1 className="text-xl font-medium mb-4">{t("This_Week")}</h1>
      <div className="p-4 bg-white rounded-lg w-full md:w-200 dark:bg-slate-800">
        <div className="mt-4">
          <div className="flex">
            <div className="flex flex-col items-start">
              <h2 className="text-xs font-medium">{t("Time_Spent")}</h2>
              <p className="text-lg font-medium">31.8 hours</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-around space-x-4">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-end space-y-2"
              >
                <div className="w-3 h-32 rounded-full bg-blue-500"></div>
                <p className="text-sm font-medium">{day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-full dark:bg-slate-800">
          <div className="flex items-center">
            <Bs0Circle className="h-6 w-6 mr-2" />
            <p className="text-lg font-medium">{t("Goal")}</p>
          </div>
          <div className="bg-blue-200 rounded mt-2 p-2 w-full">
            <p className="text-lg text-center font-medium">2/3 days</p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center w-full dark:bg-slate-800">
          <div className="flex items-center">
            <Bs0Circle className="h-6 w-6 mr-2" />
            <p className="text-lg font-medium">{t("Streak")}</p>
          </div>
          <div className="bg-green-100 p-2 rounded mt-2 w-full">
            <p className="text-lg text-center font-medium text-green-500">
              103 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
