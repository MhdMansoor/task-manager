import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import Dashboard from "../Dashboard";
import Add from "../Add";
import PrivateRoute from "../PrivateRoute";

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
        <PrivateRoute
          exact
          path="/dashboard"
          component={(props) => <Dashboard {...props} />}
        />
        <PrivateRoute
          exact
          path="/add"
          component={(props) => <Add {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
