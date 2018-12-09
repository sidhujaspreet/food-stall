import * as React from "react";
import {Route, Switch} from 'react-router-dom';
import HomeComponent from '../components/pages/home/HomeComponent';
import ErrorComponent from "../components/pages/error/ErrorComponent";
import TestPage from "../components/common/test-page/TestPage";

export const AllRoutes = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route exact path="/test" component={TestPage}/>
        <Route component={ErrorComponent}/>
      </Switch>
  );
};
