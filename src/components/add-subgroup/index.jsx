import React, { Component } from "react";
import Navbar from "../navbar";
export class CreateSubgroup extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <Navbar />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-1"></div>
            <div class="col-10 px-5 h-100">
              <h3 class="border-bottom my-5 pb-1">БАГИЙН АЖИЛ НЭМЭХ</h3>
              <div class="container">
                <div class="d-flex align-items-center flex-column">
                  <input
                    type="text"
                    class="form-control mb-5"
                    id="sub_group_name"
                    placeholder="Багийн ажлын нэр оруулна уу"
                  />
                  <div class="d-flex justify-content-start w-100">
                    <span class="align-bottom p-2 mr-2">
                      БАГИЙН ТОО ОРУУЛНА УУ{" "}
                    </span>
                    <input
                      type="number"
                      class="form-control "
                      id="teamNum"
                      placeholder="0"
                      style={{ width: "100px" }}
                    />
                  </div>

                  <div>
                    <a
                      class="btn btn-outline-primary m-5"
                      href="teachSub.html"
                      role="button"
                      style={{ width: "150px" }}
                    >
                      ЦУЦЛАХ
                    </a>
                    <a
                      class="btn btn-primary m-5"
                      href="teachSub.html"
                      role="button"
                      style={{ width: "150px" }}
                    >
                      СЭДЭВ НЭЭХ
                    </a>
                  </div>
                </div>
                <div class="col-1"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateSubgroup;
