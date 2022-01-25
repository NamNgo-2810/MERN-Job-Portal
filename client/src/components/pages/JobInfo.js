import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../DefaultLayout";
import { Button, Tag } from "antd";
import { applyJob } from "../../redux/actions/jobActions";
import moment from "moment";

function JobInfo() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const params = useParams();
  const job = jobs.find((job) => job._id === params.id);
  const user = localStorage.getItem("user");
  let logedIn = false;
  let userid = null;
  const appliedCandidates = job.appliedCandidatesIds;
  let alreadyApplied = false;

  const dispatch = useDispatch();

  if (user) {
    userid = JSON.parse(user)._id;
    logedIn = true;
    alreadyApplied = appliedCandidates.some(
      (candidate) => candidate.userid === userid
    );
  }

  function applyNow() {
    dispatch(applyJob(job));
  }

  return (
    <div>
      <DefaultLayout>
        <div style={{ margin: "20px", padding: "10px" }}>
          <p style={{ fontSize: "24px" }}>
            <b>{job.title}</b>
          </p>
          <p>Hirer: {job.hirer}</p>
          <p>Details: {job.fullDescription}</p>
          <p>
            Budget: From {job.minBudget} USD to {job.maxBudget} USD
          </p>
          <p>Skills required: </p>
          <ul>
            {job.skillsRequired.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
          <p>Posted on {moment(job.createdAt).format("DD - MMM - yyyy")}</p>
          <p>
            There are {job.appliedCandidatesIds.length} people applied for this
            job
          </p>
          <div className="flex justify-content-between">
            {!logedIn ? (
              <Button>
                <Link to="/login">Apply Now</Link>
              </Button>
            ) : job.postedBy !== userid ? (
              alreadyApplied ? (
                <Tag color={"green"}>Already Applied</Tag>
              ) : (
                <Button onClick={applyNow}>Apply Now</Button>
              )
            ) : (
              <Button>Edit Job</Button>
            )}
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default JobInfo;
