import React, { Component } from "react";
import Navbar from "../navbar";
import axiosInstance from "../axiosApi";
import "./teacher-home-style.css";
import LessonCard from "../lesson-card";
class TeacherHome extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    try {
      const response = axiosInstance
        .post("/token/obtain/", {
          email: this.state.email,
          password: this.state.password,
        })
        .then((response) => {
          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.access;
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          return response.data;
        });
    } catch (error) {
      console.log("error");
      throw error;
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-1"></div>
            <div class="col-10 bg-light px-5">
              <h4 class=" my-5 pb-1 border-bottom">ХИЧЭЭЛҮҮД</h4>

              <div class="card-list">
                <LessonCard />
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default TeacherHome;
