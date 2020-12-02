import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import project from "./project.json";

class  App extends Component {
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
  