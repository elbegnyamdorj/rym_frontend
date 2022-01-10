import React, { Component } from "react";
import "./sign-up-style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { MAIN_URL } from "../../urls";
import jwt from "jwt-decode";
import axiosInstance from "../axiosApi";
import Switch from "react-switch";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      re_password: "",
      email: "",
      first_name: "",
      last_name: "",
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchChange = this.switchChange.bind(this);
  }
  switchChange(checked) {
    this.setState({ checked });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    var user_type_id;
    if (this.state.checked) {
      user_type_id = 1;
    } else {
      user_type_id = 2;
    }
    axios
      .post(`${MAIN_URL}/user/create/`, {
        password: this.state.password,
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        user_type_id: user_type_id,
      })
      .then((res) => {
        const data = res.data;
        alert("Амжилттай бүртгүүллээ");
        try {
          const response = axiosInstance
            .post("/token/obtain/", {
              email: this.state.email,
              password: this.state.password,
            })
            .then((response) => {
              if (response) {
                axiosInstance.defaults.headers["Authorization"] =
                  "JWT " + response.data.access;
                const token = jwt(response.data.access);
                localStorage.setItem("access_token", response.data.access);
                localStorage.setItem("refresh_token", response.data.refresh);
                localStorage.setItem("user_id", token.user_id);
                localStorage.setItem("user_type_id", token.user_type_id_id);
                console.log(token.user_type_id_id);
                if (token.user_type_id_id === "1") {
                  window.location.href = "/lesson";
                } else {
                  window.location.href = "/home";
                }

                return response.data;
              } else {
                console.log("aldaa");
              }
            });
        } catch (error) {
          console.log("error");
          throw error;
        }
      });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="containers">
          <div class="garchig">БҮРТГҮҮЛЭХ</div>
          <div className="row">
            <div className="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Овог</label>
                <input
                  name="last_name"
                  type="text"
                  className="form-control input-box"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Овог"
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Нэр</label>
                <input
                  type="text"
                  name="first_name"
                  className="form-control input-box"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Нэр"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Имейл хаяг</label>
                <input
                  type="email"
                  name="email"
                  className="form-control input-box"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Имейл хаяг"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <label>
              <span>Багшын хаяг үүсгэх</span>
              <Switch
                onChange={this.switchChange}
                checked={this.state.checked}
              />
            </label>
            <div className="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Нууц үг</label>
                <input
                  type="password"
                  name="password"
                  className="form-control input-box"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Нууц үг"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Давтан оруулна уу</label>
                <input
                  type="password"
                  name="re_password"
                  className="form-control input-box"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Нууц үг"
                  value={this.state.re_password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="button" value="submit">
            Бүртгүүлэх
          </button>
          <Link to="/login">
            <button type="button" className="btn-light">
              Нэвтрэх
            </button>
          </Link>
        </div>
      </form>
    );
  }
}
export default Signup;
