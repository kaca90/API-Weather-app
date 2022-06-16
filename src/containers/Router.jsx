import { Route, Switch, Redirect } from "react-router-dom";

// PAGES:
import Home from "./weather/Weather";

const Router = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
