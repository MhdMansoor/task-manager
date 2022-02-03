import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useHistory } from "react-router-dom";
import "../assets/styles/table.css";
import useTranslation from "../CHC/translations";
import { useLanguageContext } from "../contexts/LanguageContext";

const Table = (props) => {
  const { taskData, deleteTask, ...rest } = props;
  const translation = useTranslation();
  const { language } = useLanguageContext();
  console.log(language);
  let history = useHistory();
  const editTask = (data) => {
    history.push(`/task/edit/${data._id}`, { ...data });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>{translation.SINo}</th>
          <th>{translation.projectName}</th>
          <th>{translation.taskName}</th>
          <th>{translation.status}</th>
          <th>{translation.progress}</th>
          <th>{translation.completionDate}</th>
          <th>{translation.projectAssignee}</th>
          <th>{translation.action}</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td data-heading="SI.NO">1</td>
          <td data-heading="Project Name">Project Name</td>
          <td data-heading="Task Name">Task Name</td>
          <td data-heading="Status" className="active">
            active
          </td>
          <td dta-heading="Progress">Progress</td>
          <td data-heading="Completion Date">Completion Date</td>
          <td data-heading="Project Assignee">Project Assignee</td>
          <td className="dropdown">
            <button className="dropbtn">
              <MoreVertIcon />
            </button>
            <div className="dropdown-content">
              <button className="btn">
                <EditIcon /> &nbsp;Edit
              </button>
              <button className="btn">
                <DeleteIcon /> &nbsp;Delete
              </button>
            </div>
          </td>
        </tr>

        <tr>
          <td data-heading="SI.NO">2</td>
          <td data-heading="Project Name">Project Name</td>
          <td data-heading="Task Name">Task Name</td>
          <td data-heading="Status" className="active">
            active
          </td>
          <td dta-heading="Progress">Progress</td>
          <td data-heading="Completion Date">Completion Date</td>
          <td data-heading="Project Assignee">Project Assignee</td>
          <td className="dropdown">
            <button className="dropbtn">
              <MoreVertIcon />
            </button>
            <div className="dropdown-content">
              <button className="btn">
                <EditIcon /> &nbsp;Edit
              </button>
              <button className="btn">
                <DeleteIcon /> &nbsp;Delete
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td data-heading="SI.NO">3</td>
          <td data-heading="Project Name">Project Name</td>
          <td data-heading="Task Name">Task Name</td>
          <td data-heading="Status" className="inactive">
            inactive
          </td>
          <td dta-heading="Progress">Progress</td>
          <td data-heading="Completion Date">Completion Date</td>
          <td data-heading="Project Assignee">Project Assignee</td>
          <td className="dropdown">
            <button className="dropbtn">
              <MoreVertIcon />
            </button>
            <div className="dropdown-content">
              <button className="btn">
                <EditIcon /> &nbsp;Edit
              </button>
              <button className="btn">
                <DeleteIcon /> &nbsp;Delete
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td data-heading="SI.NO">4</td>
          <td data-heading="Project Name">Project Name</td>
          <td data-heading="Task Name">Task Name</td>
          <td data-heading="Status" className="active">
            active
          </td>
          <td dta-heading="Progress">Progress</td>
          <td data-heading="Completion Date">Completion Date</td>
          <td data-heading="Project Assignee">Project Assignee</td>
          <td className="dropdown">
            <button className="dropbtn">
              <MoreVertIcon />
            </button>
            <div className="dropdown-content">
              <button className="btn">
                <EditIcon /> &nbsp;Edit
              </button>
              <button className="btn">
                <DeleteIcon /> &nbsp;Delete
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td data-heading="SI.NO">5</td>
          <td data-heading="Project Name">Project Name</td>
          <td data-heading="Task Name">Task Name</td>
          <td data-heading="Status" className="inactive">
            inactive
          </td>
          <td dta-heading="Progress">Progress</td>
          <td data-heading="Completion Date">Completion Date</td>
          <td data-heading="Project Assignee">Project Assignee</td>
          <td className="dropdown">
            <button className="dropbtn">
              <MoreVertIcon />
            </button>
            <div className="dropdown-content">
              <button className="btn">
                <EditIcon /> &nbsp;Edit
              </button>
              <button className="btn">
                <DeleteIcon /> &nbsp;Delete
              </button>
            </div>
          </td>
        </tr> */}
        {taskData.length > 0 ? (
          taskData.map((ele, index) => (
            <tr key={index}>
              <td data-heading="SI.NO">{index + 1}</td>
              <td data-heading="Project Name">{ele.projectName}</td>
              <td data-heading="Task Name">{ele.taskName}</td>
              <td data-heading="Status" className={ele.status}>
                {ele.status}
              </td>
              <td dta-heading="Progress">Progress</td>
              <td data-heading="Completion Date">
                {Date(ele.endDate)
                  .split(" ")
                  .splice(1, 3)
                  .toString()
                  .replace(/,/g, " ")}
              </td>
              <td data-heading="Project Assignee">{ele.developer.name}</td>
              <td className="dropdown">
                <button className="dropbtn">
                  <MoreVertIcon />
                </button>
                <div className="dropdown-content">
                  <button className="btn" onClick={() => editTask(ele)}>
                    <EditIcon /> &nbsp;{translation.edit}
                  </button>
                  <button className="btn" onClick={() => deleteTask(ele._id)}>
                    <DeleteIcon /> &nbsp;{translation.delete}
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr className="no-data">
            <td colSpan={"8"}>No Data Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
