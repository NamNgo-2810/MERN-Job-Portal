import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

export default class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    localStorage.removeItem("user");
  };

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <div>
        <header class="header">
          <div class="navbar-area">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-12">
                  <nav class="navbar navbar-expand-lg">
                    <Link to="/">
                      <h1>EWORK</h1>
                    </Link>
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="toggler-icon"></span>
                      <span class="toggler-icon"></span>
                      <span class="toggler-icon"></span>
                    </button>
                    <div
                      style={{
                        marginLeft: "70px",
                      }}
                    >
                      <Filter />
                    </div>

                    <div
                      class="collapse navbar-collapse sub-menu-bar"
                      id="navbarSupportedContent"
                    >
                      <ul id="nav" class="navbar-nav ml-auto">
                        <li class="nav-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/profile">Profile</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/appliedjobs">Applied Jobs</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/postjob">Post Job</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/posted">Posted Job</Link>
                        </li>
                        <li class="nav-item">
                          <Link
                            to={user ? "/" : "/login"}
                            onClick={this.logout}
                          >
                            {user ? "Logout" : "Login"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section class="content section">
          <div>{this.props.children}</div>
        </section>
      </div>
    );
  }
}
