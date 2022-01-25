import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../DefaultLayout";
import { Table, Modal } from "antd";
import { EditOutlined, OrderedListOutlined } from "@ant-design/icons";
import moment from "moment";

function PostedJob() {
  const allJobs = useSelector((state) => state.jobsReducer).jobs;
  const allUsers = useSelector((state) => state.usersReducer).users;
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const username = JSON.parse(localStorage.getItem("user")).username;
  const userPostedJobs = allJobs.filter((job) => job.postedBy == userid);
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState();

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedCandidates",
    },
    {
      title: "Actions",
      align: "center",
      render: (text, data) => {
        return (
          <div className="d-flex justify-content-around">
            <EditOutlined
              onClick={() => {
                navigate(`/editjob/${data.completeJobData._id}`);
              }}
            />

            <OrderedListOutlined
              onClick={() => {
                setSelectedJob(
                  allJobs.find((job) => job._id == data.completeJobData._id)
                );
                showModal(selectedJob);
              }}
            />
          </div>
        );
      },
    },
  ];
  let datasource = [];
  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      postedOn: moment(job.createdAt).format("DD MMM yyyy"),
      appliedCandidates: job.appliedCandidatesIds.length,
      completeJobData: job,
    };
    datasource.push(obj);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function CandidateTable() {
    var candidatesDataSource = [];
    const candidatesColumns = [
      {
        title: "Candidate Id",
        dataIndex: "candidateId",
        render: (text, data) => {
          return (
            <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
          );
        },
      },
      {
        title: "Full Name",
        dataIndex: "fullName",
      },
      {
        title: "Applied Date",
        dataIndex: "appliedDate",
      },
    ];

    for (let candidate of selectedJob.appliedCandidatesIds) {
      let user = allUsers.find((userIdx) => userIdx._id == candidate.userid);
      let userObj = {
        candidateId: user._id,
        fullName: user.firstname + " " + user.lastname,
        appliedDate: candidate.appliedDate,
      };
      candidatesDataSource.push(userObj);
    }

    return (
      <div>
        <h3>Applicants of {selectedJob.title}</h3>
        <Table columns={candidatesColumns} dataSource={candidatesDataSource} />
      </div>
    );
  }

  return (
    <DefaultLayout>
      <div
        style={{
          margin: "60px",
          padding: "20px",
          fontSize: "20px",
        }}
      >
        <h2>Jobs posted by {username}</h2>
        <Table columns={columns} dataSource={datasource} />
        <Modal
          title="Applied Candidates"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
        >
          <CandidateTable />
        </Modal>
      </div>
    </DefaultLayout>
  );
}

export default PostedJob;
