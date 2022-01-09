import React, { Component } from "react";

import LessonCard from "../lesson-card";
import "./lesson-card-list-style.css";

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className=" my-5 pb-1 border-bottom">ХИЧЭЭЛҮҮД</h3>
        <div className="card-list">
          <div className="card text-center shadow p-3 mb-5 rounded-4 border-0 card-style">
            <div className="card-body">
              <i className="fas fa-plus"></i>
              <h1>+</h1>
              <p className="card-text">ХИЧЭЭЛ НЭМЭХ</p>
              <a href="#" class="stretched-link"></a>
            </div>
          </div>
          {this.props.group_list.map(el => (
              <LessonCard
              lesson_name={el.lesson_name}
              group_number={el.group_number}
            />
          ))}
          
        </div>
      </div>
    );
  }
}
export default CardList;
