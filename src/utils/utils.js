import { toast } from "react-toastify";

export const getAppliedDataFromLs = () => {
  const findData = localStorage.getItem("applied");
  if (findData) {
    return JSON.parse(findData);
  }
  return [];
};

export const saveDataToLs = (data) => {
  const storedJobs = getAppliedDataFromLs();
  const exist = storedJobs.find((job) => job.id === data.id);
  if (!exist) {
    storedJobs.push(data);
    localStorage.setItem("applied", JSON.stringify(storedJobs));
    toast.success("Job Applied Successfully");
  } else {
    toast.error("Already Applied");
  }
};
