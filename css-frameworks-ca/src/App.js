import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/news" component={News}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
