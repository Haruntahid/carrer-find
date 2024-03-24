// import { useLoaderData } from "react-router-dom";
import AppliedJobCart from "../components/AppliedJobCart";
import { getAppliedDataFromLs } from "../utils/utils";
import { useEffect, useState } from "react";

function AppliedJobs() {
  const [applyJobs, setApplyJobs] = useState([]);

  //   const jobs = useLoaderData();
  useEffect(() => {
    const storeData = getAppliedDataFromLs();
    setApplyJobs(storeData);
    console.log(storeData);
  }, []);

  //   console.log(jobs);

  return (
    <>
      <div className="py-32">
        <h2 className="text-center font-bold text-3xl">Applied Jobs</h2>
        <h1 className="text-center text-xl font-semibold my-6">
          Your Total Applied Jobs : {applyJobs.length}
        </h1>
      </div>

      <div className="container mx-auto flex flex-col gap-4">
        {applyJobs.map((data, index) => (
          <AppliedJobCart key={index} data={data} />
        ))}
      </div>
    </>
  );
}

export default AppliedJobs;
