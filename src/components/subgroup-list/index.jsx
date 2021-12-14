import React, { Component } from "react";
import Navbar from "../navbar";
import Button from "react-bootstrap/Button";
import SubgroupElement from "../subgroup-element";
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
            <div className="col-10 bg-light px-5 ">
              <h4 className="border-bottom my-5 pb-1">СЭДВҮҮД</h4>
              <Button className="btn btn-outline-dark btn-lg py-2 mt-4 btn-light btn-block w-100">
                +
              </Button>
              <SubgroupElement subgroup_name="sda" />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </>
    );
  }
}

export default SubgroupList;
