import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../assets/styles/filter.css";
import "../assets/styles/checkbutton.css";

const Filter = () => {
  return (
    <div className="filter">
      <h3>Filters</h3>
      <div className="filter-row">
        <p>Project Name</p>
        <div className="form-group">
          <input type="text" placeholder="Search Project Name" />
        </div>
      </div>
      <div className="filter-row">
        <p>Status</p>
        <label className="checkmark-container">
          active
          <input type="radio" value="completed" name="status" />
          <span className="checkmark"></span>
        </label>
        <label className="checkmark-container">
          inactive
          <input type="radio" value="pending" name="status" />
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="filter-row">
        <p>Assignee</p>
        <div className="form-group">
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
      </div>
      <div className="filter-row">
        <div className="filter-button">
          <button className="btn">
            <FilterAltIcon />
            Apply filters
          </button>
          <button className="btn">
            <FilterAltOffIcon />
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
