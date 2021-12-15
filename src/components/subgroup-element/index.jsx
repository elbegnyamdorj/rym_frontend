import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
export class SubgroupElement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to="/" state={{ group_id: this.props.group_id }}>
        <Button className="btn btn-outline-dark btn-lg py-2 mt-4 btn-light btn-block w-100">
          {this.props.subgroup_name}
        </Button>
      </Link>
    );
  }
}

export default SubgroupElement;
