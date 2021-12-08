import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import "./navbar-style.css";

class Navbar extends Component {
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
  }

  render() {
    return (
      <nav class="navbar navbar-dark bg-dark justify-content-between px-5 py-3">
        <a class="navbar-brand" href="teachHome.html">
          Rate Your Mate
        </a>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenu2"
          >
            <a class="dropdown-item disabled" type="text">
              asdas
            </a>
            <a class="dropdown-item" type="button" href="rym.html">
              Гарах
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
