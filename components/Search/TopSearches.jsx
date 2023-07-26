// TopSearches.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSorting } from '@/redux/features/sortingSlice';

const TopSearches = () => {
  const dispatch = useDispatch();
  const sortByRating = useSelector((state) => state.sorting);

  const handleSortByRating = () => {
    dispatch(toggleSorting());
  };

  return (
    <div className="flex flex-col gap-4 w-full ml-36 md:flex md:flex-row">
      <div className="md:flex md:gap-4">
        <button className="border border-gray-400 p-2 rounded-2xl" onClick={handleSortByRating}>
          Sort By Rating
        </button>
      </div>
    </div>
  );
};

export default TopSearches;
