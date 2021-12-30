import React from "react";
import "./assets/styles/common.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddForm from "./components/AddForm";

const Add = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="side-component">
          <div className="container">
            <AddForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
