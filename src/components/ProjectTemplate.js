import React from "react";
import "./ProjectTemplate.css";

function ProjectTemplate(props) {
  const transition = props.class ? "transition" : "";
  const classes = `Project ${transition}`;

  return (
    <div className={classes}>
      <div
        className={`ProjectBox ${
          props.dark ? "darkTransparent" : "lightTransparent"
        }`}
      >
        <img className="projectPicture" src={props.picture}></img>
        <div className="projectDatas">
          <div>
            <h1 className="projectName">{props.title}</h1>
            <div
              className={`projectDescription ${
                props.dark ? "darkBackgroundAndColor2" : "lightBackgroundLinear"
              }`}
            >
              <p>{props.description}</p>
            </div>
            <p className="projectTechnologies">{props.technologies}</p>
            <p className="projectLinks">{props.links}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
