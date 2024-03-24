import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

function JobCart({ job }) {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    remote_or_onsite,
    job_type,
    salary,
  } = job;
  // console.log(job);
  return (
    <div className="p-10 border border-[#757575] rounded-xl space-y-4">
      <img className="w-40" src={logo} alt="" />
      <h2 className="text-xl font-bold">{job_title}</h2>
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
      <Link to={`/jobdetails/${id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  );
}

JobCart.propTypes = {
  job: PropTypes.object,
};

export default JobCart;
