import ProfileCard from "../../components/profile/ProfileCard";
import StatisticsCard from "../../components/profile/StatisticsCard";
import AchievementCard from "../../components/profile/AchievementCard";
import FriendSuggestions from "../../components/profile/FriendSuggestions";
import FriendsList from "../../components/profile/FriendsList";

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
