import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import toast, { Toaster } from "react-hot-toast";
import { resetpassword } from "./utils/auth-services";
import { getCookie } from "./utils/cookie-helper";

const ResetPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const toggleNewPassword = () => {
    setPasswordShown(!passwordShown);
  };
  let history = useHistory();
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const resetPwd = async (values) => {
    const userData = {
      token: getCookie("token"),
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    const { data, status, error } = await resetpassword(userData);

    if (error) {
      console.log(status);
      setFormValues(initialValues);
      toast.error("Password is wrong");
    } else if (status === 200 && data) {
      history.push("/dashboard");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      resetPwd(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regExPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if (!regExPassword.test(values.password)) {
      errors.password = `Password must be Min 8 letters and Uppercase,
      )}  Lowercase, Special Character, Numeric`;
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password is Required!";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }
    return errors;
  };

  return (
    <div className="homepage-banner">
      <div className="banner-left-cover"></div>
      <div className="container banner-right-cover">
        <div className="banner-right">
          <div className="addtask-form form-border">
            <h1>Password Reset </h1>
            <p>Please fill in the details</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Set Password </label>
                <div className="formpassword-group">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    placeholder="eg. Welcome@123"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <button
                    className="password-btn"
                    type="button"
                    onClick={toggleNewPassword}
                  >
                    {passwordShown ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </button>
                </div>
                <p className="error">{formErrors.password}</p>
              </div>
              <div className="form-group">
                <label>Confirm Password </label>
                <div className="formpassword-group">
                  <input
                    type={confirmPasswordShown ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="eg. Welcome@123"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-btn"
                    onClick={toggleConfirmPassword}
                  >
                    {confirmPasswordShown ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </button>
                </div>
                <p className="error">{formErrors.confirmPassword}</p>
              </div>
              <div className="form-group">
                <input type="submit" value="Submit" />
              </div>
            </form>
            <p className="text-center">
              Do't want change,{" "}
              <Link to="/dashboard" className="navigation-link">
                Dashboard
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ResetPassword;
