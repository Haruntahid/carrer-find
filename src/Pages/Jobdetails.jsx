import { useLoaderData, useParams } from "react-router-dom";
import { saveDataToLs } from "../utils/utils";
// import { useEffect, useState } from "react";

function Jobdetails() {
  const datas = useLoaderData();

  // const [jobData, setJobData] = useState([]);
  const param = useParams();

  // useEffect(() => {
  //   fetch("../../public/jobs.json")
  //     .then((res) => res.json())
  //     .then((data) => setJobData(data));
  // }, []);

  // const currentData = jobData.find((dt) => console.log(dt));
  // console.log(currentData);

  // console.log(datas);

  const currentData = datas.find((dt) => dt.id === parseInt(param.id));

  // console.log(currentData);

  const handelApply = (currentData) => {
    saveDataToLs(currentData);
  };

  // console.log(currentData);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    company_name,
    salary,
    job_title,
  } = currentData;
  return (
    <>
      <div className="py-32">
        <h2 className="text-center font-bold text-3xl">job details</h2>
      </div>
      <div className="flex container mx-auto gap-16">
        <div className="w-9/12 space-y-6">
          <p className="text-[18px] leading-8">
            <span className="font-extrabold">Job Description:</span>
            {job_description}
          </p>
          <p className="text-[18px] leading-8">
            <span className="font-extrabold">Job Responsibility:</span>{" "}
            {job_responsibility}
          </p>
          <div>
            <p className="text-[18px] leading-8 font-extrabold">
              Educational Requirements:
            </p>
            <p className="text-[18px] leading-8">{educational_requirements}</p>
          </div>
          <div>
            <p className="text-[18px] leading-8 font-extrabold">Experiences:</p>
            <p className="text-[18px] leading-8">{experiences}</p>
          </div>
        </div>
        <div className="w-3/12 ">
          <div className="bg-[#7E90FE1a] p-8 rounded-xl">
            <p className="text-xl font-bold">Job Details</p>
            <div className="divider"></div>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Company :</span> {company_name}
              </p>
              <p>
                <span className="font-bold">Salary :</span> {salary}
              </p>
              <p>
                {" "}
                <span className="font-bold">Job Title :</span> {job_title}
              </p>
            </div>
            <p className="text-xl font-bold mt-4">Contact Information</p>
            <div className="divider"></div>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Phone :</span>{" "}
                {contact_information.phone}
              </p>
              <p>
                <span className="font-bold">Email :</span>{" "}
                {contact_information.email}
              </p>
              <p>
                <span className="font-bold">Address :</span>{" "}
                {contact_information.address}
              </p>
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              onClick={() => handelApply(currentData)}
              className="btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobdetails;
