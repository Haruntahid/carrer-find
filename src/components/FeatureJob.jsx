import { useEffect, useState } from "react";
import JobCart from "./JobCart";

function FeatureJob() {
  const [jobs, setJobs] = useState([]);
  const [dataLoad, setDataLoad] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-[130px]">
      <p className="text-5xl mb-4 text-center font-bold">Featured Jobs</p>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-8 grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLoad).map((job) => (
          <JobCart key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => setDataLoad(jobs.length)}
          className={dataLoad === jobs.length ? "hidden" : "btn btn-primary"}
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
}

export default FeatureJob;
