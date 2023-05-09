import React from "react";
import "../css/TTDay.css";
import Lecture from "./Lecture";

export default function TTDay(props) {
  const LectureObjects = props.data?.map((lecture) => (
    <Lecture data={lecture}></Lecture>
  ));
  return (
    <div>
      <div class="carousel-item active">
        <h1>{props.Day}</h1>
        <div class="showTT">{LectureObjects}</div>
      </div>
    </div>
  );
}
