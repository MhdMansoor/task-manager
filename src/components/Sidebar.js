import "../assets/styles/sidebar.css";
import { SidebarData } from "../Datas/SidebarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {SidebarData.map((val, key) => {
        return (
          <Link
            className="sidebar-box"
            key={key}
            to={val.link}
            id={window.location.pathname === val.link ? "active" : ""}
          >
            <div className="sidebar-icon">{val.icon}</div>
            <h3 className="text-center">{val.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
