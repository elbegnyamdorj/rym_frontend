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
            <div class="col-10 bg-light px-5 h-100">
              <h4 class="border-bottom my-5 pb-1">Хичээлийн нэр</h4>
              <div class="container">
                <div class="d-flex align-items-center flex-column">
                  <input
                    type="text"
                    class="form-control mb-5"
                    id="sub_group_name"
                    placeholder="Сэдвийн нэр оруулна уу"
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
                      class="btn btn-outline-dark m-5"
                      href="teachSub.html"
                      role="button"
                      style={{ width: "150px" }}
                    >
                      ЦУЦЛАХ
                    </a>
                    <a
                      class="btn btn-dark m-5"
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
