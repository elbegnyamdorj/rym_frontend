import React, { Component } from "react";
import axiosInstance from "../axiosApi";
import "./login-style.css";

class Login extends Component {
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
        <form onSubmit={this.handleSubmit}>
          <div className="containers">
            <div className="garchig">НЭВТРЭХ</div>
            <input
              type="text"
              placeholder="email@ufe.edu.mn"
              name="email"
              required
              className="login-inputs"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="нууц үг"
              name="password"
              className="login-inputs"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
            <label>
              <input type="checkbox" name="remember" label="namaig sana" />
            </label>
            <button type="submit" value="Submit">
              Нэвтрэх
            </button>
            <span className="psw">
              <a href="#">Forgot password?</a>
            </span>
            {/* <button type="button" href="#" className="signupbtn">
              Бүртгүүлэх
            </button> */}
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
