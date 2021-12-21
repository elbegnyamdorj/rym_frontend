import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar-style.css";
import axiosInstance from "../axiosApi";
class Navbar extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    try {
      const response = axiosInstance
        .post("/blacklist/", {
          refresh_token: localStorage.getItem("refresh_token"),
        })
        .then((response) => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          axiosInstance.defaults.headers["Authorization"] = null;
          window.location.href = "/login";
          return response;
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between px-5 py-3">
        <Link
          className="navbar-brand"
          to={
            localStorage.getItem("user_type_id") === "1" ? "/lesson" : "/home"
          }
        >
          Rate Your Mate
        </Link>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user"></i>
          </button>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenu2"
          >
            {/* <a className="dropdown-item disabled" type="text">
              asdas
            </a> */}
            <button className="dropdown-item" onClick={this.handleLogout}>
              Гарах
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
