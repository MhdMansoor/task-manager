import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useHistory } from "react-router-dom";
import { createproject, getuser } from "../utils/projecr-services";
import toast, { Toaster } from "react-hot-toast";
const ProjectForm = () => {
  let history = useHistory();
  const initialValues = {
    projectName: "",
    projectDescription: "",
    startDate: "",
    endDate: "",
    status: "",
    developer: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [devArray, setDevArray] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  // get user
  const getUser = async () => {
    const { data, status, error } = await getuser();

    if (error) {
      console.log(status);
    } else if (status === 200 && data) {
      setDevArray(data.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // console.log(formValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const createProject = async (values) => {
    const projectData = {
      projectName: values.projectName,
      projectDescription: values.projectDescription,
      startDate: values.startDate,
      endDate: values.endDate,
      status: values.status,
      developer: values.developer.toString(),
    };
    const { data, status, error } = await createproject(projectData);

    if (error) {
      console.log(error);
      toast.error("Project creation failed");
    } else if (status === 201 && data) {
      history.push("/task");
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      createProject(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.projectName) {
      errors.projectName = "Project Name Required!";
    }
    if (!values.projectDescription) {
      errors.projectDescription = "Project Descriptionis Required!";
    }
    if (!values.startDate) {
      errors.startDate = "StartDate is Required!";
    }
    if (!values.endDate) {
      errors.endDate = "EndDate is Required!";
    }
    if (!values.status) {
      errors.status = "Status is Required";
    }
    if (!values.developer) {
      errors.developer = "Developer is Required";
    }
    return errors;
  };

  return (
    <div className="addtask-form form-border">
      <h1>Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            name="projectName"
            placeholder="Eg:  Project Name"
            value={formValues.projectName}
            onChange={handleChange}
          />
          <p className="error">{formErrors.projectName}</p>
        </div>
        <div className="form-group">
          <label>Project Description</label>
          <input
            type="text"
            name="projectDescription"
            placeholder="Eg: Project is used blockchain tech."
            value={formValues.projectDescription}
            onChange={handleChange}
          />
          <p className="error">{formErrors.projectDescription}</p>
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="datetime-local"
            name="startDate"
            value={formValues.startDate}
            onChange={handleChange}
          />
          <p className="error">{formErrors.startDate}</p>
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="datetime-local"
            name="endDate"
            min={formValues.startDate}
            value={formValues.endDate}
            onChange={handleChange}
          />
          <p className="error">{formErrors.endDate}</p>
        </div>
        <div className="form-group">
          <label>Status</label>
          <div className="select-arrow">
            <select
              name="status"
              value={formValues.status}
              onChange={handleChange}
            >
              <option value="">Project Status</option>
              <option value="Start">Start</option>
              <option value="Pendding">Pending</option>
              <option value="Finished">Finished</option>
            </select>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </div>
          <p className="error">{formErrors.status}</p>
        </div>

        <div className="form-group">
          <label>Developer</label>
          <div className="select-arrow">
            <select
              name="developer"
              value={formValues.developer}
              onChange={handleChange}
            >
              <option value=""> Select Developer</option>
              {devArray &&
                devArray.map((ele) => (
                  <option key={ele._id} value={ele._id.toString()}>
                    {ele.name}
                  </option>
                ))}
            </select>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </div>
          <p className="error">{formErrors.developer}</p>
        </div>

        <div className="form-group">
          <input type="submit" value="Add Project" />
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
