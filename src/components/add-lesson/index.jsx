import React, { Component } from "react";
import Navbar from "../navbar";
export class CreateLesson extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-1"></div>
            <div class="col-10 bg-light px-5 h-100">
              <h4 class="border-bottom my-5 pb-1">ХИЧЭЭЛ НЭМЭХ</h4>
              <div class="container">
                <div class="row">
                  <div class="col-sm-6 text-left">
                    <textarea
                      class="form-control mb-5"
                      aria-label="With textarea"
                      placeholder="student@ufe.edu.mn , .."
                      style={{ height: "300px" }}
                    ></textarea>
                  </div>
                  <div class="col-sm-6 d-flex align-items-center flex-column">
                    <input
                      type="text"
                      class="form-control mb-5"
                      id="lesson_name"
                      placeholder="Хичээлийн нэр оруулна уу"
                    />

                    <a
                      class="btn btn-dark mt-5"
                      href="teachSub.html"
                      role="button"
                      style={{ width: "150px" }}
                    >
                      ХИЧЭЭЛ НЭЭХ
                    </a>
                    <a
                      class="btn btn-outline-dark mt-2"
                      href="teachHome.html"
                      role="button"
                      style={{ width: "150px" }}
                    >
                      ЦУЦЛАХ
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateLesson;
