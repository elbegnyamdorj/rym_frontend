import React, { Component } from "react";
import "./lesson-card-style.css";

class LessonCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card text-center shadow p-3 mb-5 bg-light rounded-4 border-0 card-style">
        <div class="card-body">
          <i class="fas fa-plus"></i>
          <h1>+</h1>
          <p class="card-text">Хичээл Нэмэх</p>
          <a href="#" class="stretched-link"></a>
        </div>
      </div>
    );
  }
}
export default LessonCard;
