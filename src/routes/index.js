import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import Dashboard from "../Dashboard";
import Add from "../Add";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
