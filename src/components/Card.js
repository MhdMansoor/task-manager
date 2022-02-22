import React from "react";
import "../assets/styles/card.css";
import "../assets/styles/table.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Card = (props) => {
  const { data, ...rest } = props;
  return (
    <div className="card">
      <div className="card-head">
        <h3>{data.projectName}</h3>
        <div className="dropdown">
          <button className="dropbtn">
            <MoreVertIcon />
          </button>
          <div className="dropdown-content">
            <button className="btn">
              <EditIcon /> &nbsp;Edit
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
          <h5>No of Peoples</h5>
          <p>1</p>
        </div>
        <div>
          <h5>Last modified</h5>
          <p>
            {Date(data.updated_at)
              .split(" ")
              .splice(0, 4)
              .toString()
              .replace(/,/g, " ")}
          </p>
        </div>
      </div>
    </div>
  );
};
