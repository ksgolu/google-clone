const SearchBox = () => {
  return (
    <div className="w-full">
      <input
        type="text"
        className="flex-grow focus:outline-none dark:bg-gray-100"
        placeholder="Search google or type URL"
      />
    </div>
  );
};

export default SearchBox;
