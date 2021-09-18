import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
