import {Route, Switch} from "react-router-dom";
import HomePage from "../components/home/homePage";
import AboutPage from "../components/about/aboutPage";
import CoursesPage from "../components/courses/CoursesPage";
import PageNotFound from "../components/PageNotFound";
import React from "react";

function routes (){
    return(
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route component={PageNotFound} />
        </Switch>
    );
}

export default routes;