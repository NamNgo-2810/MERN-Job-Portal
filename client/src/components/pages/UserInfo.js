import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../DefaultLayout";

function UserInfo() {
  const { users } = useSelector((state) => state.usersReducer);
  const params = useParams();
  const user = users.find((user) => user._id == params.id);
  return (
    <DefaultLayout>
      <div
        style={{
          margin: "60px",
          padding: "20px",
          fontSize: "20px",
        }}
      >
        {user && (
          <div>
            <h3>
              <b>Personal Information</b>
            </h3>
            <p>
              <b>First name: </b>
              {user.firstname}
            </p>
            <p>
              <b>Last name: </b>
              {user.lastname}
            </p>
            <p>
              <b>Email: </b>
              {user.email}
            </p>
            <p>
              <b>Phone number: </b>
              {user.phonenumber}
            </p>
            <p>
              <b>Address: </b>
              {user.address}
            </p>

            <hr />
            <h3>
              <b>Skills and Education</b>
            </h3>
            <p>
              <b>Education: </b>
              {user.education.map((item) => (
                <li>{item}</li>
              ))}
            </p>

            <p>
              <b>Skills: </b>
              {user.skills.map((item) => (
                <li>{item}</li>
              ))}
            </p>
            <p>
              <b>Projects: </b>
              {user.projects.map((item) => (
                <li>{item}</li>
              ))}
            </p>
            <p>
              <b>Experience: </b>
              {user.experience}
            </p>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}

export default UserInfo;
