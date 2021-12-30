import { useState } from "react";
import "../assets/styles/navigation.css";
import "../assets/styles/dropdown.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleDropdown = () => {
    setIsShown(!isShown);
  };

  return (
    <header className="navbar container">
      <div className="navbar-title navbar-item">Navbar</div>
      <div className="navbar-item dropdown" onClick={toggleDropdown}>
        <button className="dropbtn">
          <SettingsIcon />
        </button>
        <div className={`dropdown-content ${isShown ? "block" : ""}`}>
          <Link to="/" className="drop-link">
            <AccountCircleIcon /> &nbsp;Profile
          </Link>
          <Link to="/" className="drop-link">
            <LogoutIcon />
            &nbsp; Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
