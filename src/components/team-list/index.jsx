import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MAIN_URL } from "../../urls";
import Select from "react-select";
import { useEffect } from "react";
import TeamElement from "../team-element";
const TeamList = () => {
  const location = useLocation();
  const history = useNavigate();
  const [subgroup_name] = useState(location.state.subgroup_name);
  const [group_id] = useState(location.state.group_id);
  const [num_of_groups] = useState(location.state.num_of_groups);
  const [subgroup_id] = useState(location.state.subgroup_id);
  const [lesson_name] = useState(location.state.lesson_name);

  const [student_list, setStudent_list] = useState([]);

  const [team1data, setTeam1data] = useState();
  const [team2data, setTeam2data] = useState();
  const [team3data, setTeam3data] = useState();
  const [team4data, setTeam4data] = useState();
  const [team5data, setTeam5data] = useState();

  useEffect(() => {
    // getTeamList();
    getStudentList();
  }, []);

  const getStudentList = () => {
    axios
      .get(`${MAIN_URL}/subgroup/students/`, {
        params: {
          group_id: group_id,
        },
      })
      .then((res) => {
        const data = res.data;
        setStudent_list(data);
      });
  };
  const onSubmit = () => {
    var all_team_list = [team1data, team2data, team3data, team4data, team5data];
    var filtered_team_list = all_team_list.filter(function (x) {
      return x !== undefined;
    });
    axios
      .post(`${MAIN_URL}/teammember/create/`, {
        team_list: filtered_team_list,
        subgroup_id: subgroup_id,
        group_id: group_id,
      })
      .then((res) => {
        history("/lesson");
      });
  };
  const onSelected = (selected) => {
    switch (selected.id) {
      case 1:
        setTeam1data(selected);
        break;
      case 2:
        setTeam2data(selected);
        break;
      case 3:
        setTeam3data(selected);
        break;
      case 4:
        setTeam4data(selected);
        break;
      case 5:
        setTeam5data(selected);
        break;
    }
  };

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
                  <div className="col-sm-6 text-left">{lesson_name}</div>
                  <div className="col-sm-6 text-left">{subgroup_name} </div>
                </div>
              </div>
            </h4>

            {/* {Array.from({ length: num_of_groups }, (_, k) => ( */}

            {/* ))} */}
            <TeamElement
              dugaar={1}
              data={student_list}
              onSelected={onSelected}
            />

            <TeamElement
              dugaar={2}
              data={student_list}
              onSelected={onSelected}
            />

            <TeamElement
              dugaar={3}
              data={student_list}
              onSelected={onSelected}
            />

            <TeamElement
              dugaar={4}
              data={student_list}
              onSelected={onSelected}
            />

            <TeamElement
              dugaar={5}
              data={student_list}
              onSelected={onSelected}
            />

            <div className="container">
              <div className="row">
                <div className="col-sm-6 text-left">
                  <Link
                    className="btn btn-secondary my-5 px-5"
                    to="/lesson"
                    role="button"
                  >
                    Хичээл рүү буцах
                  </Link>
                </div>
                <div className="col-sm-6 text-right">
                  <button className="btn btn-dark my-5 px-5" onClick={onSubmit}>
                    ХАДГАЛАХ
                  </button>
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
