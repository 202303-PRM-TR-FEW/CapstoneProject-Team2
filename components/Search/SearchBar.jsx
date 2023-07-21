const SearchBar = ({ searchTerm, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex gap-4 bg-white w-full shadow-md rounded px-8 pt-6 pb-8 justify-center items-center">
      <input
        className="text-center w-10/12 p-2 rounded border border-gray-800"
        type="text"
        placeholder="Search Courses"
        value={searchTerm}
        onChange={handleChange}
      />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
