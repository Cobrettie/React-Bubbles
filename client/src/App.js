import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm/LoginForm";
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <PrivateRoute path='/bubblepage' component={BubblePage} />
        <Route exact path="/" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
