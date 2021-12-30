import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AddForm = () => {
  return (
    <div className="addtask-form form-border">
      <h1>New Task</h1>
      <form>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            name="projectName"
            placeholder="Eg:  Project Name"
          />
        </div>
        <div className="form-group">
          <label>Task Name</label>
          <input type="text" name="taskName" placeholder="Eg:  Task Name" />
        </div>
        <div className="form-group">
          <label>Project Status</label>
          <div className="select-arrow">
            <select name="status">
              <option value="">Project Status</option>
              <option value="active">active</option>
              <option value="inactive">in-active</option>
            </select>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </div>
        <div className="form-group">
          <label>Completion Date</label>
          <input type="date" name="dateofbirth" />
        </div>

        <div className="form-group">
          <label>Assignee</label>
          <div className="select-arrow">
            <select name="assignee">
              <option value="">Select assignee</option>
              <option value="lorem">Lorem</option>
              <option value="ipsum">Ipsum</option>
            </select>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Add Task" />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
