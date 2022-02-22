import React from "react";
import "./assets/styles/common.css";
import Navbar from "./components/Navbar";
import ProjectForm from "./components/ProjectForm";
import Sidebar from "./components/Sidebar";

const ProjectAdd = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="side-component">
          <div className="container">
            <ProjectForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
