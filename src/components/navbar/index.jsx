import React, { Component } from "react";
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
      <nav className="navbar navbar-dark bg-dark justify-content-between px-5 py-3">
        <a className="navbar-brand" href="teachHome.html">
          Rate Your Mate
        </a>

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
            <a className="dropdown-item disabled" type="text">
              asdas
            </a>
            <a className="dropdown-item" type="button" href="rym.html">
              Гарах
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
