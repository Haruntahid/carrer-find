import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Jobdetails from "../Pages/Jobdetails";
import AppliedJobs from "../Pages/AppliedJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobdetails/:id",
        loader: () => fetch("jobs.json"),
        element: <Jobdetails />,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs />,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);
