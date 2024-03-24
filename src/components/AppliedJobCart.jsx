import { CiLocationOn } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AppliedJobCart({ data }) {
  console.log(data);
  const {
    id,
    logo,
    job_title,
    remote_or_onsite,
    company_name,
    job_type,
    location,
    salary,
  } = data;
  return (
    <>
      <div className="p-7 border border-gray-400 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <div>
            <img className="w-40" src={logo} alt="" />
          </div>
          <div className="space-y-4">
            <h2 className="font-extrabold text-2xl">{job_title}</h2>
            <p>{company_name}</p>
            <div>
              <button className="btn bg-transparent border border-primary">
                {remote_or_onsite}
              </button>
              <button className="btn bg-transparent ml-5 border-primary">
                {job_type}
              </button>
            </div>
            <div className="flex gap-6">
              <p className="text-[#757575] flex items-center gap-2">
                <CiLocationOn size={20} className="" /> {location}
              </p>
              <p className="text-[#757575] flex items-center gap-2">
                <LuCircleDollarSign size={20} className="" /> {salary}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link
            to={`/jobdetails/${id}`}
            className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}

AppliedJobCart.propTypes = {
  data: PropTypes.object,
};

export default AppliedJobCart;
