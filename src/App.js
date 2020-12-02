import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact.js";
import Projects from "./Pages/Projects.js";
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
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.project to the project json array
  state = {
    project
  };

  removeProject = id => {
    // Filter this.state.project for projects with an id not equal to the id being removed
    const projects = this.state.projects.filter(project => project.id !== id);
    // Set this.state.projects equal to the new projects array
    this.setState({ projects });
  };

  // Map over this.state.projects and render a ProjectCard component for each project object
  render() {
    return (
      <Wrapper>
        <Title>Projects List</Title>
        {this.state.projects.map(project => (
          <ProjectCard
            removeProject={this.removeProject}
            id={project.id}
            key={project.id}
            project={project.project}
            image={project.image}
            description={project.description}
            url={project.url}
            repo={project.repo}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
