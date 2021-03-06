import { useState } from "react";
import "../assets/styles/navigation.css";
import "../assets/styles/dropdown.css";
import { Link, useHistory } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { deleteCookie } from "../utils/cookie-helper";
import { toast, Toaster } from "react-hot-toast";
import { PasswordOutlined } from "@mui/icons-material";
import LanguageHandler from "./LanguageHandler";
import useTranslation from "../CHC/translations";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const translation = useTranslation();
  let history = useHistory();

  const toggleDropdown = () => {
    setIsShown(!isShown);
  };

  const logout = () => {
    deleteCookie("token");
    deleteCookie("user");
    deleteCookie("userid");
    deleteCookie("isLoggedIn");
    history.push("/");
    toast.success("Logged out Successfully!");
  };
  const changePassword = () => {
    history.push("/reset_password");
  };

  return (
    <header className="navbar container">
      <div className="navbar-title navbar-item">Navbar</div>
      <div className="navbar-item">
        {" "}
        <span>{translation.changeLanguage}</span> &nbsp;
        <LanguageHandler />
      </div>
      <div className="navbar-item dropdown" onClick={toggleDropdown}>
        <button className="dropbtn">
          <SettingsIcon />
        </button>
        <div className={`dropdown-content ${isShown ? "block" : ""}`}>
          <Link to="/" className="drop-link">
            <AccountCircleIcon /> &nbsp;{translation.profile}
          </Link>
          <div className="drop-link" onClick={changePassword}>
            <PasswordOutlined /> &nbsp;{translation.change}
          </div>
          <div className="drop-link" onClick={logout}>
            <LogoutIcon />
            &nbsp; {translation.logout}
          </div>
        </div>
      </div>
      <Toaster />
    </header>
  );
};

export default Navbar;
