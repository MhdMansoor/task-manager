import React, { useState, useEffect } from "react";
import "./assets/styles/common.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { saveCookie } from "./utils/cookie-helper";
import { signup } from "./utils/auth-services";
import toast, { Toaster } from "react-hot-toast";
const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    setpassword: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [fileError, setFileError] = useState({
    show: false,
    msg: "",
  });
  let navigate = useNavigate();

  const toggleNewPassword = () => {
    setPasswordShown(!passwordShown);
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  console.log(selectedFile, "file");

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

  const register = async (values, selectedFile) => {
    // const userData = {
    //   name: values.name,
    //   email: values.email,
    //   file: selectedFile.name,
    //   password: values.setpassword,
    //   confirmPassword: values.confirmpassword,
    // };
    var formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("profileImage", selectedFile);
    formData.append("password", values.setpassword);
    formData.append("confirmpassword", values.confirmpassword);
    console.log(formData);
    const { data, status, error } = await signup(formData);
    if (error) {
      toast.error("Sign up failed, please try again!");
    } else if (status === 200 && data) {
      saveCookie("userid", data.user.id);
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      register(formValues, selectedFile);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name Required!";
    }
    if (!values.email) {
      errors.email = "Email is Required!";
    } else if (!regExEmail.test(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.setpassword) {
      errors.setpassword = "Password is Required!";
    } else if (values.setpassword.length < 4) {
      errors.setpassword = "password should be in 4 to 10 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Password is Required!";
    } else if (values.setpassword !== values.confirmpassword) {
      errors.confirmpassword = "Password does not match";
    }
    return errors;
  };

  return (
    <div className="homepage-banner">
      <div className="banner-left-cover"></div>
      <div className="container banner-right-cover">
        <div className="banner-right">
          <div className="addtask-form form-border">
            <h1>Sign Up </h1>
            <p>Please fill in the details</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Eg:  John"
                  value={formValues.name}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.name}</p>
              </div>
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
                <label>File Upload</label>
                <input type="file" name="file" onChange={changeHandler} />
              </div>

              <div className="form-group">
                <label>Set Password </label>
                <div className="formpassword-group">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="setpassword"
                    placeholder="eg. ei342#MT"
                    value={formValues.setpassword}
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
                <p className="error">{formErrors.setpassword}</p>
              </div>
              <div className="form-group">
                <label>Confirm Password </label>
                <div className="formpassword-group">
                  <input
                    type={confirmPasswordShown ? "text" : "password"}
                    name="confirmpassword"
                    placeholder="eg. ei342#MT"
                    value={formValues.confirmpassword}
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
                <p className="error">{formErrors.confirmpassword}</p>
              </div>
              <div className="form-group">
                <input type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-center">
              Already having an account,{" "}
              <Link to="/" className="navigation-link">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;