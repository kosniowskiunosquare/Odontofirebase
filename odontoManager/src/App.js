import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'

import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Layout/Dashboard";
import LoginPage from "./components/Login/LoginPage";

import Calendar from "./components/views/Calendar"
import Patients from "./components/views/Patients";
import Payments from "./components/views/Payments";
import Profile from "./components/views/Profile";
import Records from "./components/views/Records";
import Stocks from "./components/views/Stocks";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {/* ruta login */}
          <Route exact path="/" name="Login" render={() => <LoginPage />} />
          {/* ruta home */}
          <Route
            exact
            path="/home"
            name="Layout"
            render={() => <Layout />}
          ></Route>
          <Route
            exact
            path="/Dashboard"
            name="Layout"
            render={() => <Dashboard />}
          />
          <Route
            exact
            path="/Calendar"
            name="Calendar"
            render={() => <Calendar />}
          ></Route>
          <Route
            exact
            path="/Profile"
            name="Profile"
            render={() => <Profile />}
          />
          <Route
            exact
            path="/Patients"
            name="Patients"
            render={() => <Patients />}
          />
          <Route
            exact
            path="/Records"
            name="Records"
            render={() => <Records />}
          />
          <Route
            exact
            path="/Payments"
            name="Payments"
            render={() => <Payments />}
          />
          <Route exact path="/Stocks" name="Stocks" render={() => <Stocks />} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
