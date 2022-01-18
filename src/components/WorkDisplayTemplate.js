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
          <p className="position">beosztás</p>
        </div>
        <div className="workPlace">
          <p>munkahely</p>
          <p>2020-2021</p>
        </div>
        <div className={"WorkDescription"}>
          <div className="descriptionWrapper">
            <p>asd</p>
            <p>asd</p>
            <p>asd</p>
            <p>asd</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDisplayTemplate;
