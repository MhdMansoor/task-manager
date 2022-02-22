import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import Dashboard from "../Dashboard";
import Add from "../Add";
import PrivateRoute from "../PrivateRoute";
import TaskCom from "../Task";
import ForgetPassword from "../ForgetPassword";
import ResetPassword from "../ResetPassword";
import ProjectAdd from "../ProjectAdd";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props) => <Login {...props} />} />
        <Route
          exact
          path="/signup"
          component={(props) => <Signup {...props} />}
        />
        <Route
          exact
          path="/forget_password"
          component={(props) => <ForgetPassword {...props} />}
        />
        <PrivateRoute
          exact
          path="/dashboard"
          component={(props) => <Dashboard {...props} />}
        />
        <PrivateRoute
          exact
          path="/task"
          component={(props) => <TaskCom {...props} />}
        />
        <PrivateRoute
          exact
          path="/task/edit/:id"
          component={(props) => <Add {...props} />}
        />
        <PrivateRoute
          exact
          path="/task/add"
          component={(props) => <Add {...props} />}
        />
        <PrivateRoute
          exact
          path="/project"
          component={(props) => <ProjectAdd {...props} />}
        />
        <PrivateRoute
          exact
          path="/reset_password"
          component={(props) => <ResetPassword {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
