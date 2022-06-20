import { Route, Switch, Redirect } from "react-router-dom";

// PAGES:
import Weather from "./weather/Weather";
// http://localhost:3000/?lat={lat}&lng={lng}
// http://localhost:3000/?lat=43.3247&lng=21.9033

const Router = () => {
  return (
    <Switch>
      <Route exact component={Weather} path="/weather" />
      <Redirect to="/weather" />
    </Switch>
  );
};

export default Router;
