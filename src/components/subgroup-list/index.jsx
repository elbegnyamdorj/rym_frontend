import React, { Component } from "react";
import Navbar from "../navbar";
import Button from "react-bootstrap/Button";
import "./subgroup-list-style.css";
export class SubgroupList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-1"></div>
            <div className="col-10 px-5 ">
              <h3 className="border-bottom my-5 pb-1">БАГИЙН АЖЛУУД</h3>
              <Button className="btn btn-outline-primary btn-lg py-2 mt-4 btn-light btn-block w-100">
                +
              </Button>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </>
    );
  }
}

export default SubgroupList;
