import React, { Component } from "react";
import "./lesson-card-style.css";

class LessonCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card text-right shadow p-3 mb-5 bg-light rounded-3 border-0 card-style">
              <div class="card-body">

                <h4 class="card-title">{this.props.lesson_name} - {this.props.group_number}</h4>
                <p class="card-text">Date</p>
                <a href="teachSub.html" class=" stretched-link"> </a>

              </div>
              </div>

    );
  }
}
export default LessonCard;
