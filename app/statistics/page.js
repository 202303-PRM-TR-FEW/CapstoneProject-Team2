"use client"
import PerformanceCard from "@/components/PerformanceCard";
import {
    ChartBarIcon,
    BookOpenIcon,
    CheckIcon,
  } from "@heroicons/react/24/solid";
const page = () => {
  return (
    <div className="flex justify-center">
    <div className="w-200">
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
  );
};

export default page;