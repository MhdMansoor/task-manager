import React, { useState, useEffect } from "react";
import "./assets/styles/common.css";
import "./assets/styles/form.css";
import { Link, useHistory } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { login } from "./utils/auth-services";
import { saveCookie } from "./utils/cookie-helper";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let history = useHistory();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
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

  const signin = async (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    const { data, status, error } = await login(userData);

    if (error) {
      console.log(status);
      toast.error("Email or Password is wrong!");
    } else if (status === 200 && data) {
      saveCookie("token", data.authToken);
      saveCookie("user", data.user);
      saveCookie("userid", data.user._id);
      history.push("/dashboard");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      signin(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is Required!";
    } else if (!regEx.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  return (
    <div className="homepage-banner">
      <div className="banner-left-cover"></div>
      <div className="container banner-right-cover">
        <div className="banner-right">
          <div className="form-page form-border">
            <h1>Login </h1>
            <p>Please fill in the details</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email Id</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Eg:  hello@gmail.com"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.email}</p>
              </div>

              <div className="form-group">
                <label>Password </label>
                <div className="formpassword-group">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    placeholder="eg. ei342#MT"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-btn"
                    onClick={togglePassword}
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
                <input type="submit" value="Log in" />
              </div>
            </form>
            <p className="text-center">
              Don't have an account,{" "}
              <Link to="/signup" className="navigation-link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
