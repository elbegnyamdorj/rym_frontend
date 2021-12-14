import React, { Component } from "react";
import Navbar from "../navbar";
import axiosInstance from "../axiosApi";
import "./add-lesson-style.css";

class AddLesson extends Component {
  constructor(props) {
    super(props);

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
            <input
              type="text"
              placeholder="email@ufe.edu.mn"
              name="email"
              required
            //   value={this.state.email}
            //   onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="нууц үг"
              name="password"
              required
            //   value={this.state.password}
            //   onChange={this.handleChange}
            />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </>
    );
  }
}
export default AddLesson;
