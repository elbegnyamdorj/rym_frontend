import React, { Component } from "react";
import { Link } from "react-router-dom";
import LessonCard from "../lesson-card";
// import "./lesson-card-list-style.css";

class CardList extends Component {
  render() {
    return (
      <div>
        <h4 className=" my-5 pb-1 border-bottom">ХИЧЭЭЛҮҮД</h4>
        <div className="card-list">
          <div className="card text-center shadow p-3 mb-5 bg-light rounded-4 border-0 card-style">
            <div className="card-body">
              <i className="fas fa-plus"></i>
              <h1>+</h1>
              <p className="card-text">Хичээл Нэмэх</p>
              <Link className="stretched-link" to="/lesson/create"></Link>
            </div>
          </div>
          {this.props.group_list.map((el) => (
            <LessonCard
              key={el.id}
              created_at={el.created_at}
              group_id={el.id}
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
