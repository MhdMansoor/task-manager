import React, { useEffect } from "react";
import "./assets/styles/common.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddForm from "./components/AddForm";

const Add = (props) => {
  // let data = props.location.state !== undefined ? props.location.state : "";
  // let initialValues = {
  //   projectName: "",
  //   taskName: "",
  //   startDate: "",
  //   endDate: "",
  //   status: "",
  //   developer: "",
  // };
  // useEffect(() => {
  //   if (data) {
  //     initialValues.taskName = data.taskName;
  //     initialValues.projectName = data.projectName;
  //     initialValues.startDate = data.startDate;
  //     initialValues.endDate = data.endDate;
  //     initialValues.status = data.status;
  //     initialValues.developer = data.developer._id;
  //     initialValues.id = data._id;
  //   }
  // }, [data]);

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
