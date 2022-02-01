import React, { useState, useEffect } from "react";
import "./assets/styles/common.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Card } from "./components/Card";
import { getproject } from "./utils/projecr-services";
import "./assets/styles/filter.css";
import { useHistory } from "react-router-dom";

const TaskCom = () => {
  let history = useHistory();
  const [projectList, setProjectList] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [dataFromSearchOrFilter, setDataFromSearchOrFilter] = useState(null);
  const getProject = async () => {
    const { data, status, error } = await getproject();

    if (error) {
      console.log(status);
    } else if (status === 200 && data) {
      setProjectList(data);
    }
  };
  useEffect(() => {
    getProject();
  }, []);
  const handleSearch = (e) => {
    setSortValue("");
    const { name, value } = e.target;
    setSearchText(value);
  };
  const handleSortByName = (e) => {
    setSearchText("");
    const { name, value } = e.target;
    setSortValue(value);
  };
  const search = () => {
    return projectList.data.filter(
      (row) =>
        row["projectName"]
          .toString()
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1
    );
  };
  const sortBy = (items) => {
    if (sortValue) {
      return items.filter(
        (row) =>
          row["projectName"]
            .toString()
            .toLowerCase()
            .indexOf(sortValue.toLowerCase()) > -1
      );
    }
    return items;
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="side-component">
          <div className="container">
            <div className="row task-header">
              <div className="flex-start">
                <h1>Project</h1>
              </div>
              <div className="flex-end">
                <button
                  className="header-btn"
                  onClick={() => history.push("/project")}
                >
                  Project
                </button>
              </div>
            </div>
            <div className="row task-filter space">
              <div className="col-md-6 flex-start">
                <Search search={handleSearch} searchText={searchText} />
              </div>
              {/* <div class="col-md-1" style={{paddingTop:"5px"}}>
                                Sort by: 
                            </div> */}
              <div className="col-md-6 flex-end">
                <span className="no-break"> Sort by:</span>
                <div className="form-group">
                  <div className="select-arrow">
                    <select
                      name="sortByName"
                      onChange={handleSortByName}
                      value={sortValue || "All"}
                    >
                      <option value="">All</option>
                      {projectList &&
                        projectList.data.map((ele) => (
                          <option key={ele._id} value={ele.projectName}>
                            {ele.projectName}
                          </option>
                        ))}
                    </select>
                    <span>
                      <KeyboardArrowDownIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {projectList && search().length > 0 ? (
                <div className="card-row">
                  {sortBy(search()).map((value, index) => (
                    <Card key={index} data={value} />
                  ))}{" "}
                </div>
              ) : (
                <div className="no-data-found"> No Data Found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCom;
