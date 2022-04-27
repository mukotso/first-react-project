import React from "react";
import Header from "./common/Header";
import {Route, Switch} from "react-router-dom";
import HomePage from "./home/homePage";
import AboutPage from "./about/aboutPage";
import CoursesPage from "./courses/CoursesPage";
import PageNotFound from "./PageNotFound";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;