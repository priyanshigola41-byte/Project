import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
  const fetchJobs = async () => {
    try {
      const { data } = await axiosInstance.get("/api/v1/job/getall");
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchJobs();
}, []);
  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobs page">
      <div className="container">
        <h1>All Available Jobs</h1>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <p>{element.company}</p>
                  <p>{element.title}</p>
                  <p>{element.category}</p>
                  <p>{element.city}</p>
                  <Link to={`/job/${element._id}`}>Job Details</Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
