import React, { Component } from "react";
import Navbar from "../navbar";
import axiosInstance from "../axiosApi";
import "./teacher-home-style.css";
import CardList from "../lesson-card-list";
class TeacherHome extends Component {
  constructor(props) {
    super(props);
    this.state = { group_number: "", lesson_name: "" };

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
    const group_list=[{lesson_name:'SWE221',group_number:213},{lesson_name:'SWE221',group_number:213}]
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-1"></div>
            <div className="col-10 bg-light mh-100 px-5">
              <CardList group_list={group_list}/>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </>
    );
  }
}
export default TeacherHome;
