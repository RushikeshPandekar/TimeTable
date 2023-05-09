import React from "react";
import "../css/Lecture.css";

export default function Lecture(props) {
  return (
    <div>
      <div class="lecture">
        <div class="time">
          <h3>{props.data.startTime.replace(/^"(.*)"$/, "$1")}</h3>
          <h5>AM</h5>
        </div>
        <div class="subjectAndInfo">
          <h3>{props.data?.subject?.replace(/^"(.*)"$/, "$1")}</h3>
          <h5>{props.data?.roomNo?.replace(/^"(.*)"$/, "$1")}</h5>
          <h5>{props.data?.facultyName?.replace(/^"(.*)"$/, "$1")}</h5>
        </div>
      </div>
    </div>
  );
}
