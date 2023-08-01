'use client'

import ProfileCard from '@/components/UserProfile/ProfileCard';
import StatisticsCard from '@/components/UserProfile/StatisticsCard';
import AchievementCard from '@/components/UserProfile/AchievementCard';

const UserPage = ({ params }) => {


  const { userProfile } = params;
  const user = users.find((user) => user.id === userProfile);

  return (

    <div className="  md:w-screen md:flex md:flex-col md:items-center md:justify-center mx-[5rem] flex flex-col items-center gap-12">

      <ProfileCard user={user} />
      <StatisticsCard user={user} />
      <AchievementCard user={user} />

    </div>
  );
};

export default UserPage;