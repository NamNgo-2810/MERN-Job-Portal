import React from "react";
import { Link } from "react-router-dom";

function JobCard(job) {
  return (
    <div>
      <h4>{job.title}</h4>
      <p>{job.smallDescription}</p>
      {/* <ul>
          {job.skillsRequired.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul> */}
      <Link to={`/jobs/${job._id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default JobCard;
