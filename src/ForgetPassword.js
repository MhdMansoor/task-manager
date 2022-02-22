import React, { useState, useEffect } from "react";
import "./assets/styles/common.css";
import "./assets/styles/form.css";
import { Link, useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { forgetpassword } from "./utils/auth-services";
const ForgetPassword = () => {
  const initialValues = { email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const forgetPwd = async (values) => {
    const userData = {
      email: values.email,
    };
    const { data, status, error } = await forgetpassword(userData);

    if (error) {
      console.log(status);
      setFormValues(initialValues);
      toast.error("Email is wrong! or Email not exist");
    } else if (status === 200 && data) {
      history.push("/");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      forgetPwd(formValues);
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
    return errors;
  };
  return (
    <div className="homepage-banner">
      <div className="banner-left-cover"></div>
      <div className="container banner-right-cover">
        <div className="banner-right">
          <div className="form-page form-border">
            <h1>Forget Password</h1>
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
                <input type="submit" value="Submit" />
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

export default ForgetPassword;
