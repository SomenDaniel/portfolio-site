import React from "react";
import "./EducationDisplayTemplate.css";

function EducationDisplayTemplate(props) {
  return (
    <div
      className={`EduCont ${
        props.dark ? "darkTransparent darkColor" : "lightTransparent lightColor"
      }`}
    >
      <h1>végzettség</h1>
      <h3>hol végeztél</h3>
      <p>mikor</p>
      <div className="eduDescription">
        <p>asssssssssssssssssssssssssss</p>
        <p>assssssssssssssssssssssss</p>
        <p>assssssssssssssssssssssss</p>
      </div>
    </div>
  );
}

export default EducationDisplayTemplate;
