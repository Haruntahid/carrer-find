// import { useLoaderData } from "react-router-dom";
import AppliedJobCart from "../components/AppliedJobCart";
import { getAppliedDataFromLs } from "../utils/utils";
import { useEffect, useState } from "react";

function AppliedJobs() {
  const [applyJobs, setApplyJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  //   const jobs = useLoaderData();
  useEffect(() => {
    const storeData = getAppliedDataFromLs();
    setApplyJobs(storeData);
    setDisplayJobs(storeData);
    // console.log(storeData);
  }, []);

  const handelFilter = (filterText) => {
    if (filterText === "all") {
      setDisplayJobs(applyJobs);
    } else if (filterText === "remote") {
      const remoteJobs = applyJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filterText === "onsite") {
      const onsiteJobs = applyJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
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
        {applyJobs.length > 0 && (
          <div className="flex justify-end mb-28">
            <details className="dropdown">
              <summary className="m-1 btn">Filter</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                <li>
                  <a onClick={() => handelFilter("all")}>All</a>
                </li>
                <li>
                  <a onClick={() => handelFilter("remote")}>Remote</a>
                </li>
                <li>
                  <a onClick={() => handelFilter("onsite")}>Onsite</a>
                </li>
              </ul>
            </details>
          </div>
        )}

        <div className="flex flex-col gap-6">
          {displayJobs.map((data, index) => (
            <AppliedJobCart key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AppliedJobs;
