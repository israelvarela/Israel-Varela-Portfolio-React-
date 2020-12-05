import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact.js";
import Projects from "./Pages/Projects.js";
import Footer from "./components/Footer/footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={["/", "/about"]} component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}



export default App;