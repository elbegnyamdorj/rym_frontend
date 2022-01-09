import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
export class SubgroupElement extends Component {
  constructor(props) {
    super(props);
    this.state={
        subgroup_name = props.subgroup_name,
        group_id = props.group_id,
        is_active = props.is_active,
        deadline = props.deadline,
    };
  }
  handleClick= ()=>{
        let path = `newPath`; 
        history.push(path);
  }
  render() {
    return (<>
    </>
    );
  }
}

export default SubgroupElement;
 