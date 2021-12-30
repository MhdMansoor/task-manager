import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../assets/styles/table.css";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>SI.No</th>
          <th>Project Name</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Progress</th>
          <th>Completion Date</th>
          <th>Project Assignee</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
