import React, { useState } from "react";
import { Input, Modal, Form, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { searchJobs } from "../redux/actions/jobActions";

const { Search } = Input;

function Filter() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        margin: "0 auto",
        width: "450px",
        border: "1px solid #dcdcdc",
      }}
    >
      <Search
        enterButton
        onSearch={(value) => {
          dispatch(searchJobs(value));
        }}
      />
    </div>
  );
}

export default Filter;
