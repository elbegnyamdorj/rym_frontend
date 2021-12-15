import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navbar";
import TeamElement from "../team-element";
const TeamList = () => {
  const location = useLocation();

  const [subgroup_name, setSubgroupName] = useState(
    location.state.subgroup_name
  );
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col-10 bg-light px-5 h-100">
            <h4 className="border-bottom my-5 pb-1">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 text-left">LessonName?</div>
                  <div className="col-sm-6 text-left">{subgroup_name} </div>
                </div>
              </div>
            </h4>

            <div className="custom-control custom-switch text-right">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                ҮНЭЛГЭЭГ НЭЭХ/ХААХ
              </label>
            </div>
            <TeamElement />
            <button type="button" className="btn btn-outline-dark btn-block">
              БАГ НЭМЭХ
            </button>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 text-left">
                  <a
                    className="btn btn-secondary my-5 px-5"
                    href="teachSub.html"
                    role="button"
                  >
                    Хичээл рүү буцах
                  </a>
                </div>
                <div className="col-sm-6 text-right">
                  <a
                    className="btn btn-dark my-5 px-5"
                    href="teachSubTeamS.html"
                    role="button"
                  >
                    ХАДГАЛАХ
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default TeamList;
