import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createproject, getuser } from "../utils/projecr-services";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { createtask, edittask } from "../utils/task-services";
import useTranslation from "../CHC/translations";

const AddForm = (props) => {
  const { initialValues, ...rest } = props;
  const translation = useTranslation();
  let history = useHistory();

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
  const createTask = async (values) => {
    const taskData = {
      projectName: values.projectName,
      taskName: values.taskName,
      startDate: values.startDate,
      endDate: values.endDate,
      status: values.status,
      developer: values.developer.toString(),
    };
    const { data, status, error } = await createtask(taskData);

    if (error) {
      console.log(error);
      toast.error("Task creation failed");
    } else if (status === 201 && data) {
      history.push("/dashboard");
    }
  };
  const updateTask = async (values) => {
    const taskData = {
      projectName: values.projectName,
      taskName: values.taskName,
      startDate: values.startDate,
      endDate: values.endDate,
      status: values.status,
      developer: values.developer.toString(),
    };
    const { data, status, error } = await edittask(taskData, values.id);

    if (error) {
      console.log(error);
      toast.error("Task update failed");
    } else if (status === 201 && data) {
      history.push("/dashboard");
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //createTask(formValues);
      //console.log(formValues);
      if (formValues.id) {
        updateTask(formValues);
      } else {
        createTask(formValues);
      }
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.projectName) {
      errors.projectName = "Project Name Required!";
    }
    if (!values.taskName) {
      errors.taskName = "Task Name Required!";
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
      <h1>{translation.task}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{translation.projectName}</label>
          <input
            type="text"
            name="projectName"
            placeholder={`Eg:  ${translation.projectName}`}
            value={formValues.projectName}
            onChange={handleChange}
          />
          <p className="error">{formErrors.projectName}</p>
        </div>
        <div className="form-group">
          <label>{translation.taskName}</label>
          <input
            type="text"
            name="taskName"
            placeholder={`Eg: ${translation.taskName}.`}
            value={formValues.taskName}
            onChange={handleChange}
          />
          <p className="error">{formErrors.taskName}</p>
        </div>
        <div className="form-group">
          <label>{translation.startDate}</label>
          <input
            type="datetime-local"
            name="startDate"
            value={formValues.startDate.substring(0, 16)}
            onChange={handleChange}
          />
          <p className="error">{formErrors.startDate}</p>
        </div>
        <div className="form-group">
          <label>{translation.enddate}</label>
          <input
            type="datetime-local"
            name="endDate"
            min={formValues.startDate}
            value={formValues.endDate.substring(0, 16)}
            onChange={handleChange}
          />
          <p className="error">{formErrors.endDate}</p>
        </div>
        <div className="form-group">
          <label>{translation.status}</label>
          <div className="select-arrow">
            <select
              name="status"
              value={formValues.status}
              onChange={handleChange}
            >
              <option value="">{translation.status}</option>
              <option value="active">{translation.active}</option>
              <option value="inactive">{translation.inactive}</option>
            </select>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </div>
          <p className="error">{formErrors.status}</p>
        </div>

        <div className="form-group">
          <label>{translation.developer}</label>
          <div className="select-arrow">
            <select
              name="developer"
              value={formValues.developer}
              onChange={handleChange}
            >
              <option value="">{translation.selectDeveloper}</option>
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
          <input type="submit" value={translation.addTask} />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
