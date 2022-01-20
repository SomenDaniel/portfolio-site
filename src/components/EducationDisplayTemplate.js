import React from "react";
import "./EducationDisplayTemplate.css";

function EducationDisplayTemplate(props) {
  return (
    <div
      className={`EduCont ${
        props.dark ? "darkTransparent darkColor" : "lightTransparent lightColor"
      }`}
    >
      <h1>{props.education}</h1>
      <h3>{props.where}</h3>
      <p>{props.when}</p>
      <div className="eduDescription">
        <p>{props.desc[0]}</p>
        <p>{props.desc[1]}</p>
        <p>{props.desc[2]}</p>
      </div>
    </div>
  );
}

export default EducationDisplayTemplate;
