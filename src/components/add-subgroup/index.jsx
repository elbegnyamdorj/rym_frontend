import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { MAIN_URL } from "../../urls";
const CreateSubgroup = () => {
  const location = useLocation();
  const [sub_group_name, setSubgroupName] = useState("");
  const [num_of_groups, setNumOfGroups] = useState(0);
  const [group_id] = useState(location.state.group_id);

  console.log(typeof group_id);
  const createSubGroup = () => {
    axios
      .post(`${MAIN_URL}/subgroup/`, {
        subgroup_name: sub_group_name,
        group_id: group_id,
      })
      .then((res) => {
        alert("Success");
        const data = res.data;
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-1"></div>
          <div className="col-10 bg-light px-5 h-100">
            <h4 className="border-bottom my-5 pb-1">Хичээлийн нэр</h4>
            <div className="container">
              <div className="d-flex align-items-center flex-column">
                <input
                  type="text"
                  className="form-control mb-5"
                  id="sub_group_name"
                  placeholder="Сэдвийн нэр оруулна уу"
                  value={sub_group_name}
                  onChange={(e) => setSubgroupName(e.target.value)}
                />
                <div className="d-flex justify-content-start w-100">
                  <span className="align-bottom p-2 mr-2">
                    БАГИЙН ТОО ОРУУЛНА УУ{" "}
                  </span>
                  <input
                    type="number"
                    className="form-control "
                    id="teamNum"
                    placeholder="0"
                    style={{ width: "100px" }}
                    value={num_of_groups}
                    onChange={(e) => setNumOfGroups(e.target.value)}
                  />
                </div>

                <div>
                  <Link
                    to="/lesson"
                    className="btn btn-outline-dark m-5"
                    href="teachSub.html"
                    role="button"
                    style={{ width: "150px" }}
                  >
                    ЦУЦЛАХ
                  </Link>
                  <Link
                    to="/lesson/subgroups/teams"
                    onClick={createSubGroup}
                    state={{ subgroup_name: sub_group_name }}
                    className="btn btn-dark m-5"
                    href="teachSub.html"
                    role="button"
                    style={{ width: "150px" }}
                  >
                    СЭДЭВ НЭЭХ
                  </Link>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSubgroup;
