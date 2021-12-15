import React, { Component } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MAIN_URL } from "../../urls";
import Navbar from "../navbar";
import Button from "react-bootstrap/Button";
import SubgroupElement from "../subgroup-element";

const SubgroupList = (props) => {
  const location = useLocation();
  const [subgroup_list, setSubgroup_list] = useState([]);
  const [group_id, setGroup_id] = useState(location.state.group_id);
  console.log(group_id);
  useEffect(() => {
    getAllSubgroupList();
  }, []);

  const getAllSubgroupList = () => {
    axios
      .get(`${MAIN_URL}/subgroup/`, {
        params: {
          group_id: group_id,
        },
      })
      .then((res) => {
        const data = res.data;
        setSubgroup_list(data);
      });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col-10 bg-light px-5 ">
            <h4 className="border-bottom my-5 pb-1">СЭДВҮҮД</h4>
            <Link
              className="btn btn-outline-dark btn-lg py-2 mt-4 btn-light btn-block w-100"
              role="button"
              to="/lesson/subgroups/create"
              state={{ group_id: group_id }}
            >
              +
            </Link>
            {subgroup_list.map((el) => (
              <SubgroupElement
                key={el.id}
                subgroup_name={el.subgroup_name}
                group_id={el.group_id}
              />
            ))}
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default SubgroupList;
