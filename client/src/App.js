import "antd/dist/antd.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BarWave from "react-cssfx-loading/lib/BarWave";
import Home from "./components/pages/Home";
import JobInfo from "./components/pages/JobInfo";
import UserInfo from "./components/pages/UserInfo";
import PostJob from "./components/pages/PostJob";
import AppliedJobs from "./components/pages/AppliedJobs";
import Profile from "./components/pages/Profile";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllJobs } from "./redux/actions/jobActions";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import PostedJob from "./components/pages/PostedJob";
import EditJob from "./components/pages/EditJob";
import { getAllUsers } from "./redux/actions/userActions";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const { jobs } = useSelector((state) => state.jobsReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");

  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (jobs != null) {
      setLoading(false);
    }
  }, [jobs]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "250px",
        }}
      >
        <BarWave width="100px" height="50px" duration="5s" />
      </div>
    );
  }
  return (
    <div className="App">
      {loader && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "250px",
          }}
        >
          <BarWave width="100px" height="50px" duration="5s" />
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:id" element={<JobInfo />} />
          <Route path="/users/:id" element={<UserInfo />} />
          <Route path="/postjob" element={user ? <PostJob /> : <Login />} />
          <Route path="/profile" element={user ? <Profile /> : <Login />} />
          <Route
            path="/appliedjobs"
            element={user ? <AppliedJobs /> : <Login />}
          />
          <Route path="/posted" element={user ? <PostedJob /> : <Login />} />
          <Route path="/editjob/:id" element={user ? <EditJob /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
