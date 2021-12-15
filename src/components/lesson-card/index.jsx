import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./lesson-card-style.css";

class LessonCard extends Component {
  render() {
    return (
      <div className="card text-right shadow p-3 mb-5 bg-light rounded-3 border-0 card-style">
        <div className="card-body">
          <h4 className="card-title">
            {this.props.lesson_name} - {this.props.group_number}
          </h4>
          <p className="card-text">{this.props.created_at.substring(0, 10)}</p>
          <Link
            className="stretched-link"
            to="/lesson/subgroups"
            state={{ group_id: this.props.group_id }}
          ></Link>
        </div>
      </div>
    );
  }
}
export default LessonCard;
