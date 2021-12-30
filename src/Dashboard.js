import React from "react";
import "./assets/styles/common.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="side-component">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Filter />
              </div>
              <div className="col-md-9">
                <Search />
                <Table />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
