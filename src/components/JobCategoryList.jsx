import { useEffect, useState } from "react";

function JobCategoryList() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <>
      <div className="mt-[130px]">
        <p className="text-5xl mb-4 text-center font-bold">Job Category List</p>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-4 gap-6 mt-8">
          {category.map((ctg) => (
            <div key={ctg.id} className="p-8 bg-[#7E90FE0D] rounded-2xl">
              <div className="w-16 h-16 bg-[#7E90FE1A] flex justify-center items-center rounded-lg">
                <img className="w-10 h-10" src={ctg.logo} alt="" />
              </div>
              <p className="text-xl font-bold mt-8">{ctg.category_name}</p>
              <p>{ctg.availability}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default JobCategoryList;
