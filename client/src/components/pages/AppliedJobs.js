import React from "react";
import DefaultLayout from "../DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";

function AppliedJobs() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  const userAppliedJobs = [];

  for (let job of jobs) {
    let appliedCandidates = job.appliedCandidatesIds;
    const tmpJob = appliedCandidates.find(
      (candidate) => candidate.userid == user._id
    );
    if (tmpJob) {
      let jobObj = {
        title: job.title,
        hirer: job.hirer,
        appliedDate: tmpJob.appliedDate,
      };
      userAppliedJobs.push(jobObj);
    }
  }

  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
    },
    {
      title: "Hirer",
      dataIndex: "hirer",
    },
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <div
          style={{
            margin: "60px",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          <h2>Applied Jobs</h2>
          <Table columns={columns} dataSource={userAppliedJobs} />
        </div>
      </DefaultLayout>
    </div>
  );
}

export default AppliedJobs;
