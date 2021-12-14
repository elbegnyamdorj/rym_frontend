import React, { Component } from "react";
import Navbar from "../navbar";
import TeamElement from "../team-element";
export class TeamList extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <Navbar />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-1"></div>
            <div class="col-10 bg-light px-5 h-100">
              <h4 class="border-bottom my-5 pb-1">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6 text-left">LessonName?</div>
                    <div class="col-sm-6 text-left">SubgroupName?</div>
                  </div>
                </div>
              </h4>

              <div class="custom-control custom-switch text-right">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitch1"
                />
                <label class="custom-control-label" for="customSwitch1">
                  ҮНЭЛГЭЭГ НЭЭХ/ХААХ
                </label>
              </div>
              <TeamElement />
              <button type="button" class="btn btn-outline-dark btn-block">
                БАГ НЭМЭХ
              </button>
              <div class="container">
                <div class="row">
                  <div class="col-sm-6 text-left">
                    <a
                      class="btn btn-secondary my-5 px-5"
                      href="teachSub.html"
                      role="button"
                    >
                      Хичээл рүү буцах
                    </a>
                  </div>
                  <div class="col-sm-6 text-right">
                    <a
                      class="btn btn-dark my-5 px-5"
                      href="teachSubTeamS.html"
                      role="button"
                    >
                      ХАДГАЛАХ
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

export default TeamList;
