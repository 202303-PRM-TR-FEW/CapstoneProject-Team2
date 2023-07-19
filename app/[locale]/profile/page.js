import ProfileCard from "@/components/Profile/ProfileCard";
import StatisticsCard from "@/components/Profile/StatisticsCard";
import AchievementCard from "@/components/Profile/AchievementCard";
import FriendSuggestions from "@/components/Profile/FriendSuggestions";
import FriendsList from "@/components/Profile/FriendsList";

const page = () => {
  return (
    <div className="md:flex md:flex-row  md:items-center md:justify-center mx-[5rem] flex flex-col items-center gap-12">
      <div>
        <ProfileCard />
        <StatisticsCard />
        <AchievementCard />
      </div>
      <div>
        <FriendSuggestions />
        <FriendsList />
      </div>
    </div>
  );
};

export default page;
