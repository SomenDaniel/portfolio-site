import React from "react";
import "./WorkDisplayTemplate.css";
import extend from "../images/extend-png-4.png";

function WorkDisplayTemplate(props) {
  function cl() {
    console.log("mükszik");
  }
  return (
    <>
      <div
        className={`WorkDisplayTemplateContainer ${
          props.dark ? "darkBackgroundAndColor2" : "lightBackgroundLinear"
        }`}
      >
        <div
          className={`WorkInformations ${
            props.dark ? "darkBorderBottom2" : "lightBorderBottom2"
          }`}
        >
          <p className="position">{props.position}</p>
        </div>
        <div className="workPlace">
          <p> {props.company}</p>
          <p>{props.workTime}</p>
        </div>
        <div className={"WorkDescription"}>
          <div className="descriptionWrapper">
            <p>{props.workDesc[0]}</p>
            <p>{props.workDesc[1]}</p>
            <p>{props.workDesc[2]}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDisplayTemplate;
