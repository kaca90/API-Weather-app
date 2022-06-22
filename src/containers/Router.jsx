import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home/Home";

// PAGES:
import Weather from "./weather/Weather";

const Router = () => {
  return (
    <Switch>
      <Route exact component={Weather} path="/weather" />
      <Route exact component={Home} path="/home" />
      <Redirect to="/home"/>
    </Switch>
  );
};

export default Router;
