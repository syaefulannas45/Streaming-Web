import Category1 from "../partials/Category1";

const Category = () => {
  
  return (
    <>
      {/* eslint-disable */}
      <div className="w-full">
        <div className="mx-auto mb-4 flex w-full justify-center p-10">
          <p className="text-center text-5xl font-semibold uppercase text-slate-700">
            Category <span className="text-teal-500 ">Films</span>
          </p>
        </div>
        <Category1/>
      </div>
    </>
  );
};

export default Category;
