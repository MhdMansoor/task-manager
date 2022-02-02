import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../assets/styles/filter.css";
import "../assets/styles/checkbutton.css";
import useTranslation from "../CHC/translations";

const Filter = (props) => {
  const translation = useTranslation();
  const {
    handleFilter,
    filterText,
    clearFilter,
    filterRadioValue,
    clickApplyFilter,
    ...rest
  } = props;
  return (
    <div className="filter">
      <h3>{translation.filters}</h3>
      <div className="filter-row">
        <p>{translation.projectName}</p>
        <div className="form-group">
          <input
            type="text"
            placeholder={translation.SearchProjectName}
            name="search"
            value={filterText}
            onChange={handleFilter}
          />
        </div>
      </div>
      <div className="filter-row">
        <p>{translation.status}</p>
        <label className="checkmark-container">
          {translation.active}
          <input
            type="radio"
            value="active"
            name="status"
            checked={filterRadioValue.toLowerCase() === "active"}
            onChange={handleFilter}
          />
          <span className="checkmark"></span>
        </label>
        <label className="checkmark-container">
          {translation.inactive}
          <input
            type="radio"
            value="inactive"
            name="status"
            onChange={handleFilter}
            checked={filterRadioValue.toLowerCase() === "inactive"}
          />
          <span className="checkmark"></span>
        </label>
      </div>

      {/* <div className="filter-row">
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
      </div> */}
      <div className="filter-row">
        <div className="filter-button">
          <button className="btn" onClick={clickApplyFilter}>
            <FilterAltIcon />
            {translation.applyFilter}
          </button>
          <button className="btn" onClick={clearFilter}>
            <FilterAltOffIcon />
            {translation.clearFilter}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
