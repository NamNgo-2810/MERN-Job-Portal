import React, { useEffect, useState } from "react";
import DefaultLayout from "../DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs, searchJobs } from "../../redux/actions/jobActions";
import { Button, Col, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import JobCard from "../JobCard";

function Home() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    <div>
      <DefaultLayout>
        <section class="hero-area">
          <div class="hero-inner">
            <div class="container">
              <div class="row ">
                <div class="col-lg-6 co-12">
                  <div class="inner-content">
                    <div class="hero-text">
                      <h1 class="wow fadeInUp" data-wow-delay=".3s">
                        Find Your Career <br />
                        to Make a Better Life
                      </h1>
                      <p class="wow fadeInUp" data-wow-delay=".5s">
                        Creating a beautiful job website is not easy <br />{" "}
                        always. To make your life easier, we are
                        <br /> introducing Jobcamp template.
                      </p>
                    </div>
                    <div
                      class="job-search-wrap-two mt-50 wow fadeInUp"
                      data-wow-delay=".7s"
                    ></div>
                  </div>
                </div>
                <div class="col-lg-6 co-12">
                  <div
                    class="hero-video-head wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <div class="video-inner">
                      <img src="assets/images/hero/hero-image.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="apply-process section">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-12">
                <div class="process-item">
                  <i class="lni lni-user"></i>
                  <h4>Register Your Account</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-12">
                <div class="process-item">
                  <i class="lni lni-book"></i>
                  <h4>Upload Your Resume</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-12">
                <div class="process-item">
                  <i class="lni lni-briefcase"></i>
                  <h4>Apply for Dream Job</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="job-list section"
          style={{ backgroundColor: "#f6f9fc" }}
        >
          {jobs.map((job) => {
            return (
              <Row>
                <Col lg={12} sm={24}>
                  <div
                    className="job-div"
                    style={{
                      marginTop: "30px",
                      marginLeft: "100px",
                      padding: "40px",
                      paddingLeft: "50px",
                      border: "1px solid #eee",
                      borderRadius: "5px",
                      position: "relative",
                      transition: "all 0.4s ease",
                      backgroundColor: "#fff",
                      boxShadow: "0 1rem 3rem rgb(35 38 45 / 15%) !important",
                    }}
                  >
                    <h4>{job.title}</h4>
                    <p style={{ fontSize: "18px" }}>{job.hirer}</p>
                    <hr />
                    <p style={{ fontSize: "18px" }}>{job.smallDescription}</p>
                    <div>
                      <p style={{ fontSize: "14px" }}>
                        Budget:{" "}
                        <b>
                          ${job.minBudget} - ${job.maxBudget}
                        </b>
                      </p>
                      <ul>
                        {job.skillsRequired.map((skill) => {
                          return (
                            <li
                              onClick={() => dispatch(searchJobs(skill))}
                              style={{
                                display: "inline-block",
                                fontSize: "14px",
                                margin: "10px",
                                position: "relative",
                                background: "#2042e314",
                                color: "#2042e3",
                                padding: "5px 10px",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="skill">{skill}</div>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="flex justify-content-between mt-5">
                        <Link to={`/jobs/${job._id}`}>
                          <Button>View</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        </section>
      </DefaultLayout>
    </div>
  );
}

export default Home;
