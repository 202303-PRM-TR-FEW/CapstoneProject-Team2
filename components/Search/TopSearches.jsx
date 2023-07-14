const TopSearches = () => {
  return (
    <div className="flex flex-col gap-4 w-full ml-36 md:flex md:flex-row ">
      <div className="md:flex md:gap-4">
        <button className="border border-gray-400 p-2 rounded-2xl">
          Marketing Strategy
        </button>
        <button className="border border-gray-400 p-2 rounded-2xl">
          UX Design
        </button>
      </div>
      <div className="md:flex md:gap-4">
        <button className="border border-gray-400 p-2 rounded-2xl">
          Excel
        </button>
        <button className="border border-gray-400 p-2 rounded-2xl">
          Adobe PhotoShop
        </button>
        <button className="border border-gray-400 p-2 rounded-2xl">CRM</button>
      </div>
      <div className="md:flex md:gap-4">
        <button className="border border-gray-400 p-2 rounded-2xl">
          Photography
        </button>
        <button className="border border-gray-400 p-2 rounded-2xl">
          Content Making
        </button>
      </div>
    </div>
  );
};

export default TopSearches;
