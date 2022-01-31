import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./assets/styles/common.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import { useHistory } from "react-router-dom";
import { gettask, deletetask } from "./utils/task-services";
let PageSize = 10;
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [filterRadioValue, setFilterRadioValue] = useState("");
  const history = useHistory();
  const [taskData, setTaskData] = useState(null);
  const getTask = async () => {
    const { data, status, error } = await gettask();
    if (error) {
      console.log(status);
    } else if (status === 200 && data) {
      setTaskData(data.data);
    }
  };
  const deleteTask = async (id) => {
    const { data, status, error } = await deletetask(id);
    if (error) {
      console.log(status);
    } else if (status === 200 && data) {
      getTask();
    }
  };
  useEffect(() => {
    getTask();
  }, []);
  let currentTableData;
  currentTableData = useMemo(() => {
    if (taskData) {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return taskData.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, taskData]);
  const search = (data) => {
    return data.filter(
      (row) =>
        row["projectName"]
          .toString()
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1
    );
  };
  const filter = () => {
    return taskData
      .filter(
        (row) =>
          row["status"]
            .toString()
            .toLowerCase()
            .indexOf(filterRadioValue.toLowerCase()) > -1
      )
      .filter(
        (row) =>
          row["projectName"]
            .toString()
            .toLowerCase()
            .indexOf(filterText.toLowerCase()) > -1
      );
  };
  const handleSearch = (e) => {
    //setSortValue("");
    const { name, value } = e.target;
    setSearchText(value);
  };
  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (name === "search") {
      setFilterText(value);
    } else if (name === "status") {
      setFilterRadioValue(value);
    }
  };
  const clickApplyFilter = () => {
    setSearchText("");
    if (filterText || filterRadioValue) {
      setTaskData(filter(filterText, filterRadioValue));
    }
  };
  const clearFilter = () => {
    if (filterText || filterRadioValue) {
      getTask();
      setFilterText("");
      setFilterRadioValue("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="side-component">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Filter
                  handleFilter={handleFilter}
                  filterText={filterText}
                  filterRadioValue={filterRadioValue}
                  clickApplyFilter={clickApplyFilter}
                  clearFilter={clearFilter}
                />
              </div>
              <div className="col-md-9">
                <div className="flex-between ">
                  <Search searchText={searchText} search={handleSearch} />{" "}
                  <button
                    className="header-btn"
                    onClick={() => history.push("/add")}
                  >
                    Add Task
                  </button>
                </div>
                {currentTableData && (
                  <Table
                    taskData={search(currentTableData)}
                    deleteTask={deleteTask}
                  />
                )}
                {taskData && (
                  <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={taskData.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
