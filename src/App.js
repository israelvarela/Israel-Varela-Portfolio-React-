import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact.js";
import Portfolio from "./Pages/Portfolio.js";
import Resume from "./Pages/Resume.js";
import Footer from "./components/Footer/footer";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
