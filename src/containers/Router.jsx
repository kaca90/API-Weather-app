import { Route, Switch, Redirect } from "react-router-dom";

// PAGES:
import Weather from "./weather/Weather";

const Router = () => {
  return (
    <Switch>
      <Route exact component={Weather} path="/weather" />
      <Redirect to="/weather" />
    </Switch>
  );
};

export default Router;
