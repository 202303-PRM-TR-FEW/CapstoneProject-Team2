const Categories = () => {
  return (
    <div className="flex flex-col gap-4 w-full ml-36 md:flex md:flex-row">
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">Marketing</span>
      </label>
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">HR</span>
      </label>
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">Sales</span>
      </label>
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">Drawing</span>
      </label>
      <label className="">
        <input type="checkbox" />
        <span className="ml-4">Data</span>
      </label>
    </div>
  );
};

export default Categories;
