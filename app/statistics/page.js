"use client"
import PerformanceCard from "@/components/PerformanceCard";
import ThisWeek from "@/components/ThisWeek";
import Activity from "@/components/Activity";
import Comparison from "@/components/Comparison";

import {
    ChartBarIcon,
    BookOpenIcon,
    CheckIcon,
  } from "@heroicons/react/24/solid";

 

const page = () => {
  return (
    
   
    <div className="flex justify-center ml-8">
      
      <ThisWeek />
      
    <div>
    
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
    <div className= "flex justify-center ml-8">
    <div>
    <h2 className="text-lg font-medium">My Activity</h2>
    <div>
      
    <Activity
      title="Becoming a Photographer"
      name="Clara Manning"
      
       />
    <Activity />
    </div>
    </div>

    <div>
    <h2 className="text-lg font-medium">Last Year Comparison</h2>
      <Comparison
      label="STUDY TIME" value={25} />
      <Comparison 
      label="HOURS LEARNED" value={50}/>
      <Comparison
      label="FINISHED COURSES" value={75} />
    </div>
    </div>
  </div>
  );
};

export default page;